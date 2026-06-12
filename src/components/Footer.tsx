import React, { useState } from "react";
import { AAMALogo } from "./AAMALogo";
import { Phone, Mail, Globe, MapPin, Instagram, ArrowUp, Send, CheckCircle, Compass, HelpCircle } from "lucide-react";

export function Footer() {
  const [newsEmail, setNewsEmail] = useState("");
  const [newsAlertSubmitted, setNewsAlertSubmitted] = useState(false);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail || !newsEmail.includes("@")) return;
    setNewsAlertSubmitted(true);
    setNewsEmail("");
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10 pt-16 pb-8 px-4 md:px-8 relative z-10 overflow-hidden" id="contact">
      {/* Volumetric background ambient spot */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E1A140]/2 rounded-none filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* COLUMN 1: BRAND LOGO DESCRIPTION */}
          <div className="lg:col-span-4 space-y-4 text-left font-sans">
            <div className="flex items-center gap-3">
              <AAMALogo size={46} />
              <div>
                <h4 className="text-sm font-extrabold tracking-[0.2em] uppercase font-display text-white">
                  AAMA <span className="text-[#E1A140]">Academy</span>
                </h4>
                <p className="text-[9px] tracking-[0.1em] text-neutral-500 uppercase font-sans">
                  Academy of Advanced Medical Aesthetics
                </p>
              </div>
            </div>
            
            <p className="text-[11px] text-neutral-400 font-light leading-relaxed max-w-sm">
              Providing medical aesthetic mastery courses exclusively designed for registered healthcare professionals. 
              Pioneering international-level clinical hands-on inject curriculum in Pakistan.
            </p>

            {/* INSTAGRAM BADGE EMBED LINK */}
            <div className="pt-2">
              <a 
                href="https://www.instagram.com/aama.academy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-neutral-900 hover:bg-neutral-850 border border-white/10 px-4 py-2.5 rounded-none text-xs font-bold text-neutral-300 hover:text-[#E1A140] transition-colors cursor-pointer group"
              >
                <Instagram size={15} className="text-rose-500 transform group-hover:scale-110 transition-transform" />
                <div className="text-left font-sans">
                  <p className="text-[10px] leading-tight font-extrabold m-0">@aama.academy</p>
                  <p className="text-[9px] text-neutral-500 font-normal m-0 uppercase tracking-widest mt-0.5">1,200+ Instagram followers</p>
                </div>
              </a>
            </div>
          </div>

          {/* COLUMN 2: CONTACT INFORMATION DETAILS */}
          <div className="lg:col-span-4 text-left space-y-4 font-sans" id="footer-contact-details">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#E1A140] font-mono">
              Registrar Contacts
            </h4>
            
            <div className="space-y-3.5 text-xs text-neutral-400 font-sans">
              
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#E1A140] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[9px] font-mono text-neutral-500 uppercase leading-none">Admission Desk Hotline</p>
                  <p className="text-xs text-neutral-200 mt-1 font-medium select-all">0309 5555 040</p>
                  <p className="text-xs text-neutral-300 mt-0.5 select-all">0301 8486 291</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={15} className="text-[#E1A140] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[9px] font-mono text-neutral-500 uppercase leading-none">Official Inquiry Email</p>
                  <p className="text-xs text-neutral-200 mt-1 select-all hover:text-[#E1A140] transition-colors">aama.pak@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass size={15} className="text-[#E1A140] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[9px] font-mono text-neutral-500 uppercase leading-none">Domains Registry</p>
                  <p className="text-xs text-neutral-200 mt-1 select-all hover:text-[#E1A140] transition-colors">aama.com.pk</p>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMN 3: CLINIC LOCATIONS AND MAP SIMULATION */}
          <div className="lg:col-span-4 text-left space-y-4 font-sans" id="footer-map-coordinates">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#E1A140] font-mono">
              Our Physical Stations
            </h4>

            {/* Karachi vs Islamabad physical stations detailed */}
            <div className="space-y-4">
              <div className="text-xs border-l-2 border-[#E1A140]/20 pl-3">
                <p className="font-bold text-neutral-200 uppercase font-display flex items-center gap-1">
                  <MapPin size={12} className="text-[#E1A140]" />
                  <span>Karachi Station:</span>
                </p>
                <p className="text-neutral-400 font-light mt-1">
                  AAMA Aesthetics Wing, Block 4, Clifton, Karachi, Pakistan (near Ocean Mall/Clifton)
                </p>
              </div>

              <div className="text-xs border-l-2 border-[#E1A140]/20 pl-3">
                <p className="font-bold text-neutral-200 uppercase font-display flex items-center gap-1">
                  <MapPin size={12} className="text-[#E1A140]" />
                  <span>Islamabad Center:</span>
                </p>
                <p className="text-neutral-400 font-light mt-1">
                  AAMA Academic Complex, Sector G-8, Islamabad, Pakistan (near G-8 Markaz)
                </p>
              </div>

              {/* STYLISED VECTOR MAP PREVIEW */}
              <div className="h-16 w-full rounded-none bg-neutral-900 border border-white/10 p-2 relative overflow-hidden flex items-center justify-center">
                {/* Dots grids represent visual grid map */}
                <div className="absolute inset-0 bg-[#ffffff02] [background-size:10px_10px] [background-image:radial-gradient(#ffffff03_1px,transparent_1px)] opacity-50"></div>
                <div className="border border-[#E1A140]/20 rounded-none px-2.5 py-1 text-[9px] uppercase tracking-wider font-mono text-[#E1A140] bg-neutral-950/90 relative z-10 flex items-center gap-1.5 flex-wrap">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                  <span>Karachi Clifton & Islamabad G-8 Verified</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* DOWN BAR: LICENSE AND CATALOG SUBSCRIPTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 text-neutral-500 text-xs">
          
          {/* CATALOG SUBSCRIPTION FOR DOCTORS */}
          <div className="lg:col-span-6 text-left font-sans">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">
              Receive Pre-Admission Alerts & Catalog Releases
            </h5>
            
            {newsAlertSubmitted ? (
               <div className="flex items-center gap-2 text-xs text-[#E1A140] bg-[#E1A140]/5 border border-[#E1A140]/10 p-2 rounded-none max-w-sm">
                <CheckCircle size={14} className="shrink-0" />
                <span>Doctor alert registered successfully! Checked on release schedule.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsSubmit} className="flex max-w-sm" id="catalog-form">
                <input
                  type="email"
                  required
                  placeholder="Official medical email address"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="bg-neutral-950 border border-white/10 rounded-none px-3.5 py-2 w-full text-xs text-neutral-200 outline-none focus:border-[#E1A140]"
                />
                <button
                  type="submit"
                  className="bg-[#E1A140] text-black px-3.5 rounded-none hover:bg-neutral-100 cursor-pointer transition-colors flex items-center justify-center font-sans"
                  aria-label="Subscribe catalog alerts"
                >
                  <Send size={13} />
                </button>
              </form>
            )}
            <p className="text-[9px] text-neutral-600 mt-1 font-sans">
              Strict privacy: AAMA does not index doctor emails with third-party networks.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:justify-end items-center gap-4 font-sans">
            <div className="text-center sm:text-right">
              <p className="m-0 text-[10px] uppercase font-mono tracking-wider text-neutral-500">
                © {new Date().getFullYear()} AAMA Pakistan. All rights reserved.
              </p>
              <p className="m-0 text-[9px] text-neutral-600 font-light mt-0.5">
                Accredited by Continuous Professional Development Assembly (UK). PMC / PMDC aligned guidelines.
              </p>
              <p className="m-0 text-[9px] text-neutral-500 font-light mt-1">
                Powered by <a href="https://magnatecreative.com" target="_blank" rel="noopener noreferrer" className="text-[#E1A140] hover:text-white hover:underline underline-offset-2 transition-colors">magnatecreative.com</a>
              </p>
            </div>

            {/* Back to top scroll button */}
            <button
              onClick={handleScrollTop}
              className="p-2.5 rounded-none bg-neutral-900 hover:bg-neutral-850 hover:text-white transition-colors border border-white/10 text-neutral-400 cursor-pointer"
              title="Scroll back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
