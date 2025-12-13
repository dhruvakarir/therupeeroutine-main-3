import BlogCard from "./BlogCard";

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
    id: "renting-vs-buying-a-home",
    title: "Renting v/s Buying a Home: Indian Perspective",
    excerpt: "Writing this article to help individuals make informed decisions about pros and cons of renting versus buying a home in the Indian real estate market.",
    category: "Retirement Planning",
    readTime: "4 min read",
    author: "Dhruv Karir",
    image: "https://plus.unsplash.com/premium_photo-1678208875073-046e2f7a29e0?q=80&w=1740"
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
    id: "ctc-vs-in-hand",
    title: "Indian Salary structure decoded: CTC vs in-hand salary",
    excerpt: "Understand the difference between CTC and in-hand salary, and learn how to optimize your salary structure for maximum benefits.",
    readTime: "15 min read",
    category: "Salary Structure",
    author: "Dhruv Karir",
    image: "https://images.unsplash.com/photo-1729077537326-91749c1c9197?q=80&w=800"
  },
  {
    id: "gold-investment-options",
    title: "Gold Investment Options: Physical vs Digital vs Sovereign Bonds",
    excerpt: "Compare physical gold, digital gold, gold ETFs, and Sovereign Gold Bonds to make informed decisions about gold investments in your portfolio.",
    category: "Alternative Investments",
    readTime: "6 min read",
    author: "Dhruv Karir",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80"
  }
];

const FeaturedArticles = () => {
  return (
    <section id="articles" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Featured Articles
          </h2>
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
  );
};

export default FeaturedArticles;
