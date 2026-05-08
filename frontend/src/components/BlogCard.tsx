import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  image: string;
}

const BlogCard = ({ id, title, excerpt, category, readTime, author, image }: BlogCardProps) => {
  const navigate = useNavigate();
  return (
    <Card 
      className="group overflow-hidden border-border hover:shadow-medium transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/articles/${id}`)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
          {category}
        </Badge>
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-3 mb-4">
          {excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>{author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{readTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
