import EnquiryForm from "@/components/EnquiryForm";
import { MessageCircle, Clock, CheckCircle } from "lucide-react";

export default function EnquiryPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-navy py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-3xl mx-auto px-4 relative">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">Enquiry</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Get Professional Consultation</h1>
          <p className="text-gray-300 text-lg">Fill the form below and our professional group will reach you on WhatsApp within minutes.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Enquire With Us?</h2>
            <div className="space-y-5 mb-8">
              {[
                { icon: MessageCircle, title: "Instant WhatsApp Response", desc: "Your enquiry goes directly to our CA's WhatsApp for immediate attention.", color: "bg-green-100 text-green-600" },
                { icon: Clock, title: "Quick Turnaround", desc: "Most services completed within 24-48 hours of document submission.", color: "bg-blue-100 text-blue-600" },
                { icon: CheckCircle, title: "Free First Consultation", desc: "No charges for the initial consultation. We assess your needs first.", color: "bg-yellow-100 text-yellow-600" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle size={24} className="text-green-600" />
                <h3 className="font-bold text-gray-900">Prefer Direct WhatsApp?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Skip the form and chat with us directly on WhatsApp for instant assistance.</p>
              <a
                href="https://wa.me/919876543210?text=Hello!%20I%20need%20CA%20services%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all"
              >
                <MessageCircle size={16} /> Open WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Your Enquiry</h3>
            <p className="text-gray-500 text-sm mb-6">We'll respond within 30 minutes during business hours.</p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
