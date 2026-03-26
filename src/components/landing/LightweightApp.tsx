import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Feather, Zap, Gauge, Cpu, Shovel, HardDrive, Battery, Binary } from "lucide-react";

const features = [
  {
    icon: Feather,
    title: "Ultra Low Footprint",
    desc: "Under 15MB download size. Installs in the blink of an eye even on slow networks.",
    color: "#5509D9",
    bg: "#f5f0ff",
  },
  {
    icon: Zap,
    title: "Instant Launch",
    desc: "Zero splash screens or waiting. App opens and becomes interactive immediately.",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    icon: Gauge,
    title: "Minimal Resource Use",
    desc: "Optimized for battery life and low RAM. Smooth performance on any device.",
    color: "#10b981",
    bg: "#f0fdf4",
  },
];

const LightweightApp = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fcfaff] to-white pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ── LEFT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7134F1]/20 bg-white px-3.5 py-1.5 text-sm font-semibold text-[#5509D9] shadow-sm mb-6">
              <Zap className="w-3.5 h-3.5 text-[#7134F1]" />
              Lightweight
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              Small App,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5509D9] to-[#7134F1]">
                Big Impact
              </span>
            </h2>

            <p className="text-gray-500 mt-5 text-lg leading-relaxed">
              <span className="font-flowllet">Flowllet</span> is engineered for speed. We've stripped away the bloat to give you a powerful financial tool that respects your storage and battery.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/10 transition-all duration-300 group"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: feature.bg }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Performance Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full scale-75 animate-pulse" />
            
            <div className="relative bg-[#0d0a1a] rounded-[2.5rem] p-8 border border-white/10 shadow-2xl overflow-hidden aspect-[4/5] sm:aspect-square flex flex-col">
              {/* Internal Glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 blur-[60px]" />

              {/* Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20">
                    <Cpu className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">System Status</p>
                    <p className="text-white font-bold text-sm">Engine Optimized</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-500 text-[10px] font-bold uppercase">Optimal</span>
                </div>
              </div>

              {/* Main Gauge Visual */}
              <div className="flex-1 flex flex-col items-center justify-center relative z-10 mb-8">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                  {/* Progress circle background */}
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      className="fill-none stroke-white/5 stroke-[8]"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      initial={{ pathLength: 0 }}
                      animate={isVisible ? { pathLength: 0.1 } : {}}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="fill-none stroke-[#7134F1] stroke-[8] stroke-round shadow-lg"
                      style={{ filter: "drop-shadow(0 0 8px #7134F1)" }}
                    />
                  </svg>
                  
                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="text-white font-heading font-black text-4xl sm:text-5xl"
                    >
                      14.8<span className="text-2xl opacity-50 font-medium">MB</span>
                    </motion.span>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">App Size</span>
                  </div>
                </div>
                
                {/* Float Indicators */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2"
                >
                   <HardDrive className="w-4 h-4 text-primary" />
                   <span className="text-white/80 text-[10px] font-bold">Smallest in Class</span>
                </motion.div>
              </div>

              {/* Bottom Visual Stats */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 group hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span className="text-emerald-400 text-[10px] font-bold">&lt; 5%</span>
                  </div>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">RAM Usage</p>
                  <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: "5%" } : {}}
                      transition={{ duration: 1.5, delay: 1.2 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 group hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-amber-500 text-[10px] font-bold">0.4s</span>
                  </div>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Launch Time</p>
                  <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: 1.5 }}
                      className="h-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                    />
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute bottom-4 right-8 opacity-5">
                <Binary className="w-32 h-32 text-white" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LightweightApp;
