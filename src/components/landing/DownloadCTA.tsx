import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  CheckCircle2, 
  Zap, 
  ShieldCheck,
  Smartphone,
  Cloud
} from "lucide-react";

const DownloadCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="download" ref={ref} className="py-24 lg:py-40 relative overflow-hidden bg-[#0a0118]">
      {/* ── BACKGROUND: Deep Animated Mesh ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[180px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[150px] animate-float" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── LEFT: High-Impact Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-left lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-bold text-primary-foreground/90 backdrop-blur-md mb-8">
              <Smartphone className="w-4 h-4 text-primary" />
              Final Stop for Your Finances
            </div>

            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] mb-8">
              Ready to <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-accent">
                Own Your Flow?
              </span>
            </h2>

            <p className="text-white/60 text-xl leading-relaxed max-w-xl mb-12">
              Join thousands of users who have found financial clarity with <span className="font-flowllet">Flowllet</span>. No strings, no subs, just your money, managed.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
               {/* Google Play Button */}
               <Button
                asChild
                size="lg"
                className="group relative h-16 rounded-2xl bg-white text-slate-900 border-none px-8 py-0 text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.03] overflow-hidden"
              >
                <a href="https://play.google.com/store/apps/details?id=com.zahed.flowllet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#3DDC84]"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302-8.635-8.635z"/></svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Get it on</span>
                    <span className="font-black">Google Play</span>
                  </div>
                </a>
              </Button>

              {/* App Store Button */}
              <div
                className="group relative h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 text-white px-8 text-lg shadow-xl overflow-hidden flex items-center gap-3 cursor-not-allowed select-none"
              >
                {/* Premium Coming Soon overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5509D9]/95 via-[#7134F1]/95 to-[#5509D9]/95 backdrop-blur-md" />
                  <div className="relative z-10 flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                      </span>
                      <span className="text-sm font-black text-white tracking-widest uppercase">Coming Soon</span>
                    </div>
                    <span className="text-[10px] text-white/50 font-semibold tracking-wider">iOS App in development</span>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Download on</span>
                  <span className="font-black">App Store</span>
                </div>
              </div>
            </div>

            {/* Trust Markers */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { icon: Zap, text: "Under 15MB" },
                { icon: Cloud, text: "Cloud Sync" },
                { icon: Smartphone, text: "Multi Device" }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <item.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-bold text-white/40 uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Peek-A-Boo Mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: 5, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, y: 0, rotate: -12, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative lg:col-span-5 flex justify-center lg:block"
          >
            {/* Elegant Phone Mockup (Peek-a-boo) */}
            <div className="relative w-[240px] sm:w-[280px] h-[480px] sm:h-[580px] bg-slate-900 rounded-[35px] sm:rounded-[45px] border-[5px] sm:border-[6px] border-slate-800 shadow-[15px_30px_60px_rgba(0,0,0,0.5)] overflow-hidden">
               {/* Inner Gloss */}
               <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-20" />
               
               {/* Dynamic Island */}
               <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30" />
               
               {/* Screen Content */}
               <div className="absolute inset-0 bg-slate-50 flex flex-col p-5">
                  <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-primary to-accent p-5 flex flex-col justify-end text-white">
                     <p className="text-[9px] font-bold opacity-80 uppercase tracking-widest mb-1">Total Balance</p>
                     <p className="text-2xl font-black leading-none">$12,450.00</p>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                     {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="w-full h-14 rounded-xl bg-white border border-slate-100 flex items-center px-3 gap-3 animate-pulse-slow">
                           <div className="w-8 h-8 rounded-lg bg-slate-100" />
                           <div className="flex-1 space-y-1.5">
                              <div className="w-20 h-2 bg-slate-100 rounded" />
                              <div className="w-10 h-1 bg-slate-100/50 rounded" />
                           </div>
                           <div className="w-10 h-1.5 bg-slate-100 rounded" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Glowing Backdrop for Phone */}
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-primary/30 to-transparent blur-3xl -z-10" />
            
            {/* Floating Icons around phone */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-12 -left-12 w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-primary shadow-2xl"
            >
               <Download className="w-10 h-10" />
            </motion.div>

            <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-1/2 -right-16 w-32 h-32 rounded-full bg-accent/20 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-accent shadow-2xl"
            >
               <Smartphone className="w-12 h-12" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Footer Fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default DownloadCTA;
