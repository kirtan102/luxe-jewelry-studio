const testimonials = [
  {
    text: "The craftsmanship is absolutely stunning. My engagement ring from Lumière exceeded all expectations. Every detail is perfect.",
    name: "Sarah Mitchell",
    location: "New York, NY",
    initial: "S",
  },
  {
    text: "I've been a customer for over 5 years. The quality and service are unmatched. My wife was brought to tears. Thank you!",
    name: "Michael Thompson",
    location: "Chicago, IL",
    initial: "M",
  },
  {
    text: "The bridal collection is breathtaking. Lumière made our special day even more magical with their exquisite pieces.",
    name: "Emily Rodriguez",
    location: "Los Angeles, CA",
    initial: "E",
  },
];

const stats = [
  { value: "5000+", label: "Happy Clients" },
  { value: "15000+", label: "Pieces Crafted" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "25+", label: "Years Experience" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Trusted by thousands of discerning clients worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-secondary-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <p className="font-body text-sm font-medium text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-body text-sm text-primary-foreground">{t.initial}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-2">{s.value}</p>
              <p className="font-body text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
