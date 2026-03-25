import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Smartphone, 
  LayoutDashboard, 
  Receipt, 
  PieChart, 
  HandCoins, 
  ArrowUpRight, 
  Search, 
  Menu, 
  Bell, 
  Wallet, 
  Plus,
  TrendingDown,
  TrendingUp,
  CreditCard,
  Briefcase,
  Landmark,
  Zap
} from "lucide-react";

interface Screen {
  id: string;
  title: string;
  icon: any;
  color: string;
  description: string;
}

const screens: Screen[] = [
  { 
    id: "dashboard", 
    title: "Dashboard", 
    icon: LayoutDashboard, 
    color: "#5509D9",
    description: "Get a clear bird's-eye view of your entire financial landscape at a single glance."
  },
  { 
    id: "expenses", 
    title: "Expenses", 
    icon: Receipt, 
    color: "#f59e0b",
    description: "Lightning-fast expense tracking with smart categories and automated currency conversion."
  },
  { 
    id: "reports", 
    title: "Reports", 
    icon: PieChart, 
    color: "#10b981",
    description: "Beautifully visualized reports that reveal your true spending habits and saving potential."
  },
  { 
    id: "loans", 
    title: "Loan Tracker", 
    icon: HandCoins, 
    color: "#7134F1",
    description: "Keep track of money you owe or are owed with automated reminders and historical logs."
  },
];

