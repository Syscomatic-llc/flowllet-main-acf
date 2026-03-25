import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ValueProposition from "@/components/landing/ValueProposition";
import FeatureHighlights from "@/components/landing/FeatureHighlights";
import LoanTracking from "@/components/landing/LoanTracking";
import FinancialReports from "@/components/landing/FinancialReports";
import MultiWallet from "@/components/landing/MultiWallet";
import CloudSync from "@/components/landing/CloudSync";
import LightweightApp from "@/components/landing/LightweightApp";
import LanguageCurrency from "@/components/landing/LanguageCurrency";
import AppScreenshots from "@/components/landing/AppScreenshots";
import PrivacyTrust from "@/components/landing/PrivacyTrust";
import AboutSyscomatic from "@/components/landing/AboutSyscomatic";
import DownloadCTA from "@/components/landing/DownloadCTA";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import FloatingDownloadButton from "@/components/landing/FloatingDownloadButton";
import { Helmet } from "react-helmet-async";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Flowllet really free?", acceptedAnswer: { "@type": "Answer", text: "Yes, 100%. Flowllet is completely free with no subscriptions, no premium tiers, and no hidden charges." } },
    { "@type": "Question", name: "What data does Flowllet collect?", acceptedAnswer: { "@type": "Answer", text: "We only collect your name and email address. Your financial data stays private and is never shared." } },
    { "@type": "Question", name: "Which devices does Flowllet support?", acceptedAnswer: { "@type": "Answer", text: "Flowllet is available on both Android and iOS. The app is under 15MB and runs smoothly on most devices." } },
    { "@type": "Question", name: "Can I track multiple wallets?", acceptedAnswer: { "@type": "Answer", text: "Yes. Track cash, bank accounts, credit cards, savings, mobile wallets, and digital payment services." } },
    { "@type": "Question", name: "How does the loan reminder system work?", acceptedAnswer: { "@type": "Answer", text: "When you record a loan, the borrower receives an automatic email notification. Reminders are sent before due dates." } },
    { "@type": "Question", name: "What languages does Flowllet support?", acceptedAnswer: { "@type": "Answer", text: "English, Bengali, Hindi, and Arabic with support for all global currencies." } },
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Flowllet",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android, iOS",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: "Free personal finance app to track expenses, income, loans, and wallets across multiple currencies.",
  author: { "@type": "Organization", name: "Syscomatic LLC" },
};

const Index = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <FeatureHighlights />
        <LoanTracking />
        <FinancialReports />
        <MultiWallet />
        <CloudSync />
        <LightweightApp />
        <LanguageCurrency />
        <AppScreenshots />
        <PrivacyTrust />
        <AboutSyscomatic />
        <DownloadCTA />
        <FAQ />
      </main>
      <Footer />
      <FloatingDownloadButton />
    </>
  );
};

export default Index;
