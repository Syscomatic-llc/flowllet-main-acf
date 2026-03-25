import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Wallet, CreditCard, Building2, Smartphone, PiggyBank,
  ArrowRight, ArrowLeftRight, TrendingUp,
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

  return (
    <section id="wallet" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5ff] via-white to-[#f8f5ff] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7134F1]/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5509D9]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex justify-center mb-5">
            <div className="relative group cursor-default">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5509D9] to-[#7134F1] blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              <span className="relative inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-bold text-[#5509D9] shadow-sm">
                <Wallet className="w-4 h-4 text-[#7134F1]" />
                Multi-Wallet
              </span>
            </div>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
            All Your Wallets,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #7134F1)" }}
            >
              Plus Your Own
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
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                  style={{ borderColor: w.border }}
                >
                  {/* Tinted top bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: w.color }} />
                  {/* Glow on hover */}
                  <div
                    className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ background: w.color }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: w.bg }}
                    >
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

          {/* Center: Transfer hub with arrows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex items-center justify-center gap-4 my-6"
          >
            {/* Left connector line */}
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />

            {/* Hub card */}
            <div className="relative shrink-0">
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl blur-xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, #5509D9, #7134F1)" }}
              />
              <div className="relative rounded-2xl px-6 py-4 flex items-center gap-3 border border-[#7134F1]/20 bg-white shadow-lg">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #5509D9, #7134F1)" }}
                >
                  <ArrowLeftRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider leading-none">Transfer Hub</p>
                  <p className="font-heading font-bold text-gray-900 text-sm mt-0.5">5 Connected</p>
                </div>
                {/* Animated dot */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full ml-1"
                  style={{ background: "#10b981" }}
                />
              </div>
            </div>

            {/* Right connector line */}
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
          </motion.div>

          {/* Bottom row: 2 wallets + Total Net Worth */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {wallets.slice(3, 5).map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={w.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
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

            {/* Total Net Worth summary card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
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
                <div className="text-[10px] font-bold text-[#5509D9] bg-[#f5f0ff] px-2 py-0.5 rounded-full">
                  Customizable
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">New Wallet</p>
                <p className="font-heading font-bold text-base text-gray-900 mt-1">Create Custom Wallet</p>
                <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                  Add your unique assets, crypto, or specialized accounts with custom icons.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full py-2 bg-[#5509D9] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <span>Add Custom</span>
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            </motion.div>
          </div>

          {/* Net Worth and Footer stat strip */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Total Net Worth summary card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-2xl p-5 relative overflow-hidden lg:col-span-1"
              style={{ background: "linear-gradient(135deg, #5509D9, #7134F1)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl" />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white blur-2xl pointer-events-none"
              />
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white">
                  +$3,495
                </span>
              </div>
              <p className="text-[10px] font-black text-white/60 uppercase tracking-widest relative z-10">Net Worth</p>
              <p className="font-heading font-black text-2xl text-white mt-0.5 relative z-10">$8,295</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="lg:col-span-3 grid grid-cols-3 gap-4"
            >
            {[
              { label: "Transfers This Month", value: "12" },
              { label: "Total Tracked", value: "5 Wallets" },
              { label: "Auto Synced", value: "Always" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center bg-white border border-gray-100 rounded-xl py-3 px-2 shadow-sm"
              >
                <p
                  className="font-heading font-black text-lg bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #7134F1)" }}
                >
                  {s.value}
                </p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default MultiWallet;
