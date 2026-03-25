import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Receipt, TrendingUp, Tag, StickyNote,
  ArrowDownCircle, ArrowUpCircle, ChevronRight, LayoutDashboard,
} from "lucide-react";

/* ─── Feature data ─── */
const features = [
  {
    id: "expense",
    icon: ArrowUpCircle,
    title: "Expense Tracking",
    tagline: "Every rupee, every dollar, accounted for.",
    description:
      "Record and categorize every expense by amount, category, wallet, date, and notes. Search, filter, and audit your spending effortlessly.",
    color: "#f43f5e",
    gradient: "from-rose-500 to-pink-400",
    gradientStyle: "linear-gradient(135deg, #f43f5e, #fb7185)",
    highlights: ["Custom categories", "Multi-wallet", "Date filters", "Receipt notes"],
    preview: {
      label: "Today's Expenses",
      rows: [
        { name: "Coffee", cat: "Food", amt: "-$4.50", color: "#f97316" },
        { name: "Uber", cat: "Transport", amt: "-$12.00", color: "#6366f1" },
        { name: "Amazon", cat: "Shopping", amt: "-$38.99", color: "#3b82f6" },
      ],
    },
  },
  {
    id: "income",
    icon: ArrowDownCircle,
    title: "Income Tracking",
    tagline: "See exactly where your money comes from.",
    description:
      "Track salary, freelance, business, and transfer income from all your sources. Get a full picture of your earning patterns over time.",
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-400",
    gradientStyle: "linear-gradient(135deg, #10b981, #34d399)",
    highlights: ["Multiple sources", "Monthly summaries", "Income vs expenses", "Trend graphs"],
    preview: {
      label: "Income This Month",
      rows: [
        { name: "Salary", cat: "Employment", amt: "+$3,200", color: "#10b981" },
        { name: "Freelance", cat: "Business", amt: "+$800", color: "#0ea5e9" },
        { name: "Interest", cat: "Savings", amt: "+$12", color: "#a855f7" },
      ],
    },
  },
  {
    id: "categories",
    icon: Tag,
    title: "Smart Categories",
    tagline: "Organize spending the way you think.",
    description:
      "Use powerful built-in categories or define your own. Food, transport, health, entertainment, or whatever fits your life.",
    color: "#a855f7",
    gradient: "from-violet-500 to-purple-400",
    gradientStyle: "linear-gradient(135deg, #a855f7, #c084fc)",
    highlights: ["Built-in library", "Custom icons", "Color coding", "Subcategories"],
    preview: {
      label: "Top Categories",
      rows: [
        { name: "🍔 Food & Dining", cat: "38%", amt: "$342", color: "#f97316" },
        { name: "🚗 Transport", cat: "22%", amt: "$198", color: "#6366f1" },
        { name: "🛍️ Shopping", cat: "19%", amt: "$171", color: "#3b82f6" },
      ],
    },
  },
  {
    id: "notes",
    icon: StickyNote,
    title: "Notes & Tasks",
    tagline: "Your financial brain, always organised.",
    description:
      "Create text notes, task checklists, and financial reminders. Pin important items and never miss a payment or deadline again.",
    color: "#f59e0b",
    gradient: "from-amber-500 to-yellow-400",
    gradientStyle: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    highlights: ["Rich text notes", "Checklists", "Pin to top", "Due date alerts"],
    preview: {
      label: "Pinned Reminders",
      rows: [
        { name: "Pay rent", cat: "Due: Mar 30", amt: "📌", color: "#f59e0b" },
        { name: "Budget April", cat: "Task list", amt: "✅", color: "#10b981" },
        { name: "Loan to Ali", cat: "Due: Apr 5", amt: "⚠️", color: "#f43f5e" },
      ],
    },
  },
  {
    id: "loans",
    icon: Receipt,
    title: "Loan Management",
    tagline: "Lend and borrow with total clarity.",
    description:
      "Track loans given and taken with names, contacts, amounts, and due dates. Borrowers get auto email reminders, so you don't have to ask awkwardly.",
    color: "#0ea5e9",
    gradient: "from-sky-500 to-cyan-400",
    gradientStyle: "linear-gradient(135deg, #0ea5e9, #22d3ee)",
    highlights: ["Auto email alerts", "Lend & borrow", "Due date tracking", "Partial payments"],
    preview: {
      label: "Active Loans",
      rows: [
        { name: "Ali Hassan", cat: "Borrowed", amt: "+$200", color: "#10b981" },
        { name: "Sara K.", cat: "Lent", amt: "-$150", color: "#f43f5e" },
        { name: "Office Fund", cat: "Lent", amt: "-$75", color: "#f97316" },
      ],
    },
  },
  {
    id: "reports",
    icon: TrendingUp,
    title: "Financial Reports",
    tagline: "Turn numbers into insights.",
    description:
      "Visualise your income, expenses, loan summaries, and category spending with beautiful charts. Monthly and yearly breakdowns at a glance.",
    color: "#5509D9",
    gradient: "from-[#5509D9] to-[#7134F1]",
    gradientStyle: "linear-gradient(135deg, #5509D9, #7134F1)",
    highlights: ["Bar & pie charts", "Monthly trends", "Export reports", "Category breakdown"],
    preview: {
      label: "Monthly Summary",
      rows: [
        { name: "Total Income", cat: "March", amt: "$4,012", color: "#10b981" },
        { name: "Total Expenses", cat: "March", amt: "$1,620", color: "#f43f5e" },
        { name: "Net Savings", cat: "March", amt: "$2,392", color: "#5509D9" },
      ],
    },
  },
];

