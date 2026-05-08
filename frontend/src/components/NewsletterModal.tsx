import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
  endpoint?: string;
};

const NewsletterModal: React.FC<Props> = ({ open, onClose, endpoint }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  if (!open) return null;

  const sheetUrl = endpoint || ((globalThis as any).process?.env?.REACT_APP_SHEET_URL) || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!name.trim() || !email.trim()) {
      setMessage("Please provide name and email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Request failed");
      }
      setMessage("Thanks — you've been subscribed.");
      setName("");
      setEmail("");
      setTimeout(onClose, 900);
    } catch (err) {
      console.error(err);
      setMessage("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-lg w-full max-w-md p-6 z-10">
        <h3 className="text-lg font-semibold mb-3">Subscribe to Newsletter</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-sm block mb-1">Name</label>
            <input
              className="w-full px-3 py-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {message && <div className="text-sm text-center mt-1">{message}</div>}

          <div className="flex justify-end gap-2 mt-4">
            <Button type="button" variant="ghost" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? "Saving..." : "Subscribe"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;