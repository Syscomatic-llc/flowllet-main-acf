import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Wallet, CreditCard, Building2, Smartphone, PiggyBank,
  ArrowRight, ArrowLeftRight, TrendingUp, Zap,
} from "lucide-react";

const wallets = [
  {
    icon: Wallet,
    label: "Cash",
    balance: "$840",
    color: "#10b981",
    bg: "#f0fdf4",
    border: "#10b98130",
    change: "+$120",
    up: true,
  },
  {
    icon: Building2,
    label: "Bank",
    balance: "$5,200",
    color: "#5509D9",
    bg: "#f5f0ff",
    border: "#5509D930",
    change: "+$3,200",
    up: true,
  },
  {
    icon: CreditCard,
    label: "Cards",
    balance: "-$380",
    color: "#f43f5e",
    bg: "#fff1f2",
    border: "#f43f5e30",
    change: "-$380",
    up: false,
  },
  {
    icon: PiggyBank,
    label: "Savings",
    balance: "$2,400",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    border: "#0ea5e930",
    change: "+$200",
    up: true,
  },
  {
    icon: Smartphone,
    label: "Mobile",
    balance: "$235",
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#f59e0b30",
    change: "-$45",
    up: false,
  },
];

const MultiWallet = () => {
  const { ref, isVisible } = useScrollAnimation();
  const isInView = useInView(ref, { amount: 0.1 });
  const [isLocked, setIsLocked] = useState(true);

  // Auto-lock when scrolling away
  useEffect(() => {
    if (!isInView) {
      setIsLocked(true);
    }
  }, [isInView]);

  return (
    <section
      id="wallet"
      ref={ref}
      className="py-16 lg:py-32 relative overflow-hidden group/section z-0"
      onMouseLeave={() => setIsLocked(true)}
    >
      {/* Background (always visible behind all) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5ff] via-white to-[#f8f5ff] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7134F1]/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5509D9]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Coming Soon Layer */}
      <AnimatePresence>
        {isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-x-0 inset-y-0 z-30 flex items-start justify-center pt-48 lg:pt-64 pointer-events-none"
          >
            {/* Interactive Wrapper */}
            <div
              className="relative z-40 pointer-events-auto cursor-pointer flex flex-col items-center gap-4 select-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsLocked(false);
              }}
            >
              {/* Ultra-glow background */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#7134F1] blur-[140px] -z-10"
              />

              {/* Main Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  rotate: -2,
                  y: [0, -18, 0]
                }}
                transition={{
                  scale: { duration: 0.6 },
                  opacity: { duration: 0.6 },
                  y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  y: -10, 
                  transition: { duration: 0.3, repeat: 0, ease: "easeOut" } 
                }}
                className="relative bg-gradient-to-br from-[#5509D9] via-[#7134F1] to-[#380791] shadow-[0_30px_90px_rgba(85,9,217,0.6)] px-10 sm:px-20 py-4 sm:py-6 rounded-2xl sm:rounded-3xl border border-white/40 overflow-hidden group/ribbon mx-4 sm:mx-0"
              >
                {/* Shiny effect - Fixed version (narrower band) */}
                <motion.div
                  animate={{ left: ['-150%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg]"
                />

                <span className="relative z-10 flex items-center gap-4 sm:gap-6 text-white/90">
                  <span className="flex h-4 w-[2px] bg-white/30 rounded-full" />
                  <span className="font-heading font-black text-2xl sm:text-4xl tracking-[0.12em] sm:tracking-[0.18em] uppercase drop-shadow-2xl whitespace-nowrap">
                    Coming Soon
                  </span>
                  <span className="flex h-4 w-[2px] bg-white/30 rounded-full" />
                </span>

                {/* Symmetric pulsing ember dots */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 left-6 flex items-center justify-center opacity-70"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 right-6 flex items-center justify-center opacity-70"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                </motion.div>
              </motion.div>

              {/* Interaction Indicator */}
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="group/indicator flex flex-col items-center gap-3"
              >
                <div className="whitespace-nowrap text-[10px] sm:text-xs font-black text-[#5509D9] uppercase tracking-[0.3em] px-8 py-3 rounded-full bg-white backdrop-blur-md border border-[#5509D9]/30 shadow-[0_10px_30px_rgba(85,9,217,0.15)] group-hover/indicator:scale-105 transition-transform duration-300">
                  <span className="hidden sm:inline">Click to Unlock Preview</span>
                  <span className="sm:hidden">Tap to Unlock Preview</span>
                </div>
                <div className="w-px h-[30px] bg-gradient-to-b from-[#5509D9] to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">

        {/* ── VISIBLE HEADER PART (Badge) ── */}
        <div className="flex justify-center mb-10 pt-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative group cursor-default"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5509D9] to-[#7134F1] blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-bold text-[#5509D9] shadow-sm">
              <Wallet className="w-4 h-4 text-[#7134F1]" />
              Multi-Wallet
            </span>
          </motion.div>
        </div>

        {/* ── BLURRED/LOCKED CONTENT START ── */}
        <div className={`transition-all duration-700 ${isLocked ? 'blur-[12px] grayscale-[0.5] opacity-80 pointer-events-none' : 'blur-0 grayscale-0 opacity-100'}`}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto mb-14"
          >
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight lg:whitespace-nowrap">
              All Your Wallets,{" "}<span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #7134F1)" }}
              >Plus Your Own
              </span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg leading-relaxed">
              <span className="font-flowllet">Flowllet</span> tracks it all, cash, cards, banks, and savings. Plus, create your own
              <span className="text-[#5509D9] font-bold"> custom wallets</span> for crypto, specialized assets, or anything else you track.
            </p>
          </motion.div>

          {/* ── Wallet Cards Grid ── */}
          <div className="max-w-4xl mx-auto">
            {/* Top row: 3 wallets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {wallets.slice(0, 3).map((w, i) => {
                const Icon = w.icon;
                return (
                  <motion.div
                    key={w.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    whileHover={!isLocked ? { y: -4, scale: 1.02 } : {}}
                    className="bg-white rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                    style={{ borderColor: w.border }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: w.color }} />
                    <div
                      className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{ background: w.color }}
                    />
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: w.bg }}>
                        <Icon className="w-5 h-5" style={{ color: w.color }} />
                      </div>
                      <span
                        className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                        style={{ color: w.up ? "#10b981" : "#f43f5e", background: w.up ? "#f0fdf4" : "#fff1f2" }}
                      >
                        {w.change}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{w.label}</p>
                    <p className="font-heading font-black text-2xl text-gray-900 mt-0.5">{w.balance}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Center: Transfer hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative flex items-center justify-center gap-4 my-6"
            >
              <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
              <div className="relative shrink-0">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-2xl blur-xl pointer-events-none"
                  style={{ background: "linear-gradient(135deg, #5509D9, #7134F1)" }}
                />
                <div className="relative rounded-2xl px-6 py-4 flex items-center gap-3 border border-[#7134F1]/20 bg-white shadow-lg">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center gradient-primary">
                    <ArrowLeftRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider leading-none">Transfer Hub</p>
                    <p className="font-heading font-bold text-gray-900 text-sm mt-0.5">5 Connected</p>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full ml-1 bg-emerald-500"
                  />
                </div>
              </div>
              <div className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
            </motion.div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {wallets.slice(3, 5).map((w, i) => {
                const Icon = w.icon;
                return (
                  <motion.div
                    key={w.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    whileHover={!isLocked ? { y: -4, scale: 1.02 } : {}}
                    className="bg-white rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                    style={{ borderColor: w.border }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: w.color }} />
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: w.bg }}>
                        <Icon className="w-5 h-5" style={{ color: w.color }} />
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ color: w.up ? "#10b981" : "#f43f5e", background: w.up ? "#f0fdf4" : "#fff1f2" }}>
                        {w.change}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{w.label}</p>
                    <p className="font-heading font-black text-2xl text-gray-900 mt-0.5">{w.balance}</p>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between border border-dashed border-[#5509D9]/30 bg-white/50 hover:bg-white transition-colors duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5509D9]/5 to-transparent pointer-events-none" />
                <div className="flex items-start justify-between mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#f5f0ff] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="relative">
                      <Wallet className="w-5 h-5 text-[#5509D9]" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#10b981] rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">+</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-[#5509D9] bg-[#f5f0ff] px-2 py-0.5 rounded-full">Customizable</div>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">New Wallet</p>
                  <p className="font-heading font-bold text-base text-gray-900 mt-1">Create Custom Wallet</p>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">Add your unique assets, crypto, or specialized accounts.</p>
                </div>
                <div className="mt-4 w-full py-2 bg-[#5509D9] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                  <span>Add Custom</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            </div>

            {/* Footer stat strip */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="rounded-2xl p-5 relative overflow-hidden lg:col-span-1 gradient-primary"
              >
                <div className="relative z-10 flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white">+$3,495</span>
                </div>
                <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">Net Worth</p>
                <p className="font-heading font-black text-2xl text-white mt-0.5">$8,295</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="lg:col-span-3 grid grid-cols-3 gap-4"
              >
                {[
                  { label: "Transfers", value: "12" },
                  { label: "Tracked", value: "5 Wallets" },
                  { label: "Synced", value: "Always" },
                ].map((s) => (
                  <div key={s.label} className="text-center rounded-2xl p-5 relative overflow-hidden gradient-primary">
                    <p className="font-heading font-black text-xl sm:text-2xl text-white relative z-10">{s.value}</p>
                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mt-0.5 relative z-10">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div> {/* ── BLURRED CONTENT END ── */}
      </div>
    </section>
  );
};

export default MultiWallet;
