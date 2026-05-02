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
  const isComingSoon = link === "#";
  const Wrapper = isComingSoon ? "div" : Link;
  const wrapperProps = isComingSoon ? {} : { href: link };

  return (
    <Wrapper {...wrapperProps} className={`group block h-full ${isComingSoon ? "cursor-default" : ""}`}>
      <article className="glass-card relative flex h-full flex-col rounded-2xl p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Badge className="rounded-full border-0 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {category}
            </Badge>
            {isComingSoon && (
              <Badge className="rounded-full border-0 bg-amber-500/15 px-3 py-1 text-xs font-medium text-amber-400">
                Coming soon
              </Badge>
            )}
          </div>
          <div className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 ${
            isComingSoon 
              ? "opacity-40" 
              : "group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary group-hover:shadow-lg group-hover:shadow-primary/20"
          }`}>
            <ArrowUpRight className={`h-4 w-4 ${
              isComingSoon 
                ? "" 
                : "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            }`} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <h3 className={`text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 ${
            isComingSoon ? "" : "group-hover:text-primary"
          }`}>
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
              className={`rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-all duration-300 ${
                isComingSoon ? "" : "group-hover:border-primary/20 group-hover:text-foreground/80"
              }`}
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
              +{tags.length - 4}
            </span>
          )}
        </div>
      </article>
    </Wrapper>
  );
}
