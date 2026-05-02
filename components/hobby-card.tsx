import Link from "next/link";

interface HobbyCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export function HobbyCard({ title, description, icon }: HobbyCardProps) {
  return (
    <article className="glass-card hover-glow group relative h-full rounded-2xl p-6 transition-all duration-500">
      {/* Number indicator */}
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary transition-all group-hover:border-primary/40 group-hover:bg-primary/10">
        {icon}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Subtle accent line */}
      <div className="absolute bottom-6 left-6 h-0.5 w-8 rounded-full bg-primary/30 opacity-0 transition-all duration-500 group-hover:w-12 group-hover:opacity-100" />
    </article>
  );
}