const PhoneMockup = ({ activeScreen }: { activeScreen: string }) => {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] sm:w-[300px] sm:h-[620px]">
      {/* External Frame */}
      <div className="absolute inset-0 bg-[#0d0a1a] rounded-[3rem] border-8 border-slate-900 shadow-[0_0_0_2px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.5)] z-20 flex flex-col overflow-hidden">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-around px-2">
           <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
           <div className="w-8 h-1 bg-slate-800 rounded-full" />
        </div>

        {/* Screen Content */}
        <div className="flex-1 bg-white relative overflow-hidden pt-10 pb-6 px-4">
          <AnimatePresence mode="wait">
            {activeScreen === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Menu className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-bold text-xs">Hi, Alex</span>
                   </div>
                   <Bell className="w-4 h-4 text-slate-400" />
                </div>

                {/* Balance Card */}
                <div className="bg-slate-900 rounded-2xl p-4 text-white mb-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 blur-xl" />
                   <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mb-1">Total Balance</p>
                   <h4 className="text-2xl font-black mb-4">$12,450.00</h4>
                   <div className="flex gap-2">
                      <div className="flex-1 bg-white/5 rounded-xl p-2">
                        <p className="text-[8px] text-white/30 font-bold uppercase">Income</p>
                        <p className="text-xs font-bold text-emerald-400">+$2,100</p>
                      </div>
                      <div className="flex-1 bg-white/5 rounded-xl p-2">
                        <p className="text-[8px] text-white/30 font-bold uppercase">Expenses</p>
                        <p className="text-xs font-bold text-rose-400">-$840</p>
                      </div>
                   </div>
                </div>

                {/* Mini Graph Area */}
                <div className="flex-1 flex flex-col gap-4">
                   <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-900">Wallets</span>
                      <Plus className="w-3 h-3 text-primary" />
                   </div>
                   <div className="space-y-2">
                      {[
                        { name: "Main Bank", val: "$8,200", icon: Landmark, color: "bg-blue-50" },
                        { name: "Cash", val: "$450", icon: Wallet, color: "bg-emerald-50" },
                        { name: "Credit Card", val: "$-1,200", icon: CreditCard, color: "bg-rose-50" }
                      ].map(item => (
                        <div key={item.name} className="flex items-center justify-between p-3 rounded-xl border border-slate-50">
                           <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center text-slate-600`}>
                                 <item.icon className="w-4 h-4" />
                              </div>
                              <span className="text-[10px] font-bold text-slate-700">{item.name}</span>
                           </div>
                           <span className="text-[10px] font-black text-slate-900">{item.val}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            )}

            {activeScreen === "expenses" && (
              <motion.div
                key="expenses"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-sm">Add Expense</h4>
                  <Search className="w-4 h-4 text-slate-400" />
                </div>

                <div className="flex flex-col items-center mb-8">
                   <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">Enter Amount</span>
                   <span className="text-4xl font-black text-primary">$45.00</span>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-8">
                   {[
                     { icon: Receipt, label: "Food" },
                     { icon: Smartphone, label: "Tech" },
                     { icon: Zap, label: "Bills" },
                     { icon: Briefcase, label: "Work" },
                   ].map(cat => (
                     <div key={cat.label} className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors">
                           <cat.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[8px] font-bold text-slate-500 uppercase">{cat.label}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-auto space-y-3">
                   <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                            <ArrowUpRight className="w-4 h-4 text-slate-400" />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold text-slate-900 leading-tight">Starbucks Coffee</p>
                            <p className="text-[8px] text-slate-400 leading-none mt-0.5">Today • 10:45 AM</p>
                         </div>
                      </div>
                      <span className="text-[10px] font-black text-slate-900">-$6.50</span>
                   </div>
                   <button className="w-full h-12 rounded-2xl bg-primary text-white font-bold text-xs shadow-lg shadow-primary/20">
                     Save Transaction
                   </button>
                </div>
              </motion.div>
            )}

            {activeScreen === "reports" && (
              <motion.div
                key="reports"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold text-sm">Insights</h4>
                  <div className="bg-slate-50 px-3 py-1 rounded-full flex items-center gap-1.5">
                     <span className="text-[10px] font-bold text-slate-600">Jan 2024</span>
                     <TrendingDown className="w-3 h-3 text-slate-400" />
                  </div>
                </div>

                <div className="flex items-end gap-2 h-32 mb-8 px-2">
                   {[40, 65, 30, 85, 45, 90, 60].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`flex-1 rounded-t-lg ${i === 3 ? 'bg-primary' : 'bg-primary/20'}`}
                      />
                   ))}
                </div>

                <div className="space-y-4">
                   <div className="p-4 rounded-2xl border border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                         <h5 className="text-[11px] font-bold">Top Category</h5>
                         <span className="text-primary text-[10px] font-bold">+12%</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                            <Receipt className="w-5 h-5 text-amber-500" />
                         </div>
                         <div className="flex-1">
                            <div className="flex justify-between text-[9px] font-bold mb-1">
                               <span className="text-slate-500 uppercase">Food & Drinks</span>
                               <span className="text-slate-900">$1,240</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                               <div className="h-full bg-amber-500 w-[70%]" />
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="bg-emerald-50 rounded-2xl p-4 flex items-center justify-between border border-emerald-100">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                            <TrendingUp className="w-4 h-4" />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold text-emerald-900 leading-tight italic">You saved $450 more than last month!</p>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}

            {activeScreen === "loans" && (
              <motion.div
                key="loans"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold text-sm">Loan Tracker</h4>
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                    <HandCoins className="w-4 h-4 text-primary" />
                  </div>
                </div>

                <div className="flex gap-2 mb-6">
                   <div className="flex-1 bg-white border border-primary/20 rounded-xl p-3 shadow-sm">
                      <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Taken</p>
                      <p className="text-sm font-black text-rose-500">$2,400</p>
                   </div>
                   <div className="flex-1 bg-white border border-slate-100 rounded-xl p-3">
                      <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Given</p>
                      <p className="text-sm font-black text-emerald-500">$1,800</p>
                   </div>
                </div>

                <div className="space-y-4">
                   <div className="flex items-center justify-between mb-2">
                       <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Recent Logs</span>
                       <span className="text-[10px] font-bold text-primary">View All</span>
                   </div>
                   {[
                     { name: "John Doe", type: "Owe You", amount: "$500", date: "Jan 12", color: "text-emerald-500" },
                     { name: "Bank EMI", type: "You Owe", amount: "$1,200", date: "Jan 15", color: "text-rose-500" },
                     { name: "Sarah J.", type: "Owe You", amount: "$300", date: "Jan 20", color: "text-emerald-500" }
                   ].map(loan => (
                     <div key={loan.name + loan.date} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/50 border border-slate-100">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-slate-200 border border-white" />
                           <div>
                              <p className="text-[10px] font-bold text-slate-900 leading-tight">{loan.name}</p>
                              <p className="text-[8px] text-slate-400 font-medium leading-none mt-0.5">{loan.type} • Due {loan.date}</p>
                           </div>
                        </div>
                        <span className={`text-[10px] font-black ${loan.color}`}>{loan.amount}</span>
                     </div>
                   ))}
                </div>

                <button className="mt-auto w-full h-12 rounded-2xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" />
                  New Record
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-200 rounded-full z-30" />
      </div>

      {/* Decorative Reflections */}
      <div className="absolute top-[15%] left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-30 skew-y-12 opacity-50" />
      <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[80px] z-10 animate-pulse" />
    </div>
  );
};

const AppScreenshots = () => {
  const [activeScreen, setActiveScreen] = useState("dashboard");
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#fcfaff] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ── LEFT: Content & Switcher ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7134F1]/20 bg-white px-3.5 py-1.5 text-sm font-semibold text-[#5509D9] shadow-sm mb-6">
              <Smartphone className="w-3.5 h-3.5 text-[#7134F1]" />
              App Interface
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              See <span className="font-flowllet">Flowllet</span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5509D9] to-[#7134F1]">
                in Action
              </span>
            </h2>

            <p className="text-gray-500 mt-5 text-lg leading-relaxed max-w-xl">
              Clean, minimalist, and built for humans. Experience a financial app that feels as good as it looks.
            </p>

            <div className="mt-10 space-y-3">
              {screens.map((screen) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 group flex items-start gap-4 ${
                    activeScreen === screen.id 
                    ? "bg-white border-primary/20 shadow-lg" 
                    : "bg-transparent border-transparent hover:bg-white/50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                    activeScreen === screen.id ? "scale-110 shadow-md" : "group-hover:scale-105"
                  }`}
                  style={{ 
                    backgroundColor: activeScreen === screen.id ? `${screen.color}15` : "#f1f5f9",
                    color: activeScreen === screen.id ? screen.color : "#94a3b8"
                  }}>
                    <screen.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-bold transition-colors ${
                      activeScreen === screen.id ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                    }`}>
                      {screen.title}
                    </h4>
                    {activeScreen === screen.id && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-sm text-gray-500 mt-1"
                      >
                        {screen.description}
                      </motion.p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Phone Mockup Container ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <PhoneMockup activeScreen={activeScreen} />
          </motion.div>

        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
    </section>
  );
};

export default AppScreenshots;
