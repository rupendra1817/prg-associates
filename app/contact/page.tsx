"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { FIRM_EMAIL, FIRM_PHONE, FIRM_ADDRESS, WHATSAPP_NUMBER } from "@/lib/constants";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`*Contact Form Message*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📧 Email: ${form.email}\n📌 Subject: ${form.subject}\n💬 Message: ${form.message}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-navy py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-3xl mx-auto px-4 relative">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Get In Touch</h1>
          <p className="text-gray-300 text-lg">We're here to help. Reach us via phone, email, or WhatsApp.</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-5 mb-10">
              {[
                { icon: Phone, label: "Phone", value: FIRM_PHONE, href: `tel:${FIRM_PHONE}`, color: "bg-blue-100 text-blue-600" },
                { icon: Mail, label: "Email", value: FIRM_EMAIL, href: `mailto:${FIRM_EMAIL}`, color: "bg-yellow-100 text-yellow-600" },
                { icon: MapPin, label: "Address", value: FIRM_ADDRESS, href: "#map", color: "bg-red-100 text-red-600" },
                { icon: Clock, label: "Business Hours", value: "Mon–Sat: 11:00 AM – 8:00 PM", href: "#", color: "bg-green-100 text-green-600" },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a key={label} href={href} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-yellow-300 transition-colors group">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                    <p className="text-gray-800 font-semibold text-sm mt-0.5">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle size={24} />
                <h3 className="font-bold text-lg">Chat on WhatsApp</h3>
              </div>
              <p className="text-green-100 text-sm mb-4">Get instant replies on WhatsApp. Available 9 AM – 9 PM.</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello!%20I%20have%20a%20query.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-green-50 transition-colors"
              >
                <MessageCircle size={16} /> Start Chat
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-4">Your message has been sent via WhatsApp. We'll respond shortly.</p>
                <button onClick={() => setSent(false)} className="text-yellow-600 font-semibold hover:underline">Send another message</button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <input name="subject" required value={form.subject} onChange={handleChange} placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Your message..." rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all hover:scale-[1.02]">
                    <Send size={16} /> Send via WhatsApp
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section id="map" className="h-80 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d80.9310!3d26.8742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999564f5f9b1b1b%3A0x1b1b1b1b1b1b1b1b!2sNishatganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </section>
    </div>
  );
}
