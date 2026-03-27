import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download, ExternalLink } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#app-interface" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? "glass-strong py-3 shadow-md" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32">
        <button onClick={() => {
          if (location.pathname !== '/') navigate('/');
          else window.scrollTo({ top: 0, behavior: "smooth" });
        }} className="flex items-center gap-2">
          <img src="/favicon.png" alt="Flowllet Logo" className="h-9 w-9 object-contain" />
          <span className="font-flowllet font-bold text-xl text-foreground">Flowllet</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            className="gradient-primary text-primary-foreground rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            onClick={() => navigate('/web')}
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Try Web
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[1100] w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-white border border-slate-100 shadow-sm active:scale-95 transition-all"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-slate-900 rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-slate-900 rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-slate-900 rounded-full"
          />
        </button>
      </div>

      {/* Modern Compact Modal - Oriture Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute top-full left-0 right-0 z-[1050] mx-4 sm:mx-8 mt-4 md:hidden"
          >
            <div className="bg-[#0d0a1a] border border-white/5 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] p-7 md:p-8 overflow-hidden relative">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/20">
                    <img src="/favicon.png" alt="Logo" className="w-5 h-5 object-contain" />
                  </div>
                  <span className="font-flowllet font-bold text-lg text-white">Flowllet</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <span className="text-xl leading-none">×</span>
                </button>
              </div>

              {/* Grid Links */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    onClick={() => {
                      handleNav(link.href);
                      setIsOpen(false);
                    }}
                    className="flex flex-col items-start justify-between min-h-[90px] p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group active:scale-[0.97]"
                  >
                    <div className="w-full flex justify-end">
                      <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <span className="text-sm font-heading font-bold text-white/90 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col gap-6">
                <Button
                  className="w-full h-16 gradient-primary text-primary-foreground rounded-2xl text-base font-heading font-black shadow-lg shadow-primary/20 active:scale-95 transition-all"
                  onClick={() => {
                    navigate('/web');
                    setIsOpen(false);
                  }}
                >
                  <ExternalLink className="w-5 h-5 mr-3" />
                  Try Web App
                </Button>


              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
