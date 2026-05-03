import { FileText, Calculator, Building2, UtensilsCrossed, Shield, ClipboardCheck, Award, BookOpen, HardHat, FileMinus, FilePlus, BadgeCheck, Globe, Heart, Scale, Rocket, KeyRound, Landmark, Gavel, Handshake, ShieldAlert, Users, TrendingUp, Banknote, BarChart3, DollarSign, Receipt, BookMarked, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  FileText, Calculator, Building2, UtensilsCrossed, Shield, ClipboardCheck, Award, BookOpen,
  HardHat, FileMinus, FilePlus, BadgeCheck, Globe, Heart, Scale, Rocket, KeyRound,
  Landmark, Gavel, Handshake, ShieldAlert, Users, TrendingUp, Banknote, BarChart3,
  DollarSign, Receipt, BookMarked,
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Our Professional Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive financial and compliance services tailored for individuals, startups, and established businesses.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="bg-white rounded-2xl p-6 hover-lift border border-gray-100 group cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{service.title}</h3>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-1 mb-4">
                  {service.features.map((f) => (
                    <li key={f} className="text-xs text-gray-600 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/enquiry" className="text-xs font-semibold text-yellow-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Get Started <ArrowRight size={12} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
