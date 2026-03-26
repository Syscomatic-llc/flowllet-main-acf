import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

/* ─── Email subscription form ─── */
const FORMSPREE_ID = "mzdkbddn";

const EmailForm = () => {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [touched, setTouched] = React.useState(false);

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div {...fadeUp(0.35)}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-gray-800">You're on the list!</p>
            <p className="text-gray-500 text-sm max-w-xs">
              We'll notify <span className="font-medium text-[#7134F1]">{email}</span> the moment <span className="font-flowllet">Flowllet</span> Web goes live.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4"
            noValidate
          >
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">
              Get Notified at Launch
            </p>
            <div className="relative w-full max-w-md">
              <div className="flex items-center w-full rounded-full border border-gray-200 bg-white shadow-[0_4px_24px_rgba(113,52,241,0.08)] overflow-hidden focus-within:ring-2 focus-within:ring-[#7134F1]/30 focus-within:border-[#7134F1]/50 transition-all">
                <span className="pl-5 text-gray-300 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="notify-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setTouched(false); }}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-4 py-4 text-sm text-gray-800 placeholder-gray-400 outline-none min-w-0"
                  aria-label="Email address"
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="m-1.5 shrink-0 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-[0_6px_20px_rgba(85,9,217,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: "linear-gradient(135deg, #5509D9, #7134F1)" }}
                >
                  {status === "loading" ? "Sending…" : "Notify Me"}
                </button>
              </div>
              {touched && !isValid && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-rose-500 font-medium text-left pl-5"
                >
                  Please enter a valid email address.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-rose-500 font-medium text-left pl-5"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </div>
            <p className="text-xs text-gray-400">No spam, ever. Unsubscribe anytime.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Coming Soon | Flowllet Web</title>
        <meta name="description" content="Flowllet Web is under development. Be the first to know when we launch." />
        <link rel="canonical" href="https://flowllet.com/web" />

        <meta property="og:title" content="Flowllet Web – Coming Soon" />
        <meta property="og:description" content="We're bringing Flowllet to the web. Track expenses, income, and loans right from your browser." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flowllet.com/web" />
        <meta property="og:image" content="https://flowllet.com/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flowllet Web – Coming Soon" />
        <meta name="twitter:description" content="Be the first to know when Flowllet Web launches." />
        <meta name="twitter:image" content="https://flowllet.com/og-image.png" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen flex flex-col pt-20 relative overflow-hidden">
        {/* Background elements similar to Hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0ff] via-white to-[#eef2ff] -z-10" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#7134F1]/12 blur-[130px] -z-10" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#5509D9]/10 blur-[120px] -z-10" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] -z-10"
          style={{
            backgroundImage: `linear-gradient(#7134F1 1px, transparent 1px), linear-gradient(to right, #7134F1 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="flex-1 flex items-center justify-center py-20">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <motion.div {...fadeUp(0)} className="inline-flex items-center justify-center mb-8 mt-12">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5509D9] to-[#7134F1] flex items-center justify-center shadow-lg shadow-[#7134F1]/20">
                <Clock className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-gray-900 mb-6"
            >
              <span className="font-flowllet">Flowllet</span> Web is{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #5509D9, #7134F1)" }}
              >
                Coming Soon
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              We are working hard to bring the seamless <span className="font-flowllet">Flowllet</span> experience to your browser.
              Be the first to know when we launch, drop your email below.
            </motion.p>

            {/* Email subscription */}
            <EmailForm />

            <motion.div {...fadeUp(0.5)} className="mt-10">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#7134F1] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
            </motion.div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
};

export default ComingSoon;
