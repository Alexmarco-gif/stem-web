import Link from "next/link";

const footerLinks = {
  Product: [
    { name: "Platform", href: "/platform" },
    { name: "Solutions", href: "/solutions" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Security", href: "#" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/request-a-scoping-call" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-deep-ink text-white py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-extrabold text-2xl tracking-tighter">
                Stem
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              Decision intelligence for fast-moving markets. Stem helps teams
              turn fragmented external signals into decision-ready intelligence.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-xs font-bold">In</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-xs font-bold">X</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Stem-Cogent. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white">
              Status
            </Link>
            <Link href="#" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
