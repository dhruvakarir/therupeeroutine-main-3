import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { ArticleCard, getArticles } from "@/api/articles";

const Articles = () => {
  const {
    data: articles,
    isLoading,
    isError,
  } = useQuery<ArticleCard[]>({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

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

            {isLoading && (
              <p className="text-center text-muted-foreground">Loading articles...</p>
            )}

            {isError && (
              <p className="text-center text-red-500">
                Failed to load articles. Please try again later.
              </p>
            )}

            {articles && articles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <BlogCard
                    key={article.slug}
                    id={article.slug}
                    title={article.title}
                    excerpt={article.excerpt}
                    category={article.category}
                    readTime={article.read_time}
                    author={article.author}
                    image={article.image_url}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
