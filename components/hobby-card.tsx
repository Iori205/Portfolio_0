interface HobbyCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export function HobbyCard({ title, description }: HobbyCardProps) {
  return (
    <article className="glass-card group relative h-full overflow-hidden rounded-2xl">
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/40" />
      
      <div className="p-6 pl-7">
        {/* Glowing dot indicator */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
            <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-primary/40" style={{ animationDuration: "2s" }} />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Accent line on hover */}
        <div className="absolute bottom-6 left-7 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-12" />
      </div>
    </article>
  );
}