const FeatureHighlights = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);

  const feat = features[active];
  const Icon = feat.icon;

  return (
    <section id="features" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5ff] via-white to-[#f0f4ff] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7134F1]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#5509D9]/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          {/* Glowing badge */}
          <div className="flex justify-center mb-5">
            <div className="relative group cursor-default">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5509D9] to-[#7134F1] blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
              <span className="relative inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-bold text-[#5509D9] shadow-sm">
                <LayoutDashboard className="w-4 h-4 text-[#7134F1]" />
                Features
              </span>
            </div>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
            Everything You Need,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #7134F1)" }}
            >
              Nothing You Don't
            </span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">
            Powerful personal finance tools designed for real people, not accountants.
          </p>
        </motion.div>

        {/* ── Tab pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {features.map((f, i) => {
            const FIcon = f.icon;
            const isActive = i === active;
            return (
              <button
                key={f.id}
                onClick={() => setActive(i)}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "text-white border-transparent shadow-lg scale-105"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-800 hover:shadow-sm"
                }`}
                style={isActive ? { background: feat.gradientStyle, boxShadow: `0 4px 20px ${f.color}40` } : {}}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-glow"
                    className="absolute inset-0 rounded-full opacity-20 pointer-events-none"
                    style={{ background: f.gradientStyle }}
                  />
                )}
                <FIcon
                  className="w-3.5 h-3.5 shrink-0 transition-colors relative z-10"
                  style={{ color: isActive ? "white" : f.color }}
                />
                <span className="relative z-10 text-inherit">{f.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Active Feature Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-6 items-stretch"
          >
            {/* LEFT — description + highlights */}
            <div className="rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
              {/* Subtle accent line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl opacity-70"
                style={{ background: feat.gradientStyle }}
              />
              {/* Background glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl pointer-events-none"
                style={{ background: feat.color }}
              />

              <div className="relative z-10">
                {/* Icon with glow */}
                <div className="relative w-14 h-14 mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl blur-md opacity-40"
                    style={{ background: feat.gradientStyle }}
                  />
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: feat.gradientStyle }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: feat.color }}>
                  {feat.title}
                </p>
                <h3 className="font-heading font-black text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
                  {feat.tagline}
                </h3>
                {/* Colored underline accent */}
                <div
                  className="h-0.5 w-10 rounded-full mb-4 opacity-60"
                  style={{ background: feat.gradientStyle }}
                />
                <p className="text-gray-500 leading-relaxed text-base">{feat.description}</p>
              </div>

              {/* Highlights chips */}
              <div className="grid grid-cols-2 gap-3 mt-8 relative z-10">
                {feat.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2.5 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm rounded-xl px-3 py-2.5 transition-all duration-200 group/chip"
                  >
                    <div
                      className="w-2 h-2 rounded-full shrink-0 group-hover/chip:scale-125 transition-transform"
                      style={{ background: feat.gradientStyle }}
                    />
                    <span className="text-sm font-semibold text-gray-700 group-hover/chip:text-gray-900 transition-colors">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — mini app preview (dark card) */}
            <div className="rounded-3xl bg-[#0d0a1a] border border-white/5 shadow-2xl p-6 md:p-8 flex flex-col relative overflow-hidden group">
              {/* Animated glow orb */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: feat.color }}
              />
              <div
                className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-2xl opacity-10 pointer-events-none"
                style={{ background: feat.color }}
              />

              {/* Phone chrome bar */}
              <div className="relative z-10 flex justify-between items-center mb-5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                </div>
                <span className="text-xs text-white/30 font-mono tracking-widest">9:41</span>
              </div>

              {/* Gradient header card */}
              <div
                className="relative z-10 rounded-2xl p-5 mb-5 overflow-hidden"
                style={{ background: feat.gradientStyle }}
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none rounded-2xl" />
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">{feat.preview.label}</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <span className="text-white font-heading font-bold text-lg">{feat.title}</span>
                </div>
              </div>

              {/* Preview rows */}
              <div className="relative z-10 flex flex-col gap-2.5 flex-1">
                {feat.preview.rows.map((row, i) => (
                  <motion.div
                    key={row.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="group/row flex items-center justify-between rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200 px-4 py-3 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 opacity-80 group-hover/row:opacity-100 transition-opacity"
                        style={{ background: `${row.color}25`, border: `1.5px solid ${row.color}40` }}
                      >
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: row.color }}
                        />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight">{row.name}</p>
                        <p className="text-white/40 text-xs mt-0.5">{row.cat}</p>
                      </div>
                    </div>
                    <span
                      className="text-sm font-bold font-mono tabular-nums"
                      style={{ color: row.color }}
                    >
                      {row.amt}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom gradient bar */}
              <div
                className="relative z-10 mt-5 h-0.5 w-full rounded-full opacity-50 group-hover:opacity-80 transition-opacity"
                style={{ background: feat.gradientStyle }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default FeatureHighlights;
