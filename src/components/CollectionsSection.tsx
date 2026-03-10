import bridalImg from "@/assets/collection-bridal.jpg";
import classicImg from "@/assets/collection-classic.jpg";
import gemsImg from "@/assets/collection-gems.jpg";
import { ArrowRight } from "lucide-react";

const collections = [
  { name: "Bridal Collection", desc: "Timeless pieces for your special day", pieces: 24, image: bridalImg },
  { name: "Classic Elegance", desc: "Sophisticated designs for every occasion", pieces: 18, image: classicImg },
  { name: "Precious Gems", desc: "Rare stones in exquisite settings", pieces: 15, image: gemsImg },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Our Collections
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Explore our carefully curated collections, each designed to capture
            the essence of timeless beauty and modern sophistication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <div
              key={col.name}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl text-background mb-1">{col.name}</h3>
                <p className="font-body text-sm text-background/70 mb-3">{col.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs tracking-luxury uppercase text-background/60">
                    {col.pieces} Pieces
                  </span>
                  <ArrowRight className="w-5 h-5 text-background/60 group-hover:text-background transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
