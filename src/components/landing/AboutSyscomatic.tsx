import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Building2, 
  Code2, 
  Rocket, 
  HeartHandshake, 
  ExternalLink,
  Globe,
  Award,
  Users,
  CheckCircle2
} from "lucide-react";

const AboutSyscomatic = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    { 
      icon: Code2, 
      label: "Designed & Built",
      status: "Premium Quality",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    { 
      icon: Rocket, 
      label: "Marketed & Launched",
      status: "Global Reach",
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    { 
      icon: Building2, 
      label: "Managed & Maintained",
      status: "Reliable Support",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    { 
      icon: HeartHandshake, 
      label: "Community Driven",
      status: "User Focused",
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#fcfaff] relative overflow-hidden">
      {/* Decorative Branding Silhouette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-primary">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* ── Branding Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <a 
              href="https://syscomatic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-sm mb-8 transition-transform hover:scale-105 cursor-pointer"
            >
              <img 
                src="/assets/Asset%204100.png" 
                alt="Syscomatic Logo" 
                className="w-5 h-5 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                }}
              />
              <Building2 className="w-4 h-4 hidden fallback-icon" />
              Syscomatic LLC
            </a>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
              Built by <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Syscomatic LLC
              </span>
            </h2>
          </motion.div>

          {/* ── Mission Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 relative overflow-hidden group mb-20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <Award className="w-10 h-10 text-primary/20 mx-auto mb-6" />
              <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed italic italic-primary">
                "We believe financial clarity should be accessible to everyone, not just those who can afford expensive tools."
              </p>
              
              <a 
                href="https://syscomatic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center mt-10 mb-2 transition-transform hover:scale-105"
              >
                <img 
                  src="/assets/syscomatic.png" 
                  alt="Syscomatic Logo" 
                  className="h-10 sm:h-12 w-auto object-contain opacity-80"
                />
              </a>

              <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-transparent mx-auto mt-8 rounded-full" />
              
              <div className="flex flex-wrap justify-center gap-8 mt-10">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Reach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">US Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Community Driven</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Interactive Service Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-white rounded-3xl p-6 border border-slate-50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border transition-transform group-hover:scale-110 group-hover:-rotate-3 ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-black text-slate-900 text-sm mb-3 leading-tight">{item.label}</h4>
                  
                  <div className="mt-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{item.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <a 
              href="https://syscomatic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-bold text-sm group"
            >
              Visit syscomatic.com
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSyscomatic;
