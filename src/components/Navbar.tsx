import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Collections", "Products", "About", "Testimonials", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="font-display text-2xl font-semibold tracking-wide text-foreground">
          LUMIÈRE
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block text-nav text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
