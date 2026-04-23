import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
}

export function ProjectCard({
  title,
  description,
  category,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <Card className="glass-card h-full flex flex-col group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] border-border/50">
      {/* TOP */}
      <CardHeader className="flex-grow">
        <div className="flex items-start justify-between">
          <Badge className="mb-2 bg-primary/10 text-primary">{category}</Badge>

          <Link
            href={link}
            className="text-foreground hover:text-primary transition-colors"
            aria-label={`View ${title}`}
          >
            <ExternalLink className="h-6 w-6 group-hover:scale-110 group-hover:rotate-1 transition-transform" />
          </Link>
        </div>

        <CardTitle className="group-hover:text-primary transition-colors text-xl">
          {title}
        </CardTitle>

        {/* 🔥 FIX: line clamp */}
        <CardDescription className="leading-relaxed line-clamp-3 min-h-[72px]">
          {description}
        </CardDescription>
      </CardHeader>

      {/* BOTTOM */}
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs px-3 py-1 rounded-full 
bg-white/5 border border-white/10 
backdrop-blur-md 
hover:bg-primary/20 hover:border-primary/30 
transition"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
