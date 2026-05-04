import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
  image?: string;
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
  const wrapperProps = isComingSoon ? {} : { href: link, target: "_blank" };

  return (
    <Wrapper {...wrapperProps} className={`group block h-full ${isComingSoon ? "cursor-default" : ""}`}>
      <article className="premium-card relative flex h-full flex-col overflow-hidden rounded-2xl">
        {/* Image placeholder */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-muted to-muted/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-muted-foreground/20">{title.charAt(0)}</span>
          </div>
          {/* Hover overlay */}
          <div className={`absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 ${
            isComingSoon ? "" : "group-hover:bg-foreground/5"
          }`}>
            {!isComingSoon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5 text-foreground" />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Meta row */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Project
              </span>
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {category}
            </span>
          </div>

          {/* Title and description */}
          <h3 className={`mb-2 text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 ${
            isComingSoon ? "" : "group-hover:text-primary"
          }`}>
            {title}
          </h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="badge-outline rounded-full px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="badge-outline rounded-full px-3 py-1 text-xs">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </article>
    </Wrapper>
  );
}

// List view variant for the projects page
export function ProjectListItem({
  title,
  description,
  category,
  tags,
  link,
}: ProjectCardProps) {
  const isComingSoon = link === "#";
  const Wrapper = isComingSoon ? "div" : Link;
  const wrapperProps = isComingSoon ? {} : { href: link, target: "_blank" };

  return (
    <Wrapper {...wrapperProps} className={`group block ${isComingSoon ? "cursor-default" : ""}`}>
      <article className="project-list-item flex items-center justify-between gap-6 py-6">
        {/* Left: Title and description */}
        <div className="flex-1 space-y-1">
          <h3 className={`text-lg font-medium text-foreground transition-colors ${
            isComingSoon ? "" : "group-hover:text-primary"
          }`}>
            {title}
          </h3>
          <p className="hidden text-sm text-muted-foreground sm:block">
            {description}
          </p>
        </div>

        {/* Center: Tags */}
        <div className="hidden flex-wrap gap-2 lg:flex">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="badge-outline rounded-full px-3 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Right: Category and icon */}
        <div className="flex items-center gap-6">
          <span className="hidden text-sm text-muted-foreground md:block">
            {category}
          </span>
          <div className={`flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all ${
            isComingSoon 
              ? "opacity-50" 
              : "group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
          }`}>
            <Plus className={`h-4 w-4 transition-transform ${
              isComingSoon ? "" : "group-hover:rotate-45"
            }`} />
          </div>
        </div>
      </article>
    </Wrapper>
  );
}
