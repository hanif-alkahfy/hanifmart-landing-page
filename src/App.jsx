import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductDetail from "./components/ProductDetail";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-[#F0F9FF] text-[#01579B]">
      <Analytics/>
      <Hero />
      <Features />
      <ProductDetail />
      <ContactUs />
      <Footer />
    </div>
  );
}
