const footerLinks = {
  Collections: ["Rings", "Necklaces", "Earrings", "Bracelets"],
  Company: ["About Us", "Our Story", "Careers", "Press"],
  Support: ["Contact", "FAQs", "Shipping", "Returns"],
};

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-display text-2xl font-semibold text-footer-heading tracking-wide">
              LUMIÈRE
            </span>
            <p className="font-body text-sm mt-4 leading-relaxed">
              Crafting timeless pieces of fine jewellery since 2001.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body text-xs tracking-luxury uppercase text-footer-heading font-medium mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm hover:text-footer-heading transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-footer-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-footer-foreground/60">
            © 2026 Lumière. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-footer-foreground/60 hover:text-footer-heading transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-footer-foreground/60 hover:text-footer-heading transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
