import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star, Users } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import NetworkBackground from "@/components/NetworkBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy" />
      <NetworkBackground />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      {/* Floating blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-yellow-400 opacity-5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-blue-400 opacity-5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">

        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Trusted by 500+ Clients Across India & Abroad</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            We are a Team of Professional
            <span className="block shimmer mt-2">CA / CWA / CS / Advocates</span>
          </h1>
          <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            From GST filing to company registration, ITR to food licenses — we handle all your financial and compliance needs with precision and care.
          </p>
        </div>

        {/* Main content: Photo + Form */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left - Team Discussion Photo */}
          <div className="relative">
            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Professional CA team in discussion"
                width={800}
                height={520}
                className="w-full h-[340px] sm:h-[420px] object-cover"
                unoptimized
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/70 via-transparent to-transparent" />

              {/* Bottom label on photo */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2">
                  <Users size={16} className="text-yellow-400" />
                  <span className="text-white text-sm font-semibold">Our Expert Team</span>
                </div>
                <div className="flex -space-x-2">
                  {["CA", "CS", "CWA", "Adv"].map((role) => (
                    <div key={role} className="w-9 h-9 rounded-full gradient-gold border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-sm">12+</span>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Years</p>
                <p className="text-gray-400 text-xs">Experience</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">500+</span>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Clients</p>
                <p className="text-gray-400 text-xs">Served</p>
              </div>
            </div>

            {/* Service chips */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["GST Filing", "ITR Returns", "Company Registration", "FSSAI License"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-sm text-gray-200">
                  <CheckCircle size={14} className="text-yellow-400" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/services" className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full transition-all">
                About Us
              </Link>
            </div>
          </div>

          {/* Right - Enquiry Form */}
          <div className="glass rounded-3xl p-6 sm:p-8">
            <h2 className="text-white text-2xl font-bold mb-2">Get Free Consultation</h2>
            <p className="text-gray-400 text-sm mb-6">Fill the form and we'll reach you on WhatsApp instantly.</p>
            <EnquiryForm compact dark />
          </div>
        </div>

      </div>
    </section>
  );
}
