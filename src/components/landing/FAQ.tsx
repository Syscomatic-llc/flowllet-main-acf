import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  ChevronRight,
  Heart
} from "lucide-react";

const highlightFlowllet = (text: string) => {
  const parts = text.split(/(Flowllet)/g);
  return parts.map((part, i) =>
    part === "Flowllet" ? <span key={i} className="font-flowllet">{part}</span> : part
  );
};

const faqs = [
  {
    q: "Is Flowllet really free?",
    a: "Yes, 100%. Flowllet is completely free with no subscriptions, no premium tiers, and no hidden charges. Every feature is available to all users at no cost.",
  },
  {
    q: "What data does Flowllet collect?",
    a: "We only collect your name and email address for account creation. Your financial data stays private and is never shared with third parties or advertisers.",
  },
  {
    q: "Which devices does Flowllet support?",
    a: "Flowllet is available on both Android (Google Play Store) and iOS (Apple App Store). The app is lightweight at under 15MB and runs smoothly on most devices.",
  },
  {
    q: "Can I track multiple wallets?",
    a: "Absolutely. You can track cash, bank accounts, credit cards, savings accounts, mobile wallets, and digital payment services, all in one place.",
  },
  {
    q: "How does the loan reminder system work?",
    a: "When you record a loan, the borrower receives an automatic email notification. As the due date approaches, Flowllet sends reminder notifications to ensure timely repayment.",
  },
  {
    q: "What languages does Flowllet support?",
    a: "Flowllet currently supports English, Bengali, Hindi, and Arabic. The app also supports all global currencies with optimized experiences for Bangladesh, USA, UAE, Canada, Singapore, India, Nepal, and Europe.",
  },
  {
    q: "What happens if I switch devices?",
    a: "Your data is securely synced to the cloud. Simply install Flowllet on your new device, log in, and all your financial data will be automatically restored.",
  },
  {
    q: "Who built Flowllet?",
    a: "Flowllet is designed, developed, and maintained by Syscomatic LLC. Our mission is to make personal finance management simple and accessible for everyone.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" ref={ref} className="py-16 lg:py-24 bg-white overflow-hidden relative">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ── LEFT: Help Center Intro ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary shadow-sm mb-6">
              <HelpCircle className="w-4 h-4" />
              Help Center
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.1] mb-4">
              Got <span className="text-gradient">Questions?</span><br />
              We have Answers.
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed mb-6 max-w-md">
              Find everything you need to know about <span className="font-flowllet">Flowllet</span>. If you can't find what you're looking for, our team is just a message away.
            </p>


            {/* Contact Support Card */}
            <div className="p-6 rounded-[32px] bg-slate-900 text-white relative overflow-hidden group shadow-2xl shadow-slate-200">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
               
               <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                     <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-2">Still Need Help?</h4>
                  <p className="text-white/60 text-sm mb-8">Can't find the answer you're looking for? Reach out to our friendly team.</p>
                  
                  <a 
                    href="mailto:myflowllet@syscomatic.com" 
                    className="flex items-center justify-between w-full p-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-900 transition-all font-bold text-sm group/btn"
                  >
                    Contact Support
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
               </div>
            </div>
          </motion.div>

          {/* ── RIGHT: FAQ Accordion ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="group border border-slate-100 bg-slate-50/50 rounded-2xl overflow-hidden hover:bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 px-2"
                >
                  <AccordionTrigger className="flex items-center gap-3 py-3 px-4 hover:no-underline [&[data-state=open]>div>svg.plus]:hidden [&[data-state=open]>div>svg.minus]:block text-left">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Plus className="w-4 h-4 plus block" />
                      <Minus className="w-4 h-4 minus hidden" />
                    </div>
                    <span className="flex-1 text-left font-heading font-bold text-sm sm:text-base text-slate-800 group-hover:text-slate-900 transition-colors">
                      {highlightFlowllet(faq.q)}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-12 pb-4 text-slate-500 text-xs sm:text-sm leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {highlightFlowllet(faq.a)}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 flex items-center gap-4 p-6 rounded-3xl bg-slate-50 border border-dashed border-slate-200 text-slate-500">
               <Heart className="w-5 h-5 text-primary shrink-0" />
               <p className="text-sm font-medium"><span className="font-flowllet">Flowllet</span> is updated regularly with new features based on community feedback. Your question could be our next feature!</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
