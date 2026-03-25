import { motion } from "framer-motion";
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronUp, 
  ArrowRight,
  ShieldCheck,
  Globe,
  Send
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNav = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Multi-Wallet", href: "#wallet" },
        { label: "Cloud Sync", href: "#cloud-sync" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "FAQ", href: "#faq" },
      ]
    },
    {
      title: "Social",
      links: [
        { label: "Twitter", href: "https://twitter.com", icon: Twitter },
        { label: "GitHub", href: "https://github.com", icon: Github },
        { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
      ]
    }
  ];

  return (
    <footer className="relative bg-[#05010d] pt-12 pb-12 overflow-hidden border-t border-white/5">
      {/* ── BACKGROUND DECORATIONS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          
          {/* ── BRAND SECTION ── */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <img src="/whitelogo.png" alt="Flowllet Logo" className="h-12 w-12 object-contain" />
              <div>
                <span className="font-flowllet font-black text-2xl text-white tracking-tight">Flowllet</span>
                <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] leading-none">by Syscomatic</p>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/50 text-base leading-relaxed"
            >
              The definitive platform for mastering your money flow. Beautifully simple, radically secure, and completely free.
            </motion.p>

          </div>

          {/* ── NAVIGATION LINKS ── */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerSections.map((section, idx) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
              >
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 opacity-40">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("#") ? (
                        <button
                          onClick={() => handleNav(link.href)}
                          className="group flex items-center gap-2 text-white/60 hover:text-white transition-all text-base"
                        >
                          <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                        </button>
                      ) : (
                        <a 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 text-white/60 hover:text-white transition-all text-base"
                        >
                          {link.icon && <link.icon className="w-4 h-4 group-hover:text-primary transition-colors" />}
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-white/50 text-sm font-medium">
              © {currentYear} <span className="font-flowllet text-white/90 font-bold">Flowllet</span> by Syscomatic LLC. All rights reserved.
            </p>
            <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
               <div className="relative flex items-center justify-center h-3.5 w-3.5 rounded-full bg-[#006a4e] shrink-0 outline outline-1 outline-white/10">
                 <div className="h-1.5 w-1.5 rounded-full bg-[#f42a41]"></div>
               </div>
               <span>Proudly built in Bangladesh</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <a 
               href="mailto:myflowllet@syscomatic.com" 
               className="group relative h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all overflow-hidden shadow-sm"
             >
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Mail className="w-4.5 h-4.5 relative z-10 group-hover:scale-110 transition-transform" />
             </a>
             <button 
               onClick={scrollToTop}
               className="group relative h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all overflow-hidden shadow-sm"
             >
                <ChevronUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>

      {/* ── ACCENT LINE ── */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-accent/0" />
    </footer>
  );
};

export default Footer;
