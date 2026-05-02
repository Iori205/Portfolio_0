import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
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
    <Link href={link} className="group block h-full">
      <article className="glass-card hover-glow relative flex h-full flex-col rounded-2xl p-6 transition-all duration-500">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <Badge className="rounded-full border-0 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {category}
          </Badge>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary">
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground/80"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-xs text-muted-foreground">
              +{tags.length - 4}
            </span>
          )}
        </div>

        {/* Subtle corner accent on hover */}
        <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-3xl bg-gradient-to-tl from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </article>
    </Link>
  );
}
