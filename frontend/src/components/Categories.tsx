import { Card } from "@/components/ui/card";
import { PiggyBank, TrendingUp, CreditCard, Home, GraduationCap, Shield } from "lucide-react";

const categories = [
  {
    icon: PiggyBank,
    title: "Tax Planning & Savings",
    description: "Master Section 80C deductions and tax-saving instruments",
    color: "text-secondary"
  },
  {
    icon: TrendingUp,
    title: "Mutual Funds & SIPs",
    description: "Build wealth through systematic investment plans",
    color: "text-accent"
  },
  {
    icon: CreditCard,
    title: "Stock Market & IPOs",
    description: "Navigate NSE, BSE, and new listing opportunities",
    color: "text-primary"
  },
  {
    icon: Home,
    title: "Real Estate & REITs",
    description: "Property investment and real estate investment trusts",
    color: "text-secondary"
  },
  {
    icon: GraduationCap,
    title: "Retirement Planning",
    description: "PPF, NPS, EPF and long-term wealth strategies",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Insurance & Gold",
    description: "Term plans, health insurance, and gold investments",
    color: "text-primary"
  }
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Explore Topics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find expert guidance on every aspect of your financial journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 cursor-pointer group border-border"
              >
                <Icon className={`h-12 w-12 mb-4 ${category.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
