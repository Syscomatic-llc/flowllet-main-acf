import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, Languages, Coins, Map, Landmark, ArrowUpRight } from "lucide-react";

interface Language {
  flag: string;
  code: string;
  name: string;
  native: string;
}

const languages: Language[] = [
  { flag: "https://flagcdn.com/us.svg", code: "EN", name: "English", native: "English" },
  { flag: "https://flagcdn.com/sa.svg", code: "AR", name: "Arabic", native: "العربية" },
  { flag: "https://flagcdn.com/bd.svg", code: "BN", name: "Bengali", native: "বাংলা" },
  { flag: "https://flagcdn.com/in.svg", code: "HI", name: "Hindi", native: "हिन्दी" },
];

const currencies = [
  { symbol: "$", code: "USD", name: "US Dollar", bg: "bg-blue-500/10", color: "text-blue-500" },
  { symbol: "€", code: "EUR", name: "Euro", bg: "bg-indigo-500/10", color: "text-indigo-500" },
  { symbol: "£", code: "GBP", name: "Pound", bg: "bg-purple-500/10", color: "text-purple-500" },
  { symbol: "¥", code: "JPY", name: "Yen", bg: "bg-rose-500/10", color: "text-rose-500" },
  { symbol: "C$", code: "CAD", name: "Canadian Dollar", bg: "bg-red-500/10", color: "text-red-500" },
  { symbol: "A$", code: "AUD", name: "Australian Dollar", bg: "bg-green-600/10", color: "text-green-600" },
  { symbol: "S$", code: "SGD", name: "Singapore Dollar", bg: "bg-teal-500/10", color: "text-teal-500" },
  { symbol: "د.إ", code: "AED", name: "Dirham", bg: "bg-cyan-500/10", color: "text-cyan-500" },
  { symbol: "₺", code: "TRY", name: "Lira", bg: "bg-amber-500/10", color: "text-amber-500" },
  { symbol: "৳", code: "BDT", name: "Taka", bg: "bg-emerald-500/10", color: "text-emerald-500" },
  { symbol: "₹", code: "INR", name: "Rupee", bg: "bg-orange-500/10", color: "text-orange-500" },
  { symbol: "+", code: "More", name: "150+ More", bg: "bg-slate-900", color: "text-white" },
];

const LanguageCurrency = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#f9faff] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1e293b 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ── LEFT: Content & Languages ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-sm font-semibold text-primary shadow-sm mb-6">
              <Globe className="w-3.5 h-3.5 text-primary" />
              Global Support
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              Built for the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Entire World
              </span>
            </h2>

            <p className="text-gray-500 mt-5 text-lg leading-relaxed max-w-xl">
              <span className="font-flowllet">Flowllet</span> speaks your language and understands your local currency. Managing money has never felt this natural, no matter where you are.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 flex items-center gap-4 hover:shadow-lg hover:border-primary/20 transition-all cursor-default group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 group-hover:bg-primary/5 overflow-hidden group-hover:scale-110 transition-all border border-gray-100/50">
                    <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors">{lang.name}</h4>
                    <p className="text-xs text-gray-400 font-medium">{lang.native}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Join <span className="text-primary font-bold">100,000+</span> global users</p>
            </div>
          </motion.div>

          {/* ── RIGHT: Currencies Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* World Map Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] scale-125 z-0 pointer-events-none">
              <Map className="w-full h-full text-slate-900" />
            </div>

            <div className="relative bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-2xl overflow-hidden z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 text-base">Currency Engine</h3>
                    <p className="text-xs text-gray-400 font-medium leading-none">All Global Currencies Supported</p>
                  </div>
                </div>
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border border-white bg-slate-100" />
                  ))}
                </div>
              </div>

              {/* Currency Dense Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 gap-3">
                {currencies.map((curr, i) => (
                  <motion.div
                    key={curr.code}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-md transition-all cursor-default group"
                  >
                    <div className={`w-10 h-10 rounded-full ${curr.bg} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      <span className={`text-lg font-black ${curr.color}`}>{curr.symbol}</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter text-gray-400">
                      {curr.code === 'More' ? '150+' : curr.code}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Highlight Note */}
              <div className="mt-8 p-4 rounded-2xl bg-slate-900 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-colors" />
                 <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-sm">Automated Live Rates</h4>
                      <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mt-0.5">Updated every 60 seconds</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                 </div>
              </div>

              {/* Bottom line */}
              <div className="mt-8 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-emerald-500" />
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Bank Grade Rates</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-200" />
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">150+ Countries</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LanguageCurrency;
