import { useState } from "react";
import sapphireImg from "@/assets/product-sapphire.jpg";
import goldNecklaceImg from "@/assets/product-gold-necklace.jpg";
import diamondRingImg from "@/assets/product-diamond-ring.jpg";
import goldSetImg from "@/assets/product-gold-set.jpg";

const categories = ["All", "Necklaces", "Rings", "Sets"];

const products = [
  { name: "Eternal Gold Necklace", category: "Necklaces", desc: "Handcrafted 22k gold necklace with intricate detailing", price: "$3,499", image: goldNecklaceImg },
  { name: "Sapphire Dreams Necklace", category: "Necklaces", desc: "Exquisite gold necklace adorned with blue sapphires", price: "$2,499", image: sapphireImg },
  { name: "Diamond Solitaire Ring", category: "Rings", desc: "Classic solitaire diamond ring in platinum setting", price: "$4,999", image: diamondRingImg },
  { name: "Royal Gold Set", category: "Sets", desc: "Matching earrings and pendant in 18k gold with diamonds", price: "$5,299", image: goldSetImg },
];

const ProductsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Featured Products
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Handcrafted masterpieces that blend artistry with elegance
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((product) => (
            <div
              key={product.name}
              className="bg-background rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-2xl text-foreground">{product.name}</h3>
                  <span className="font-body text-xs tracking-luxury uppercase text-muted-foreground border border-border px-3 py-1 rounded-full shrink-0 ml-3">
                    {product.category}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4">{product.desc}</p>
                <p className="font-display text-2xl font-semibold text-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
