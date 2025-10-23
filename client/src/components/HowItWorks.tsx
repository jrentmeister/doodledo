import { Card } from "@/components/ui/card";
import { ShoppingCart, FileText, Palette } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Purchase",
    description: "Buy high-resolution digital files for personal use. Instant download after purchase.",
  },
  {
    icon: FileText,
    title: "License",
    description: "Get commercial licensing rights for your products. Multiple tiers available.",
  },
  {
    icon: Palette,
    title: "Commission",
    description: "Request custom patterns tailored to your specific needs and brand aesthetic.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple ways to bring beautiful patterns to your projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-8 text-center" data-testid={`card-step-${index + 1}`}>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-medium mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
