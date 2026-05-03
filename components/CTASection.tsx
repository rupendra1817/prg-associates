import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function CTASection() {
  const msg = encodeURIComponent("Hello! I need help with CA services. Please guide me.");
  return (
    <section className="py-20 bg-yellow-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-800 text-lg mb-8">Talk to our CA experts today. Free consultation for new clients!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/enquiry" className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl">
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
