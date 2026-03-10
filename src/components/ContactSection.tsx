import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you! We'll be in touch shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Visit our atelier or reach out for a private consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info cards */}
          <div className="space-y-6">
            {[
              { icon: Phone, title: "Call Us", lines: ["+1 (212) 555-0123", "+1 (212) 555-0124"] },
              { icon: Mail, title: "Email Us", lines: ["info@lumiere.com", "sales@lumiere.com"] },
              { icon: Clock, title: "Business Hours", lines: ["Mon - Sat: 10am - 7pm", "Sunday: 12pm - 5pm"] },
            ].map(({ icon: Icon, title, lines }) => (
              <div key={title} className="bg-card rounded-lg p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium text-foreground mb-1">{title}</h3>
                  {lines.map((l) => (
                    <p key={l} className="font-body text-sm text-muted-foreground">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 space-y-6">
            {[
              { label: "Full Name", key: "name" as const, type: "text", placeholder: "John Doe", required: true },
              { label: "Email Address", key: "email" as const, type: "email", placeholder: "john@example.com", required: true },
              { label: "Phone Number", key: "phone" as const, type: "tel", placeholder: "+1 (555) 000-0000", required: false },
            ].map((field) => (
              <div key={field.key}>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  {field.label} {field.required && <span className="text-destructive">*</span>}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
                />
              </div>
            ))}
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell us about what you're looking for..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-md font-body text-sm tracking-luxury uppercase hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
            <p className="text-center font-body text-xs text-muted-foreground">
              We typically respond within 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
