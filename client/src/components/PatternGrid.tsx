import PatternCard from "./PatternCard";

interface Pattern {
  id: string;
  title: string;
  image: string;
  price?: string;
  category?: string;
}

interface PatternGridProps {
  patterns: Pattern[];
  title?: string;
  subtitle?: string;
}

export default function PatternGrid({ patterns, title, subtitle }: PatternGridProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8" id="collections">
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {patterns.map((pattern) => (
            <PatternCard key={pattern.id} {...pattern} />
          ))}
        </div>
      </div>
    </section>
  );
}
