import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  UserCheck, 
  Server, 
  Fingerprint, 
  WifiOff, 
  Database,
  ShieldAlert,
  Verified
} from "lucide-react";

const PrivacyTrust = () => {
  const { ref, isVisible } = useScrollAnimation();

  const privacyPillars = [
    { 
      icon: UserCheck, 
      title: "Minimal Data", 
      desc: "Only name and email required. No phone numbers or ID needed.",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    { 
      icon: Lock, 
      title: "No Third Parties", 
      desc: "Your financial data is never shared, sold, or accessible to others.",
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    { 
      icon: WifiOff, 
      title: "Works Offline", 
      desc: "Data can stay on your device. We don't force cloud connectivity.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    { 
      icon: Verified, 
      title: "Full Transparency", 
      desc: "Clear, jargon-free policies so you always know exactly how your data is used.",
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
  ];

  return (
    <section id="privacy" ref={ref} className="py-16 lg:py-32 bg-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ── LEFT: Privacy Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-[400px]">
              {/* Central Shield Graphic */}
              <div className="relative z-10 p-12 bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden group">
                {/* Animated gradient ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-20 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-3xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 mb-8 animate-pulse">
                    <ShieldCheck className="w-12 h-12" />
                  </div>
                  
                  <div className="text-center space-y-2 mb-8">
                    <h4 className="font-heading font-black text-xl text-slate-900">Privacy Vault</h4>
                    <p className="text-sm text-slate-500 font-medium tracking-tight px-4">Privacy First Architecture</p>
                  </div>
                  
                    {/* Status indicators */}
                    <div className="w-full space-y-3">
                      {[
                        { label: "Data Encryption", status: "Active", icon: Lock },
                        { label: "Personal Privacy", status: "Protected", icon: Fingerprint },
                        { label: "System Reliability", status: "Syscomatic Trusted", icon: Server }
                      ].map((item, idx) => (
                        <div key={item.label} className="flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50/50 border border-slate-100 transition-all hover:bg-white hover:shadow-sm">
                          <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-primary" />
                            <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-none">{item.label}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 ml-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] sm:text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none">{item.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
  
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-[50px] animate-bounce-slow" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px] animate-pulse" />
                
                {/* Floating ID badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-4 sm:-right-8 top-1/4 z-30 bg-white p-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 whitespace-nowrap"
                >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Verified className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-900">Data Privacy</p>
                  <p className="text-[8px] text-slate-400 font-bold uppercase">Guarantee</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-semibold text-primary shadow-sm mb-6">
              <Lock className="w-3.5 h-3.5" />
              Privacy Matters
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              Your Finance, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Private by Design
              </span>
            </h2>

            <p className="text-gray-500 mt-5 text-lg leading-relaxed max-w-xl">
              We started <span className="font-flowllet">Flowllet</span> with a simple promise: Your data is yours. No hidden data harvesting, and complete transparency.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {privacyPillars.map((pillar, i) => (
                <div 
                  key={pillar.title}
                  className="p-6 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${pillar.color} transition-transform group-hover:scale-110`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 mb-2 leading-tight">{pillar.title}</h3>
                  <p className="text-slate-500 text-sm leading-snug">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-slate-900 text-white flex items-center gap-5 shadow-xl shadow-slate-200">
               <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-white" />
               </div>
               <div>
                   <p className="text-sm font-bold opacity-90 leading-tight"><span className="font-flowllet">Flowllet</span> collects ZERO financial data.</p>
                  <p className="text-xs opacity-60 mt-0.5">Your wallets and transactions are for your eyes only.</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyTrust;

