import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Zap, Globe, TrendingUp, CreditCard, Wallet, Banknote, Target, Languages } from "lucide-react";

/* ─── tiny helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const stat = (value: string, label: string) => ({ value, label });
const STATS = [
  stat("Multi", "Devices"),
  stat("<15MB", "App Size"),
  stat("4", "Languages"),
  stat("3.5★", "User Rating"),
];

/* ─── floating card data ─── */
const CARDS = [
  {
    icon: TrendingUp,
    label: "Monthly Savings",
    value: "+$842",
    color: "from-[#5509D9] to-[#7134F1]",
    pos: "top-[18%] -left-10 sm:-top-10 sm:-left-20",
  },
  {
    icon: Banknote,
    label: "Active Loans",
    value: "$1,850",
    color: "from-blue-500 to-indigo-400",
    pos: "-top-8 -right-4 sm:-top-12 sm:-right-16",
  },
  {
    icon: Wallet,
    label: "Wallet Balance",
    value: "$3,580",
    color: "from-orange-400 to-rose-400",
    pos: "top-[48%] -left-14 sm:top-1/4 sm:-left-32",
  },
  {
    icon: CreditCard,
    label: "Total Expenses",
    value: "$1,240",
    color: "from-emerald-500 to-teal-400",
    pos: "top-[78%] -right-12 sm:top-1/2 sm:-right-32",
  },
  {
    icon: Target,
    label: "Savings Goal",
    value: "75%",
    color: "from-purple-500 to-pink-400",
    pos: "hidden sm:block bottom-6 -left-6 sm:bottom-8 sm:-left-24",
  },
];

