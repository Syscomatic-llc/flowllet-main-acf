import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  TrendingUp, PieChart, BarChart3, ArrowUpRight, ArrowDownRight,
  ChevronRight,
} from "lucide-react";

const bars = [30, 48, 28, 65, 42, 78, 52, 88, 70, 96];

const FinancialReports = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 relative overflow-hidden lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-white via-[#fcfaff] to-[#f4f0ff] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#5509D9]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#7134F1]/4 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* ── LEFT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7134F1]/20 bg-white px-3.5 py-1.5 text-sm font-semibold text-[#5509D9] shadow-sm mb-5">
              <BarChart3 className="w-3.5 h-3.5 text-[#7134F1]" />
              Financial Analytics
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              Actionable Insights{" "}
              <span
                className="bg-clip-text text-transparent block mt-1 pb-2"
                style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #7134F1)" }}
              >
                At Your Fingertips
              </span>
            </h2>

            <p className="text-gray-500 mt-5 text-lg leading-relaxed">
              Stop guessing where your money goes. Visualize your income, expenses, and net savings over time with beautiful, automatically generated charts.
            </p>

            {/* Feature cards */}
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: BarChart3,
                  title: "Income vs Expenses",
                  desc: "Compare cash flow with stacked area and bar charts.",
                  color: "#5509D9",
                },
                {
                  icon: TrendingUp,
                  title: "Spending Trends",
                  desc: "Spot anomalies and optimize your monthly budget.",
                  color: "#7134F1",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#7134F1]/20 transition-all duration-300 group relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}80)` }}
                  />
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 text-base mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.zahed.flowllet"
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#5509D9] hover:gap-3 transition-all text-sm"
            >
              Explore all reports <ChevronRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* ── RIGHT: Dashboard Widgets Grid (no overlap) ── */}
          <div className="relative w-full">

            {/* Background glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.16, 0.08] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{ background: "linear-gradient(135deg, #7134F1, #5509D9)" }}
            />

            <div className="relative z-10 grid grid-cols-2 gap-4">

              {/* Row 1 col 1: Net Savings + Sparkline — wider */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-2 sm:col-span-1 bg-white rounded-2xl p-5 shadow-lg border border-gray-100"
              >
                <div className="flex justify-between items-start mb-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Net Savings</p>
                  <div className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 border border-emerald-100">
                    <ArrowUpRight className="w-2.5 h-2.5" /> +14.5%
                  </div>
                </div>
                <h3 className="font-heading font-black text-2xl text-gray-900 mb-4">
                  $2,450<span className="text-gray-300 text-xl">.00</span>
                </h3>
                <div className="h-12 w-full flex items-end gap-1">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={isVisible ? { height: `${h}%` } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + i * 0.04, ease: "easeOut" }}
                      className="flex-1 rounded-t-sm"
                      style={{
                        background: i === bars.length - 1
                          ? "linear-gradient(to top, #5509D9, #7134F1)"
                          : "linear-gradient(to top, #5509D910, #7134F140)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[9px] text-gray-300 font-medium">Jan</span>
                  <span className="text-[9px] text-gray-300 font-medium">Oct</span>
                </div>
              </motion.div>

              {/* Row 1 col 2: Total Assets */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-2 sm:col-span-1 bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex flex-col justify-between"
              >
                <div className="w-9 h-9 rounded-xl bg-[#f8f5ff] flex items-center justify-center mb-3 border border-[#7134F1]/10">
                  <PieChart className="w-4 h-4 text-[#7134F1]" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1">Total Assets</p>
                  <h3 className="font-heading font-black text-2xl text-gray-900">$12,850</h3>
                </div>
              </motion.div>

              {/* Row 2 col 1: Cash Flow dark card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-2 sm:col-span-1 bg-[#0d0a1a] rounded-2xl p-5 shadow-xl border border-white/5 overflow-hidden relative"
              >
                <motion.div
                  animate={{ opacity: [0.08, 0.18, 0.08] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#7134F1] blur-2xl pointer-events-none"
                />
                <p className="text-[10px] font-black text-white/40 uppercase tracking-wider mb-4 relative z-10">Cash Flow</p>
                <div className="flex flex-col gap-3.5 relative z-10">
                  {[
                    { label: "Income",   value: "$4,200", pct: "85%", color: "#10b981" },
                    { label: "Expenses", value: "$1,750", pct: "45%", color: "#f43f5e" },
                    { label: "Savings",  value: "$2,450", pct: "60%", color: "#7134F1" },
                  ].map((item, i) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-[11px] font-bold mb-1.5">
                        <span className="text-white/70">{item.label}</span>
                        <span style={{ color: item.color }}>{item.value}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: item.pct } : {}}
                          transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                          className="h-full rounded-full"
                          style={{ background: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Row 2 col 2: Top Categories donut */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="col-span-2 sm:col-span-1 bg-white rounded-2xl p-5 shadow-lg border border-gray-100"
              >
                <p className="text-sm font-bold text-gray-900 mb-4">Top Categories</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 shrink-0">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#f0eaff" strokeWidth="4" />
                      <motion.circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#7134F1" strokeWidth="4"
                        initial={{ strokeDasharray: "0,100" }} animate={isVisible ? { strokeDasharray: "40,100" } : {}}
                        transition={{ duration: 1, delay: 0.8 }} />
                      <motion.circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#a855f7" strokeWidth="4" strokeDashoffset="-40"
                        initial={{ strokeDasharray: "0,100" }} animate={isVisible ? { strokeDasharray: "30,100" } : {}}
                        transition={{ duration: 1, delay: 0.9 }} />
                      <motion.circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#5509D9" strokeWidth="4" strokeDashoffset="-70"
                        initial={{ strokeDasharray: "0,100" }} animate={isVisible ? { strokeDasharray: "20,100" } : {}}
                        transition={{ duration: 1, delay: 1 }} />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[8px] text-gray-400 font-bold uppercase">Total</span>
                      <span className="text-xs font-black text-gray-900">$1.7k</span>
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    {[
                      { label: "Housing",   pct: "40%", color: "#7134F1" },
                      { label: "Food",      pct: "30%", color: "#a855f7" },
                      { label: "Transport", pct: "20%", color: "#5509D9" },
                    ].map((l) => (
                      <div key={l.label} className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: l.color }} />
                          <span className="font-semibold text-gray-600">{l.label}</span>
                        </div>
                        <span className="font-bold text-gray-900">{l.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Row 3: Pending Owed — full width */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="col-span-2 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100">
                  <ArrowDownRight className="w-5 h-5 text-rose-500" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Pending Owed</p>
                  <p className="font-heading font-bold text-gray-900 mt-0.5 text-sm">
                    <span className="text-rose-500">-$320</span>
                    <span className="text-gray-400 font-medium text-xs ml-2">Due to 2 people</span>
                  </p>
                </div>
                <div className="text-[10px] font-bold text-rose-400 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                  Overdue
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialReports;
