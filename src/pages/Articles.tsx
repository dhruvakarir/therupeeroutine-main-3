import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const articles = [
  {
    id: "ppf-vs-nps",
    title: "PPF vs NPS: Which Retirement Option is Better for You?",
    excerpt: "Compare Public Provident Fund and National Pension System to understand tax benefits, returns, and liquidity for your retirement planning in India.",
    category: "Retirement Planning",
    readTime: "8 min read",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
  },
  {
    id: "sip-mutual-funds",
    title: "Complete Guide to Investing in Mutual Funds via SIP",
    excerpt: "Learn how Systematic Investment Plans work, choosing the right mutual funds, and building wealth through disciplined monthly investments.",
    category: "Mutual Funds",
    readTime: "12 min read",
    author: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
  },
  {
    id: "one-crore-portfolio",
    title: "How to Build a ₹1 Crore Portfolio by Age 40",
    excerpt: "Strategic investment plan combining equity mutual funds, PPF, and smart asset allocation to achieve your first crore through disciplined investing.",
    category: "Wealth Building",
    readTime: "10 min read",
    author: "Anita Desai",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
  },
  {
    id: "creating-a-budget",
    title: "Creating a Budget and Sticking to It: An Indian Guide",
    excerpt: "Comprehensive guide to create a budget for your family to track expenses, save more, and achieve financial goals in the Indian context.",
    category: "Wealth Building",
    readTime: "4 min read",
    author: "Dhruv Karir",
    image: "https://images.unsplash.com/photo-1652422485192-d959b9a8d16e?q=80&w=1740"
  },
  {
    id: "building-emergency-fund",
    title: "Step 1 in Money: Building Emergency Fund",
    excerpt: "Essential guide to creating an emergency fund covering 6 months of expenses to ensure financial security during unforeseen events.",
    category: "Wealth Building",
    readTime: "6 min read",
    author: "Dhruv Karir",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80"
  },
  {
    id: "gold-investment-options",
    title: "Gold Investment Options: Physical vs Digital vs Sovereign Bonds",
    excerpt: "Compare physical gold, digital gold, gold ETFs, and Sovereign Gold Bonds to make informed decisions about gold investments in your portfolio.",
    category: "Alternative Investments",
    readTime: "11 min read",
    author: "Neha Singh",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80"
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                All Articles
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert advice and actionable strategies to help you take control of your finances
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <BlogCard key={index} {...article} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
