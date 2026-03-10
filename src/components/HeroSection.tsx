import heroImage from "@/assets/hero-necklace.jpg";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:items-center md:pb-0">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury diamond pendant necklace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-nav text-primary">Crafted with Perfection</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-light italic text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Timeless Elegance,{" "}
            <span className="block">Modern Luxury</span>
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-md opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Discover our curated collection of fine jewellery, where traditional
            craftsmanship meets contemporary design. Each piece tells a unique
            story of elegance and sophistication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <button
              onClick={() => scrollTo("collections")}
              className="bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-luxury uppercase hover:opacity-90 transition-opacity duration-300 rounded-sm flex items-center justify-center gap-2"
            >
              Explore Collections
              <span>→</span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-foreground text-foreground px-8 py-4 font-body text-sm tracking-luxury uppercase hover:bg-foreground hover:text-background transition-all duration-300 rounded-sm"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
