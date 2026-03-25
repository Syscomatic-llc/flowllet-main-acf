import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, Wallet, ArrowRight, CheckCircle2, Star, Download, Shield, Smartphone } from "lucide-react";

/* ── animation helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ── trust pills for the marquee ── */
const BASE_TRUST = [
  "Comprehensive reports", "Multi-currency", "Smart reminders",
  "Offline ready", "Cloud sync", "Premium support",
];
const TRUST = [...BASE_TRUST, ...BASE_TRUST, ...BASE_TRUST, ...BASE_TRUST];

/* ── checklist items ── */
const POWER_LIST = [
  "Expense & income tracking",
  "Smart loan reminders",
  "Multi-wallet management",
  "Financial reports & charts",
  "Multi-currency support",
  "Works offline",
];

const ValueProposition = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" ref={ref} className="py-20 relative overflow-hidden lg:py-24 lg:flex lg:flex-col lg:justify-center">
      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f5ff] to-white pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">

        {/* ── Section label (Revamped Badge) ── */}
        <motion.div
          {...fadeUp(0)}
          animate={isVisible ? fadeUp(0).animate : fadeUp(0).initial}
          className="flex justify-center mb-10 lg:mb-12"
        >
          <div className="relative group cursor-default">
            {/* animated glow behind badge */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5509D9] to-[#7134F1] blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-glow" />
              <span className="relative inline-flex items-center gap-2.5 rounded-full border border-white/50 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-bold text-[#5509D9] shadow-sm transform transition-transform group-hover:scale-105">
                <Zap className="w-4 h-4 text-[#7134F1]" />
                Why <span className="font-flowllet">Flowllet</span>?
              </span>
          </div>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">

          {/* ── CARD 1 — Featured "Completely Free" (spans 2 cols on lg) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="lg:col-span-2 relative rounded-3xl bg-gray-900 border border-transparent shadow-xl p-6 md:p-8 flex flex-col justify-between min-h-[260px] group overflow-hidden"
          >
            {/* Animated gradient mesh background for darkness / premium feel */}
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle at 100% 100%, #5509D9 0%, transparent 50%), radial-gradient(circle at 0% 0%, #7134F1 0%, transparent 40%)" }} />
            <div className="absolute inset-0 bg-[#0d0a1a]/40 pointer-events-none backdrop-blur-[2px]" />

            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mb-5 w-12 h-12"
              >
                <img src="/whitelogo.png" alt="Flowllet Logo" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="font-heading font-black text-3xl sm:text-4xl text-white mb-3 leading-tight tracking-tight">
                Complete Control.<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a370f5] to-[#c7a4ff]">Zero Confusion.</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mb-2">
                Take charge of your finances with powerful expense tracking, smart loan reminders, and comprehensive reports. All in one beautiful dashboard.
              </p>
            </div>

            <a 
              href="https://play.google.com/store/apps/details?id=com.zahed.flowllet"
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 flex items-center gap-2 mt-6 text-[#d1b3ff] text-sm font-bold group-hover:gap-3 group-hover:text-white transition-all cursor-pointer w-fit"
            >
              <span>See all features</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* ── CARD 2 — Beautifully Simple ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative rounded-3xl bg-white border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between min-h-[260px] hover:shadow-lg transition-all duration-300 group overflow-hidden"
          >
            {/* blurred accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#7134F1]/10 blur-2xl pointer-events-none transition-transform group-hover:scale-150 duration-700" />

            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#f8f5ff] border border-[#7134F1]/10 text-[#5509D9] group-hover:bg-[#5509D9] group-hover:text-white transition-colors duration-300">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-gray-900 mb-2">Beautifully Simple</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                No learning curve. Open the app and start tracking in seconds.
              </p>
            </div>

            {/* mini UI preview (Glassmorphic) */}
            <div className="mt-6 relative rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 p-3 flex flex-col gap-2 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
              {/* decorative glass glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-[#7134F1]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
              
              {["Add Expense", "Set Budget", "View Report"].map((item, i) => (
                <div key={item} className="relative z-10 flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm border border-gray-50">
                  <div
                    className="w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0 shadow-sm"
                    style={{ background: "linear-gradient(135deg, #5509D9, #7134F1)" }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-700 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── CARD 3 — Surprisingly Powerful (checklist) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="relative rounded-3xl bg-white border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between min-h-[260px] hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#7134F1]/5 blur-3xl pointer-events-none group-hover:bg-[#7134F1]/15 transition-colors duration-500" />

            <div>
               <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#f8f5ff] border border-[#7134F1]/10 text-[#5509D9] group-hover:bg-[#5509D9] group-hover:text-white transition-colors duration-300">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-gray-900 mb-4">Surprisingly Powerful</h3>
              <ul className="flex flex-col gap-2.5">
                {POWER_LIST.map((item, i) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + (i * 0.05) }}
                    className="flex items-center gap-2.5 group/item"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#f0e6ff] flex items-center justify-center shrink-0 group-hover/item:bg-[#5509D9] transition-colors">
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#5509D9] group-hover/item:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-gray-600 font-semibold group-hover/item:text-gray-900 transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-6 inline-flex items-center gap-1.5 text-[#5509D9] text-[13px] font-bold bg-[#f8f5ff] px-3 py-2 rounded-xl w-fit border border-[#7134F1]/10 group-hover:shadow-sm transition-all">
              <Shield className="w-3.5 h-3.5" />
               Under <span className="text-gray-900 bg-white px-1.5 py-0.5 rounded-md border border-gray-200 shadow-sm mx-0.5">15 MB</span> total
            </div>
          </motion.div>

          {/* ── CARD 4 — Stats trio ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="lg:col-span-2 relative rounded-3xl bg-gray-900 border border-transparent shadow-xl p-6 sm:p-8 flex flex-col justify-center min-h-[260px] group overflow-hidden"
          >
            {/* Dark gradient mesh background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle at 0% 100%, #5509D9 0%, transparent 50%), radial-gradient(circle at 100% 0%, #7134F1 0%, transparent 40%)" }} />
            <div className="absolute inset-0 bg-[#0d0a1a]/40 pointer-events-none backdrop-blur-[2px]" />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <span className="h-px w-6 bg-white/10" />
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">By the numbers</p>
              <span className="h-px w-6 bg-white/10" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 relative z-10">
              {[
                { num: "Multi", sub: "Platform", desc: "Available on both iOS and Android.", icon: Smartphone },
                { num: "3.5", sub: "User rating", desc: "Loved by thousands globally.", icon: Star, suffix: "★" },
                { num: "<15", sub: "Megabytes", desc: "Installs in seconds anywhere.", icon: Download, suffix: "MB" },
              ].map(({ num, sub, desc, suffix, icon: StatIcon }, i) => (
                <motion.div 
                   key={sub} 
                   whileHover={{ y: -3 }}
                   className="flex flex-col relative group/stat"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                     <StatIcon className="w-4 h-4 text-white/80" />
                  </div>
                  
                  <div className="flex items-baseline gap-0.5 relative z-10">
                    <span
                      className="font-heading font-black text-4xl lg:text-5xl bg-clip-text text-transparent transform origin-left transition-transform group-hover/stat:scale-105"
                      style={{ backgroundImage: "linear-gradient(135deg, #a370f5, #c7a4ff)" }}
                    >
                      {num}
                    </span>
                    {suffix && (
                       <span className="font-heading font-bold text-xl text-[#c7a4ff]">{suffix}</span>
                    )}
                  </div>
                  
                  <span className="text-base font-extrabold text-white mt-2">{sub}</span>
                  <span className="text-xs text-gray-300 mt-1 leading-relaxed font-medium">{desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Trust marquee strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 lg:mt-16 flex overflow-hidden gap-0 relative rounded-full border border-gray-100/50 bg-white/50 backdrop-blur-sm shadow-sm py-1"
        >
          {/* fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex w-max shrink-0 py-1.5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
                {TRUST.map((item, i) => {
                  const gradients = [
                    { from: "#7134F1", to: "#5509D9" },
                    { from: "#5509D9", to: "#10b981" },
                    { from: "#10b981", to: "#0ea5e9" },
                    { from: "#0ea5e9", to: "#7134F1" },
                  ];
                  const grad = gradients[i % gradients.length];
                  return (
                    <span
                      key={`${setIndex}-${i}`}
                      className="shrink-0 inline-flex items-center gap-2 sm:gap-2.5 rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-[13px] font-bold whitespace-nowrap bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:border-[#7134F1]/30 hover:shadow-md transition-all cursor-default group"
                    >
                      <span
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 shadow-sm group-hover:scale-125 transition-transform"
                        style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})` }}
                      />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                        {item}
                      </span>
                    </span>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ValueProposition;

