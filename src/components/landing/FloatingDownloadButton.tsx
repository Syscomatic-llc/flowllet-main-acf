import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingDownloadButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://play.google.com/store/apps/details?id=com.zahed.flowllet"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 transition-transform cursor-pointer"
          aria-label="Download Flowllet"
        >
          <Download className="w-6 h-6 text-primary-foreground" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingDownloadButton;
