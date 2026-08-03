import {
  AboutHero,
  AboutIntro,
  OurStory,
  VisionMission,
} from "@/components/marketing/about/about-company-sections";
import { AboutFaqSection } from "@/components/marketing/about/about-faq-section";
import {
  LeadershipSection,
  LeadershipShapeDefinitions,
  TeamGallerySection,
} from "@/components/marketing/about/about-team-sections";

export const aboutFaqs = [
  {
    question: "What services does UniSouk provide to sellers?",
    answer: "UniSouk is a unified ecommerce partner for Indian D2C brands and marketplace sellers. With a single dashboard, you can list products across marketplaces and your own store, manage inventory in real time, integrate payments, handle logistics, and access analytics, eliminating the hassle of using multiple tools.",
  },
  {
    question: "How can UniSouk help my business scale?",
    answer: "UniSouk simplifies online selling by syncing your inventory across Amazon, Flipkart, ONDC, Meesho and more, automating orders and shipping, and providing actionable analytics. This helps you save time, avoid overselling, and focus on scaling smoothly.",
  },
  {
    question: "Does UniSouk support sales on multiple marketplaces?",
    answer: "Yes! UniSouk lets you sell across leading platforms like Amazon, ONDC, Shopify, WooCommerce, and more. Manage everything from one dashboard, with no need to switch between apps or worry about missing an order.",
  },
  {
    question: "How secure is my data on UniSouk’s platform?",
    answer: "Your data security is our top priority. UniSouk uses trusted encryption standards and secure servers to protect your information. We never share your data with third parties, ensuring your business details remain safe and confidential.",
  },
  {
    question: "Is UniSouk suitable for new entrepreneurs?",
    answer: "Absolutely! If you're just starting your online journey or already running a brand, UniSouk is designed to meet you where you are. New sellers can set up their store in minutes, with no coding required. Experienced sellers can use our advanced features to streamline operations and maximize growth.",
  },
];

export function AboutReference() {
  return (
    <>
      <LeadershipShapeDefinitions />
      <AboutHero />
      <VisionMission />
      <OurStory />
      <LeadershipSection />
      <TeamGallerySection />
      <AboutIntro />
      <AboutFaqSection faqs={aboutFaqs} />
    </>
  );
}
