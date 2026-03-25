import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Bell, Clock, Users, ArrowUpRight, ArrowDownLeft, Handshake, CheckCircle2 } from "lucide-react";

const loans = [
  {
    name: "Sarah Ahmed",
    avatar: "SA",
    amount: "$250",
    type: "Given",
    due: "Mar 25",
    daysLeft: 3,
    status: "overdue",
    avatarColor: "#f43f5e",
  },
  {
    name: "James Wilson",
    avatar: "JW",
    amount: "$180",
    type: "Taken",
    due: "Apr 10",
    daysLeft: 19,
    status: "upcoming",
    avatarColor: "#10b981",
  },
  {
    name: "Nadia Khan",
    avatar: "NK",
    amount: "$500",
    type: "Given",
    due: "Apr 01",
    daysLeft: 10,
    status: "upcoming",
    avatarColor: "#a855f7",
  },
];

const features = [
  { icon: Users, text: "Track loans given to others and loans taken from others" },
  { icon: Mail, text: "Borrowers receive automatic email notifications when a loan is recorded" },
  { icon: Bell, text: "Smart reminders sent before due dates to ensure timely repayment" },
  { icon: Clock, text: "Complete loan history with amounts, dates, and contact details" },
];

const LoanTracking = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf8ff] to-white pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#5509D9]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT — Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7134F1]/20 bg-white px-3.5 py-1.5 text-sm font-semibold text-[#5509D9] shadow-sm mb-5">
              <Handshake className="w-3.5 h-3.5 text-[#7134F1]" />
              Loan Tracking
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight text-gray-900">
              Never Forget Who Owes You{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #7134F1)" }}
              >
                (Or Who You Owe)
              </span>
            </h2>

            <p className="text-gray-500 mt-5 text-lg leading-relaxed">
              Keep track of every loan, given or taken. Record names, contacts, amounts, and due dates.
              <span className="font-flowllet">Flowllet</span> handles the reminders so you don't have to.
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-4">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f5f0ff] flex items-center justify-center shrink-0 mt-0.5 border border-[#7134F1]/10 group-hover:bg-[#5509D9] group-hover:border-transparent transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#5509D9] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-gray-600 leading-relaxed pt-2 group-hover:text-gray-900 transition-colors">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 flex gap-8"
            >
              {[
                { label: "Avg. repaid", value: "94%", sub: "on time" },
                { label: "Auto reminders", value: "3×", sub: "before due" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <div
                    className="font-heading font-black text-3xl bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #7134F1)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                    {s.label} <span className="text-gray-300">·</span> {s.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Visual Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Outer glow */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-20 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #5509D9, #7134F1)" }}
            />

            {/* Dark card */}
            <div className="relative rounded-3xl bg-[#0d0a1a] border border-white/5 shadow-2xl p-6 md:p-8 overflow-hidden">
              {/* Subtle animated glow orb */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, #7134F1, #5509D9)" }}
              />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">Active Loans</p>
                  <p className="text-white font-heading font-bold text-lg mt-0.5">My Loan Book</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full">
                    <ArrowDownLeft className="w-3 h-3" />
                    Taken
                  </div>
                  <div className="flex items-center gap-1.5 bg-rose-500/15 border border-rose-500/20 text-rose-400 text-xs font-bold px-2.5 py-1 rounded-full">
                    <ArrowUpRight className="w-3 h-3" />
                    Given
                  </div>
                </div>
              </div>

              {/* Loan rows */}
              <div className="relative z-10 space-y-3 mb-5">
                {loans.map((loan, i) => (
                  <motion.div
                    key={loan.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.45 }}
                    className="group/row flex items-center gap-4 rounded-2xl bg-white/5 hover:bg-white/8 border border-white/5 hover:border-white/10 transition-all duration-200 px-4 py-3.5"
                  >
                    {/* Avatar */}
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-black shrink-0"
                      style={{ background: `${loan.avatarColor}30`, border: `1.5px solid ${loan.avatarColor}50` }}
                    >
                      <span style={{ color: loan.avatarColor }}>{loan.avatar}</span>
                    </div>

                    {/* Name + due */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{loan.name}</p>
                      <p className="text-white/40 text-xs mt-0.5">
                        Due: {loan.due}
                        {loan.status === "overdue" && (
                          <span className="ml-1.5 text-rose-400 font-bold">· {loan.daysLeft}d left</span>
                        )}
                      </p>
                    </div>

                    {/* Amount + type badge */}
                    <div className="text-right shrink-0">
                      <p className="text-white font-heading font-bold text-sm">{loan.amount}</p>
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-black uppercase mt-0.5 px-2 py-0.5 rounded-full ${
                          loan.type === "Given"
                            ? "bg-rose-500/15 text-rose-400"
                            : "bg-emerald-500/15 text-emerald-400"
                        }`}
                      >
                        {loan.type === "Given" ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownLeft className="w-2.5 h-2.5" />}
                        {loan.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Reminder pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="relative z-10 flex items-center gap-3 rounded-2xl bg-[#5509D9]/15 border border-[#7134F1]/20 px-4 py-3"
              >
                <div className="w-7 h-7 rounded-full bg-[#7134F1]/20 flex items-center justify-center shrink-0">
                  <Bell className="w-3.5 h-3.5 text-[#a78bfa]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/90 text-xs font-semibold leading-snug">
                    Reminder sent to <span className="text-[#a78bfa]">Sarah Ahmed</span>
                  </p>
                  <p className="text-white/40 text-[10px] mt-0.5">3 days remaining · via email</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#7134F1] shrink-0" />
              </motion.div>

              {/* Bottom gradient bar */}
              <div
                className="relative z-10 mt-5 h-0.5 w-full rounded-full opacity-40"
                style={{ background: "linear-gradient(90deg, #5509D9, #7134F1, #a78bfa)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoanTracking;
