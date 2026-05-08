export interface ArticleCard {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  author: string;
  image_url: string;
  publish_date: string;
}

export interface ArticleDetail extends ArticleCard {
  content: string;
  created_at: string;
  updated_at: string;
}

const API_BASE_URL: string = import.meta.env.VITE_API_URL;

async function apiGet<T>(path: string): Promise<T> {
  const url = `${API_BASE_URL.replace(/\/$/, "")}${path}`;
  const response = await fetch(url);

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      text || `Request failed with status ${response.status}`
    );
  }

  return response.json() as Promise<T>;
}

export function getArticles(): Promise<ArticleCard[]> {
  return apiGet<ArticleCard[]>("/api/articles/");
}

export function getArticle(slug: string): Promise<ArticleDetail> {
  return apiGet<ArticleDetail>(`/api/articles/${slug}/`);
}

