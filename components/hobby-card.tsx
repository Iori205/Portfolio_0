interface HobbyCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export function HobbyCard({ title, description }: HobbyCardProps) {
  return (
    <article className="premium-card group relative h-full rounded-2xl p-6">
      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}
