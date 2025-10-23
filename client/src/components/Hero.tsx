import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Bedroom_with_pattern_wallpaper_5ae2e183.png";

export default function Hero() {
  const handleExplore = () => {
    console.log("Explore patterns clicked");
    document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCommission = () => {
    console.log("Commission clicked");
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Art that repeats beautifully
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          Discover unique pattern designs for fabric, wallpaper, and more. Purchase digital files, license for commercial use, or commission custom creations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <Button
            size="lg"
            variant="default"
            onClick={handleExplore}
            className="min-w-[200px]"
            data-testid="button-explore"
          >
            Explore Patterns
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleCommission}
            className="min-w-[200px] bg-background/20 backdrop-blur-sm text-white border-white/30 hover:bg-background/30"
            data-testid="button-commission-hero"
          >
            Commission Custom
          </Button>
        </div>
      </div>
    </section>
  );
}