const Hero = () => {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-20">
      {/* ── Background blobs ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0ff] via-white to-[#eef2ff]" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#7134F1]/12 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#5509D9]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-violet-200/40 blur-[100px] pointer-events-none" />

      {/* ── Grid pattern overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#7134F1 1px, transparent 1px), linear-gradient(to right, #7134F1 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7134F1]/25 bg-white/70 backdrop-blur px-3 py-1 sm:px-4 sm:py-1.5 text-[13px] sm:text-sm font-medium text-[#5509D9] shadow-sm mb-6 sm:mb-7">
                <span className="flex h-2 w-2 rounded-full bg-[#7134F1] animate-pulse" />
                Free Forever · Pro Plans Coming...
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-gray-900"
            >
              Take Control of{" "}
              <span
                className="bg-clip-text text-transparent pr-1"
                style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #7134F1)" }}
              >
                Your Money
              </span>,
              <br className="hidden sm:block" /> Effortlessly.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              {...fadeUp(0.16)}
              className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed"
            >
              <span className="font-flowllet">Flowllet</span> unifies expenses, income, loans, and wallets in one
              beautifully minimal app. Lightweight, secure, and free at its core - with optional pro plans coming soon.
            </motion.p>

            {/* Trust pills */}
            <motion.div {...fadeUp(0.22)} className="flex flex-nowrap gap-2 mt-8 overflow-x-auto hide-scrollbar -mx-1 px-1 pb-1">
              {[
                { icon: Zap, label: "Instant sync" },
                { icon: Globe, label: "Multi-currency" },
                { icon: Languages, label: "Multi-lingual" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white border border-gray-200 px-2.5 py-1.5 text-[11px] sm:text-xs font-medium text-gray-600 shadow-sm whitespace-nowrap"
                >
                  <Icon className="w-3.5 h-3.5 text-[#7134F1] shrink-0" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.28)}
              className="flex flex-row items-center justify-center gap-3 mt-10"
            >
              <Button
                asChild
                className="flex-1 rounded-full px-4 h-12 sm:h-14 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgba(85,9,217,0.35)] border-0"
                style={{ background: "linear-gradient(135deg, #5509D9, #7134F1)" }}
              >
                <a href="https://play.google.com/store/apps/details?id=com.zahed.flowllet" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302-8.635-8.635z" /></svg>
                  Google Play
                </a>
              </Button>

              <div
                className="flex-1 relative group rounded-full px-4 h-12 sm:h-14 text-sm sm:text-base font-semibold border border-gray-200 bg-white text-slate-900 cursor-not-allowed overflow-hidden flex items-center justify-center gap-2 select-none shadow-sm whitespace-nowrap"
              >
                {/* Premium Coming Soon overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5509D9]/90 via-[#7134F1]/90 to-[#5509D9]/90 backdrop-blur-md" />
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                    <span className="text-xs font-black text-white tracking-wide uppercase">Coming Soon</span>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                App Store
                <ArrowRight className="w-4 h-4 opacity-0" />
              </div>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              {...fadeUp(0.36)}
              className="grid grid-cols-4 gap-6 sm:gap-8 mt-12 w-full max-w-md mx-auto"
            >
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <span
                    className="font-heading font-black text-xl sm:text-2xl bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #7134F1)" }}
                  >
                    {value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Phone mockup ── */}
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0 pb-20 lg:pb-0"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-[100px] opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, #7134F1, #5509D9)" }}
              />

              {/* Phone frame */}
              <div
                className="relative w-[240px] sm:w-[280px] h-[500px] sm:h-[580px] rounded-[3rem] p-[4px] shadow-[0_32px_80px_rgba(85,9,217,0.3)] z-10"
                style={{ background: "linear-gradient(145deg, #7134F1, #5509D9, #380791)" }}
              >
                {/* Screen */}
                <div className="w-full h-full rounded-[2.75rem] bg-[#0d0a1a] overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-5 py-3 text-[10px] text-white/40 font-medium pb-2">
                    <span>9:41</span>
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-1.5 bg-white/40 rounded-full" />
                      <span className="w-2.5 h-1.5 bg-white/40 rounded-full" />
                      <span className="w-2.5 h-1.5 bg-white/40 rounded-full" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-5 pb-4">
                    <p className="text-white/50 text-[12px]">Good morning 👋</p>
                    <p className="text-white font-heading font-bold text-lg mt-0.5">Your Finances</p>
                  </div>

                  {/* Balance card */}
                  <div
                    className="mx-4 rounded-2xl p-4 mb-4"
                    style={{ background: "linear-gradient(135deg, #5509D9, #7134F1)" }}
                  >
                    <p className="text-white/70 text-[11px] font-medium">Total Balance</p>
                    <p className="text-white font-heading font-black text-3xl mt-1">$3,580.00</p>
                    <div className="flex justify-between mt-3">
                      <div>
                        <p className="text-white/60 text-[10px]">Income</p>
                        <p className="text-white text-[14px] font-semibold">+$5,200</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-[10px]">Expenses</p>
                        <p className="text-white text-[14px] font-semibold">-$1,620</p>
                      </div>
                    </div>
                  </div>

                  {/* Transaction list */}
                  <div className="px-4 flex-1 overflow-hidden">
                    <p className="text-white/50 text-[11px] font-semibold mb-3 uppercase tracking-wide">Recent</p>
                    {[
                      { name: "Netflix", cat: "Entertainment", amt: "-$15", color: "#f43f5e" },
                      { name: "Salary", cat: "Income", amt: "+$3,200", color: "#10b981" },
                      { name: "Groceries", cat: "Food", amt: "-$84", color: "#f97316" },
                    ].map((t) => (
                      <div key={t.name} className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-7 h-7 rounded-full opacity-20 flex items-center justify-center"
                            style={{ background: t.color }}
                          />
                          <div>
                            <p className="text-white text-[12px] font-medium">{t.name}</p>
                            <p className="text-white/40 text-[10px]">{t.cat}</p>
                          </div>
                        </div>
                        <span
                          className="text-[12px] font-bold"
                          style={{ color: t.amt.startsWith("+") ? "#10b981" : "#f43f5e" }}
                        >
                          {t.amt}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav bar */}
                  <div className="flex justify-around items-center py-3 px-5 border-t border-white/5 bg-[#0d0a1a]">
                    {["▦", "↕", "☷", "◯"].map((icon, i) => (
                      <span key={i} className={`text-sm ${i === 0 ? "text-[#7134F1]" : "text-white/25"}`}>{icon}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating metric cards orbiting the phone */}
              {CARDS.map(({ icon: Icon, label, value, color, pos }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + i * 0.12, ease: "backOut" }}
                  className={`absolute ${pos} z-20`}
                >
                  <div className="animate-float w-full h-full" style={{ animationDelay: `${i * 0.4}s` }}>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-gray-100/30 px-3 py-2.5 flex items-center gap-3 min-w-[130px] sm:min-w-[150px] hover:scale-105 transition-transform cursor-default group">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight leading-none mb-1">{label}</p>
                        <p className="text-sm font-black text-gray-900 leading-none">{value}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
