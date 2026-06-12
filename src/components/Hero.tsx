import React, { useState } from "react";
import { Sparkles, Calendar, ArrowRight, UserCheck, CheckCircle, HelpCircle } from "lucide-react";
// @ts-ignore
import heroAestheticImg from "../assets/images/bright_hero_model_1781221945218.jpg";

interface HeroProps {
  onRegisterClick: () => void;
  onExploreCourses: () => void;
  onSelectCourseFilter: (id: string | null) => void;
}

interface FeatureArea {
  id: string;
  name: string;
  muscle: string;
  course: string;
  courseId: string;
  indication: string;
  technique: string;
  x: string; // percentage coordinates for absolute positioning on silhouette
  y: string;
}

export function Hero({ onRegisterClick, onExploreCourses, onSelectCourseFilter }: HeroProps) {
  const [activeArea, setActiveArea] = useState<FeatureArea | null>({
    id: "glabella",
    name: "Glabellar Complex",
    muscle: "Procerus & Corrugator Supercilii",
    course: "Botox Masterclass (Basic & Advanced)",
    courseId: "botox",
    indication: "Frown Lines & Brows Lift",
    technique: "Intramuscular bolus injection avoiding levator palpebrae superioris",
    x: "38%",
    y: "18%"
  });

  const mappingAreas: FeatureArea[] = [
    {
      id: "forehead",
      name: "Forehead Lines",
      muscle: "Frontalis Muscle",
      course: "Botox Masterclass (Basic & Advanced)",
      courseId: "botox",
      indication: "Horizontal expression creases",
      technique: "Intradermal micro-droplets aligned with skin tension lines",
      x: "50%",
      y: "14%"
    },
    {
      id: "glabella",
      name: "Glabellar Complex",
      muscle: "Procerus & Corrugator Supercilii",
      course: "Botox Masterclass (Basic & Advanced)",
      courseId: "botox",
      indication: "Frown Lines & Brows Lift",
      technique: "Intramuscular injection with protective finger position to avoid blepharoptosis",
      x: "50%",
      y: "24%"
    },
    {
      id: "crows",
      name: "Lateral Canthal Lines",
      muscle: "Orbicularis Oculi",
      course: "Botox Masterclass (Basic & Advanced)",
      courseId: "botox",
      indication: "Crow's Feet",
      technique: "Superficial injection 1.5cm lateral to the bony orbital rim",
      x: "32%",
      y: "28%"
    },
    {
      id: "rhino",
      name: "Nasal Dorsum",
      muscle: "Nasalis & Depressor Septi",
      course: "Liquid Rhinoplasty Masterclass",
      courseId: "rhinoplasty",
      indication: "Hump camouflage & tip projection",
      technique: "Supraperiosteal bolus via cannula or sharp needle in the midline",
      x: "50%",
      y: "37%"
    },
    {
      id: "cheeks",
      name: "Zygomatic-Malar Apex",
      muscle: "Zygomaticus major & Deep Cheek Fat Pad",
      course: "Aesthetic Fillers Masterclass",
      courseId: "fillers",
      indication: "Midface volume loss & lateral lifting",
      technique: "Deep pre-periosteal bolus (MD Codes / Dr. Mauricio de Maio system)",
      x: "35%",
      y: "45%"
    },
    {
      id: "lips",
      name: "Vermilion Border & Body",
      muscle: "Orbicularis Oris",
      course: "Aesthetic Fillers Masterclass",
      courseId: "fillers",
      indication: "Lip volume, definitions & hydration",
      technique: "Retrograde linear threading & micro-droplets (Russian or Classic technique)",
      x: "50%",
      y: "62%"
    },
    {
      id: "masseter",
      name: "Angle of Mandible",
      muscle: "Masseter Muscle",
      course: "Botox Masterclass (Basic & Advanced)",
      courseId: "botox",
      indication: "Jaw slimming & bruxism therapeutics",
      technique: "Deep muscular injection in the safe triangle boundaries",
      x: "28%",
      y: "68%"
    },
    {
      id: "chin",
      name: "Mental Crease & Apex",
      muscle: "Mentalis Muscle & Pre-jowl sulcus",
      course: "Aesthetic Fillers Masterclass",
      courseId: "fillers",
      indication: "Retrognathia correction & chin lengthening",
      technique: "Deep supraperiosteal bolus at the midline of chin bone apex",
      x: "50%",
      y: "77%"
    }
  ];

  return (
    <section 
      style={{ contentVisibility: 'auto' }}
      className="relative min-h-screen bg-neutral-950 pt-28 lg:pt-36 pb-16 overflow-hidden flex items-center border-b border-neutral-900" 
      id="hero"
    >
      {/* 1. ARCHITECTURAL LUXURY AMBIENT GRAPHICS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft grid of lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        
        {/* Golden volumetric blobs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute bottom-1/8 left-10 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

        {/* Diagonal anatomical lines and rules */}
        <svg className="absolute inset-x-0 top-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0%" x2="90%" y2="100%" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="80%" y1="10%" x2="20%" y2="90%" stroke="#d4af37" strokeWidth="0.5" />
          <circle cx="50%" cy="50%" r="400" stroke="#d4af37" strokeOpacity="0.2" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT HAND SIDE: DESIRED HIGH-CONVERTING COPY --- */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left" id="hero-left-col">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 bg-neutral-900 border border-white/10 px-3.5 py-1.5 rounded-none shadow-lg" id="accreditation-badge">
              <span className="w-2 h-2 rounded-full bg-[#E1A140] animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#E1A140]">
                AAMA Pakistan • Hands-on Accreditation
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-[56px] lg:text-[70px] font-bold tracking-tighter text-white font-display leading-[0.9] uppercase">
              Leading <br />
              <span className="text-[#E1A140] font-serif lowercase italic tracking-tight font-light pr-2">aesthetic</span> Training, <br />
              Trusted Worldwide.
            </h1>

            {/* Detailed Subheadline */}
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-xl font-sans font-light">
              We provide premier, beginner-to-advanced hands-on aesthetic medicine training courses 
              for registered medical professionals. Gain international-standard expertise in injectable fillers, 
              neuromodulators (Botox), energy devices, and liquid rhinoplasty from master faculty in state-of-the-art clinical environments.
            </p>

            {/* Accreditation Partner Logos Row matching reference screenshot layout */}
            <div className="flex flex-wrap items-center gap-6 my-2 opacity-90" id="accreditation-partners">
              {/* Accredit 1 */}
              <div className="flex items-center gap-2.5 border-r border-white/10 pr-6">
                <svg className="w-8 h-8 text-neutral-300 shrink-0" viewBox="0 0 40 40" fill="none" aria-label="ACCME Accredited Badge">
                  <path d="M20 4 L34 32 H6 Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 10 L28 28 H12 Z" fill="currentColor" fillOpacity="0.1" />
                </svg>
                <div className="text-left font-sans">
                  <p className="text-[10px] font-extrabold tracking-widest text-[#E1A140] leading-none uppercase">ACCME</p>
                  <p className="text-[9px] font-mono text-neutral-400 mt-1 uppercase leading-none">Accredited CME</p>
                </div>
              </div>

              {/* Accredit 2 */}
              <div className="flex items-center gap-2.5 border-r border-white/10 pr-6">
                <svg className="w-8 h-8 text-[#E1A140] shrink-0" viewBox="0 0 40 40" fill="none" aria-label="International CPD Certified Badge">
                  <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M15 20 L18 23 L25 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-left font-sans">
                  <p className="text-[10px] font-extrabold tracking-widest text-white leading-none uppercase">CPD CERTIFIED</p>
                  <p className="text-[9px] font-mono text-neutral-400 mt-1 uppercase leading-none">Global Standards</p>
                </div>
              </div>

              {/* Accredit 3 */}
              <div className="flex items-center gap-2.5">
                <svg className="w-8 h-8 text-neutral-400 shrink-0" viewBox="0 0 40 40" fill="none" aria-label="AAMA London Badge">
                  <path d="M8 8 H32 V32 H8 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                  <path d="M12 12 H28 V28 H12 Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
                  <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="text-left font-sans">
                  <p className="text-[10px] font-extrabold tracking-widest text-neutral-300 leading-none uppercase">AAMA LONDON</p>
                  <p className="text-[9px] font-mono text-neutral-500 mt-1 uppercase leading-none">Affiliated Chapter</p>
                </div>
              </div>
            </div>

            {/* Technical Target Highlights info widget */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-lg mt-2 bg-neutral-900 border border-white/10 rounded-none p-4" id="technical-highlights-mini">
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#E1A140] font-mono">Methodology</p>
                <p className="text-xs font-semibold text-neutral-200">1-on-1 Hands-On</p>
              </div>
              <div className="text-left border-l border-white/10 pl-4">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#E1A140] font-mono">Aesthetic CPD</p>
                <p className="text-xs font-semibold text-neutral-200">Certified Portals</p>
              </div>
              <div className="text-left border-l border-white/10 pl-4 col-span-2 md:col-span-1">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#E1A140] font-mono">Centres</p>
                <p className="text-xs font-semibold text-neutral-200">Karachi & Islamabad</p>
              </div>
            </div>

            {/* Immediate CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <button 
                onClick={onRegisterClick}
                className="bg-[#E1A140] text-black px-8 py-4 font-bold uppercase tracking-widest text-xs transition-colors rounded-none hover:bg-amber-400 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Verify & Apply Now</span>
                <ArrowRight size={14} />
              </button>
              
              <button 
                onClick={onExploreCourses}
                className="bg-white/5 border border-white/20 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/10 text-white rounded-none transition-colors active:scale-98 cursor-pointer"
              >
                Browse Workshops
              </button>
            </div>

            {/* Warning requirement tag */}
            <div className="flex items-center gap-2 mt-2 text-xs text-neutral-550 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span>BMDC & PMDC Registered Doctors & Dentists Only</span>
            </div>

          </div>

          {/* --- RIGHT HAND SIDE: INTERACTIVE SILHOUETTE MEDICAL MAP --- */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full" id="hero-right-col">
            <div className="w-full max-w-[400px] aspect-[4/5] bg-neutral-900 border border-white/10 rounded-none relative p-0 overflow-hidden shadow-none flex items-center justify-center group/facemap-container">
              
              {/* High-end generated medical model photo backdrop */}
              <div className="absolute inset-0 z-0">
                <img
                  src={heroAestheticImg}
                  alt="Clinical Aesthetic Medicine Mapping Model"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-95 group-hover/facemap-container:scale-[1.03] group-hover/facemap-container:opacity-100 transition-all duration-700 ease-out"
                />
              </div>

              {/* Patient Profile Outline SVG overlay (very subtle) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mix-blend-screen">
                <svg width="100%" height="90%" viewBox="0 0 300 380" fill="none" className="stroke-[#E1A140]/20 stroke-[1]">
                  {/* Subtle alignment aids and symmetry circles */}
                  <path d="M 150 10 L 150 370" strokeDasharray="3 3" />
                  <path d="M 30 180 C 100 180, 200 180, 270 180" strokeDasharray="3 3" />
                  <circle cx="150" cy="180" r="110" stroke="#E1A140" strokeOpacity="0.15" strokeWidth="1" fill="none" />
                </svg>
              </div>

              {/* Patient Silhouette Visual Overlay representing facemap */}
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-4 left-4 text-[9px] font-mono text-zinc-400 bg-black/50 backdrop-blur-xs px-2 py-0.5 border border-white/5 tracking-wider">
                  CLINICAL FACEMAP V.04 // AAMA DIGITAL PRE-TESTER
                </span>
                <span className="absolute bottom-4 right-4 text-[9px] font-mono text-zinc-500 bg-black/50 backdrop-blur-xs px-2 py-0.5 border border-white/5 tracking-wider">
                  ANTIGRAVITY RETAIN APEX
                </span>
              </div>

              {/* Interactive Target Injection Buttons */}
              {mappingAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area)}
                  className="absolute cursor-pointer group/node"
                  style={{ left: area.x, top: area.y }}
                  aria-label={`Target area ${area.name}`}
                >
                  <span className={`absolute -translate-x-1/2 -translate-y-1/2 flex h-5.5 w-5.5 items-center justify-center rounded-full transition-all ${
                    activeArea?.id === area.id 
                      ? "bg-[#E1A140]/30 ring-2 ring-[#E1A140] scale-110 shadow-lg shadow-[#E1A140]/40" 
                      : "bg-neutral-950/80 hover:bg-amber-500/30 ring-1 ring-white/20 hover:ring-[#E1A140]/60"
                  }`}>
                    <span className={`block h-2 w-2 rounded-full ${
                      activeArea?.id === area.id 
                        ? "bg-[#E1A140] animate-pulse" 
                        : "bg-neutral-300 group-hover/node:bg-[#E1A140]"
                     }`}></span>
                  </span>
                  
                  {/* Subtle technical tooltip floating */}
                  <span className="hidden group-hover/node:block absolute left-5 -translate-y-1/2 bg-black/95 text-[10px] font-semibold text-neutral-200 border border-neutral-800 px-2.5 py-1 rounded shadow-xl whitespace-nowrap z-50">
                    {area.name} <span className="text-amber-500 font-mono">▸</span>
                  </span>
                </button>
              ))}
            </div>

            {/* --- DETAILED CLINICAL CASE CARD DESCRIPTOR - EXCELLENT INTERACTIVITY --- */}
            <div className="w-full max-w-[400px] mt-4 bg-neutral-900 border border-white/10 rounded-none p-4 shadow-xl text-left" id="clinical-facemap-interactive-output">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#E1A140] bg-neutral-950/40 px-2 py-0.5 rounded-none border border-white/10">
                    Anatomical Site Highlight
                  </span>
                  <h3 className="text-sm font-extrabold text-neutral-100 font-display mt-1.5 flex items-center gap-1.5">
                    {activeArea ? activeArea.name : "Select facial anchor"}
                  </h3>
                </div>
                {activeArea && (
                  <button 
                    onClick={() => {
                      onSelectCourseFilter(activeArea.courseId);
                      onExploreCourses();
                    }}
                    className="text-[10px] font-bold text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1 lowercase italic"
                  >
                    <span>View module details</span>
                    <span>→</span>
                  </button>
                )}
              </div>

              {activeArea ? (
                <div className="space-y-2 mt-2 text-xs text-neutral-300">
                  <div className="grid grid-cols-4 gap-1">
                    <span className="text-neutral-500 font-medium">Target Muscle:</span>
                    <span className="col-span-3 text-neutral-200 font-mono font-medium">{activeArea.muscle}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    <span className="text-neutral-500 font-medium">Clinical Goal:</span>
                    <span className="col-span-3 text-neutral-200">{activeArea.indication}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    <span className="text-neutral-500 font-medium">Inject Method:</span>
                    <span className="col-span-3 text-neutral-200 font-light italic">{activeArea.technique}</span>
                  </div>
                  <div className="pt-2 border-t border-neutral-900 mt-2 flex items-center justify-between text-[11px]">
                    <span className="text-neutral-400">Class: <strong className="text-neutral-200">{activeArea.course}</strong></span>
                    <span className="text-amber-400 font-semibold uppercase font-mono">AAMA Course ✓</span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Click on any injector pinpoint bubble mapped on the patient's face to analyze the target clinical musculature, inject guidelines, and recommended workshops.
                </p>
              )}
            </div>

          </div>

        </div>

        {/* --- GEOGRAPHICAL TRAINING HUBS BAR REPLICATING SCREENSHOT --- */}
        <div className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full relative z-10" id="geographical-training-hubs">
          <div className="flex flex-col items-center">
            <p className="text-[10px] font-mono tracking-widest text-[#E1A140] uppercase leading-none">Pakistan Head Office</p>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-display mt-1">Karachi</h4>
            <p className="text-[9px] text-neutral-500 mt-0.5">Clifton Clinical Suite</p>
          </div>
          <div className="flex flex-col items-center border-l border-white/5">
            <p className="text-[10px] font-mono tracking-widest text-[#E1A140] uppercase leading-none">Punjab Chapter</p>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-display mt-1">Lahore</h4>
            <p className="text-[9px] text-neutral-500 mt-0.5">Gulberg Resuscitation Centre</p>
          </div>
          <div className="flex flex-col items-center border-l border-white/5">
            <p className="text-[10px] font-mono tracking-widest text-[#E1A140] uppercase leading-none">Capital District</p>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-display mt-1">Islamabad</h4>
            <p className="text-[9px] text-neutral-500 mt-0.5">F-8 Clinical Theatre</p>
          </div>
          <div className="flex flex-col items-center border-l border-white/5">
            <p className="text-[10px] font-mono tracking-widest text-[#E1A140] uppercase leading-none">KPK Hub</p>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-display mt-1">Peshawar</h4>
            <p className="text-[9px] text-neutral-500 mt-0.5">Hayatabad Partner Clinic</p>
          </div>
        </div>

      </div>
    </section>
  );
}
