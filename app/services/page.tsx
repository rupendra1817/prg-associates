import { FileText, Calculator, Building2, UtensilsCrossed, Shield, ClipboardCheck, Award, BookOpen, HardHat, FileMinus, FilePlus, BadgeCheck, Globe, Heart, Scale, Rocket, KeyRound, Landmark, Gavel, Handshake, ShieldAlert, Users, TrendingUp, Banknote, BarChart3, DollarSign, Receipt, BookMarked, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  FileText, Calculator, Building2, UtensilsCrossed, Shield, ClipboardCheck, Award, BookOpen,
  HardHat, FileMinus, FilePlus, BadgeCheck, Globe, Heart, Scale, Rocket, KeyRound,
  Landmark, Gavel, Handshake, ShieldAlert, Users, TrendingUp, Banknote, BarChart3,
  DollarSign, Receipt, BookMarked,
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-navy py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-3xl mx-auto px-4 relative">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">Services</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">All Our Services</h1>
          <p className="text-gray-300 text-lg">Comprehensive CA services for every business need — from registration to compliance.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} className="bg-white rounded-2xl p-8 hover-lift border border-gray-100 flex gap-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((f) => (
                        <span key={f} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                    <Link href="/enquiry" className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 hover:gap-2 transition-all">
                      Enquire Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-14">Simple 4-Step Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Enquire", desc: "Fill the form or WhatsApp us" },
              { step: "02", title: "Consult", desc: "Free consultation with our professional group" },
              { step: "03", title: "Submit Docs", desc: "Share documents digitally" },
              { step: "04", title: "Done!", desc: "We handle everything for you" },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="w-14 h-14 rounded-full bg-yellow-500 text-gray-900 font-bold text-lg flex items-center justify-center mx-auto mb-4">{step}</div>
                <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-500 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Specific Service?</h2>
        <p className="text-gray-800 mb-8">Contact us and we'll guide you to the right solution.</p>
        <Link href="/enquiry" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105">
          Get Started Today <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
