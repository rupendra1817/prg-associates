import Link from "next/link";
import { Phone, Mail, MapPin, Camera, Briefcase, Bird } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { FIRM_NAME, FIRM_EMAIL, FIRM_PHONE, FIRM_ADDRESS, SERVICES } from "@/lib/constants";
import ShareButton from "./ShareButton";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/PRG-LOGO.png" alt="PRG & Associates Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">{FIRM_NAME}</p>
                <p className="text-xs text-gray-400">Taxation | Business | Finance | Legal</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">Providing professional financial and compliance services with integrity and excellence since 2009.</p>
            <div className="flex gap-3">
              {[Camera, Briefcase, Bird].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transition-colors">
                  <Icon size={16} />
                </a>
              ))}
              <ShareButton />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                    → {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Enquiry", "/enquiry"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">→ {label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code */}
          <div>
            <h3 className="text-white font-semibold mb-4">Scan to Visit</h3>
            <div className="bg-white p-2 rounded-lg inline-block">
              <QRCodeSVG value="https://prgassociates.vercel.app" size={100} />
            </div>
            <p className="text-xs text-gray-400 mt-2">Scan QR to open website</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                <span className="text-gray-400">{FIRM_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-yellow-400 shrink-0" />
                <a href={`tel:${FIRM_PHONE}`} className="text-gray-400 hover:text-yellow-400">{FIRM_PHONE}</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-yellow-400 shrink-0" />
                <a href={`mailto:${FIRM_EMAIL}`} className="text-gray-400 hover:text-yellow-400">{FIRM_EMAIL}</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-yellow-400 shrink-0">🕐</span>
                <span className="text-gray-400">Business Hours: 11:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} {FIRM_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
