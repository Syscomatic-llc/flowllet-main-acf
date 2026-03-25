import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download, ExternalLink } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#wallet" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32">
        <button onClick={() => {
          if (location.pathname !== '/') navigate('/');
          else window.scrollTo({ top: 0, behavior: "smooth" });
        }} className="flex items-center gap-2">
          <img src="/purplelogo.png" alt="Flowllet Logo" className="h-9 w-9 object-contain" />
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

        <div className="hidden md:block">
          <Button
            className="gradient-primary text-primary-foreground rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            onClick={() => navigate('/web')}
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Try Web
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 pt-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="gradient-primary text-primary-foreground rounded-full mt-4"
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.zahed.flowllet", "_blank")}
              >
                <Download className="w-4 h-4 mr-1" />
                Download App
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
