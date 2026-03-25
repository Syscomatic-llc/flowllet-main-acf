import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Cloud, RefreshCw, Shield, Smartphone, Laptop, CheckCircle2,
  Lock, Zap, Wifi, TabletSmartphone, MegaphoneOff
} from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Automatic Backup",
    desc: "Every change is instantly saved to the cloud, no manual action ever needed.",
    color: "#5509D9",
    bg: "#f5f0ff",
  },
  {
    icon: RefreshCw,
    title: "Cross-Device Sync",
    desc: "Switch phones, reinstall the app, or use multiple devices, your data is always current.",
    color: "#0ea5e9",
    bg: "#f0f9ff",
  },
  {
    icon: Shield,
    title: "Encrypted Storage",
    desc: "Your financial data is encrypted before it ever leaves your device. Privacy, guaranteed.",
    color: "#10b981",
    bg: "#f0fdf4",
  },
];

const syncEvents = [
  { label: "Expense added on iOS", time: "just now", icon: CheckCircle2, color: "#10b981" },
  { label: "Synced to cloud", time: "0.3s ago", icon: Cloud, color: "#5509D9" },
  { label: "Android & Browser updated", time: "0.5s ago", icon: Laptop, color: "#0ea5e9" },
];

const CloudSync = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5ff] via-white to-[#f0f9ff] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5509D9]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── LEFT: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7134F1]/20 bg-white px-3.5 py-1.5 text-sm font-semibold text-[#5509D9] shadow-sm mb-5">
              <Cloud className="w-3.5 h-3.5 text-[#7134F1]" />
              Cloud Sync
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              Your Data,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #0ea5e9)" }}
              >
                Always Safe
              </span>
            </h2>

            <p className="text-gray-500 mt-5 text-lg leading-relaxed">
              All your financial data is securely synced to the cloud. Switch devices, reinstall the app, your data follows you seamlessly.
            </p>

            {/* Feature cards */}
            <div className="mt-10 space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: f.bg }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: f.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-0.5">{f.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Privacy note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 flex items-center gap-2.5 text-sm text-gray-500"
            >
              <Lock className="w-4 h-4 text-[#10b981]" />
              <span>Lightning fast sync · Cross-device · Always available</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Sync Visualization ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Outer glow */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-15 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #5509D9, #0ea5e9)" }}
            />

            <div className="relative rounded-3xl bg-[#0d0a1a] border border-white/5 shadow-2xl p-6 md:p-8 overflow-hidden">
              {/* Animated bg orb */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, #5509D9, #0ea5e9)" }}
              />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Sync Status</p>
                  <div className="flex items-center gap-2 mt-1">
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-emerald-400"
                    />
                    <p className="text-white font-bold text-sm">Live · Syncing now</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 rounded-full px-3 py-1.5">
                  <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs text-white/60 font-medium">Connected</span>
                </div>
              </div>

              {/* Devices */}
              <div className="relative z-10 grid grid-cols-3 gap-2.5 mb-5">
                {[
                  { icon: Smartphone, label: "iOS App", os: "iPhone & iPad", synced: true },
                  { icon: TabletSmartphone, label: "Android", os: "Phone & Tablet", synced: true },
                  { icon: Laptop, label: "Web App", os: "Any Browser", synced: true },
                ].map((device, i) => (
                  <motion.div
                    key={device.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                    className="rounded-2xl bg-white/5 border border-white/8 p-4 hover:bg-white/8 transition-colors group/device"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <device.icon className="w-4 h-4 text-white/60 group-hover/device:text-white transition-colors" />
                      <span className="text-white/70 text-xs font-semibold">{device.label}</span>
                      {device.synced && (
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-auto" />
                      )}
                    </div>
                    <p className="text-white/30 text-[10px] font-medium">{device.os}</p>
                    <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: "100%" } : {}}
                        transition={{ duration: 1.5, delay: 0.7 + i * 0.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #5509D9, #0ea5e9)" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sync event log */}
              <div className="relative z-10 space-y-2.5 mb-5">
                {syncEvents.map((ev, i) => (
                  <motion.div
                    key={ev.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 rounded-xl bg-white/4 border border-white/5 px-3.5 py-2.5 hover:bg-white/7 transition-colors"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${ev.color}20` }}
                    >
                      <ev.icon className="w-3.5 h-3.5" style={{ color: ev.color }} />
                    </div>
                    <span className="text-white/70 text-xs font-medium flex-1">{ev.label}</span>
                    <span className="text-white/30 text-[10px] font-medium">{ev.time}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats row */}
              <div className="relative z-10 grid grid-cols-3 gap-2">
                {[
                  { icon: Zap, label: "Sync Speed", value: "<1s" },
                  { icon: Smartphone, label: "Devices", value: "Unlimited" },
                  { icon: Cloud, label: "Uptime", value: "99.9%" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/4 border border-white/5 p-3 text-center">
                    <s.icon className="w-3.5 h-3.5 text-white/30 mx-auto mb-1" />
                    <p
                      className="font-heading font-black text-sm"
                      style={{ color: "#a78bfa" }}
                    >
                      {s.value}
                    </p>
                    <p className="text-white/30 text-[9px] font-bold uppercase tracking-wider mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Bottom gradient line */}
              <div
                className="relative z-10 mt-5 h-0.5 w-full rounded-full opacity-40"
                style={{ background: "linear-gradient(90deg, #5509D9, #0ea5e9)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudSync;
