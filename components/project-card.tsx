import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  image,
}: ProjectCardProps) {
  const isComingSoon = link === "#";
  const Wrapper = isComingSoon ? "div" : Link;
  const wrapperProps = isComingSoon ? {} : { href: link, target: "_blank" };

  return (
    <Wrapper {...wrapperProps} className={`group block h-full ${isComingSoon ? "cursor-default" : ""}`}>
      <article className="project-card-enhanced relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="project-image object-cover transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="project-image absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 transition-transform duration-700 ease-out">
              <span className="text-6xl font-bold text-white/10">{title.charAt(0)}</span>
            </div>
          )}
          {/* Hover overlay with gradient */}
          <div className={`project-overlay absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-all duration-500 ${
            isComingSoon ? "" : ""
          }`} />
          {/* Arrow indicator */}
          {!isComingSoon && (
            <div className="project-arrow absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-white opacity-0 shadow-xl transition-all duration-500">
              <ArrowUpRight className="h-6 w-6 text-foreground" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Meta row */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Project
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className={`mb-2 text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 ${
            isComingSoon ? "" : "group-hover:text-primary"
          }`}>
            {title}
          </h3>
          
          {/* Description */}
          <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="rounded-full border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </article>
    </Wrapper>
  );
}

// List view variant for the projects page (matches WenLaunch style)
export function ProjectListItem({
  title,
  description,
  category,
  tags,
  link,
  image,
}: ProjectCardProps) {
  const isComingSoon = link === "#";
  const Wrapper = isComingSoon ? "div" : Link;
  const wrapperProps = isComingSoon ? {} : { href: link, target: "_blank" };

  return (
    <Wrapper {...wrapperProps} className={`group block ${isComingSoon ? "cursor-default" : ""}`}>
      <article className="flex items-center justify-between gap-6 border-b border-border/50 py-6 transition-all duration-300 hover:bg-muted/30">
        {/* Left: Title */}
        <div className="min-w-[180px]">
          <h3 className={`text-lg font-medium text-foreground transition-colors ${
            isComingSoon ? "" : "group-hover:text-primary"
          }`}>
            {title}
          </h3>
        </div>

        {/* Description - hidden on mobile */}
        <div className="hidden flex-1 md:block">
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="hidden items-center gap-2 lg:flex">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Preview image - appears on hover for non-mobile */}
        <div className="relative hidden h-20 w-32 overflow-hidden rounded-lg lg:block">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          )}
        </div>

        {/* Expand icon */}
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 ${
          isComingSoon 
            ? "opacity-50" 
            : "group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
        }`}>
          <Plus className={`h-4 w-4 transition-transform duration-300 ${
            isComingSoon ? "" : "group-hover:rotate-45"
          }`} />
        </div>
      </article>
    </Wrapper>
  );
}
