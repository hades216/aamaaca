import React, { useState } from "react";
import { Award, GraduationCap, Users, ShieldAlert, CheckCircle2, FlaskConical, Target, Quote } from "lucide-react";

// @ts-ignore
import suiteImg from "../assets/images/luxury_clinical_suite_1780601950907.png";

export function About() {
  const [activeTab, setActiveTab] = useState<"mission" | "standards" | "methodology">("mission");

  // Bento information details
  const stats = [
    { title: "Trained Physicians", value: "1,200+", desc: "MBBS & BDS doctors certified across Karachi, Lahore & Islamabad" },
    { title: "Mentor Experience", value: "25+ Yrs", desc: "Combined board-certified plastic surgery and clinical dermatology prestige" },
    { title: "CPD Accreditations", value: "100%", desc: "Durable medical points verified by provincial health authorities" },
    { title: "Alumni Launch Rate", value: "94%", desc: "Graduates successfully establishing private aesthetic consulting clinics" }
  ];

  return (
    <section className="bg-neutral-950 py-20 px-4 md:px-8 relative z-10 border-b border-white/10 overflow-hidden" id="about-section">
      {/* Background soft glowing ring */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: TEXT COPY & MISSION TAB CONTROLLER */}
          <div className="lg:col-span-7 text-left space-y-6" id="about-text-content">
            
            <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E1A140] font-mono m-0">
              Elite Academic Standards
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-display m-0 leading-tight">
              Pioneering Aesthetic <br />
              <span className="text-[#E1A140] font-serif lowercase italic">medicine training</span> in Pakistan
            </h2>
            <div className="w-16 h-[1px] bg-[#E1A140] my-4"></div>

            <p className="text-xs md:text-sm text-neutral-400 font-sans font-light leading-relaxed">
              The Academy of Advanced Medical Aesthetics (AAMA Pakistan) is the national premier educational institute 
              specifically engineered to transition registered medical professionals into world-class aesthetic injectors. 
              We bridge the gap between academic clinical dermatology and practical execution.
            </p>

            {/* TAB SELECTORS */}
            <div className="flex gap-2 border-b border-white/10 pb-2 mt-6">
              {[
                { id: "mission", label: "Academic Vision" },
                { id: "standards", label: "Patient Safety Standards" },
                { id: "methodology", label: "Hands-on Method" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 bg-transparent text-xs font-bold tracking-wider uppercase transition-colors focus:outline-none cursor-pointer border-b ${
                    activeTab === tab.id
                      ? "text-[#E1A140] border-[#E1A140] font-extrabold"
                      : "text-neutral-500 hover:text-neutral-300 border-transparent font-medium"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT DESCRIPTORS */}
            <div className="min-h-[140px] text-xs leading-relaxed text-neutral-350" id="about-tabs-body">
              {activeTab === "mission" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <p className="font-light">
                    Our vision is to elevate the overall quality and safety of commercial aesthetic procedures throughout Pakistan 
                    by establishing standardized, accredited, university-grade injectables education. We empower doctors, dentists, and dermatologists to align facial aesthetics with logical golden-ratio mathematical guidelines.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#E1A140] shrink-0" />
                      <span>Standardised Syllabus Criteria</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#E1A140] shrink-0" />
                      <span>Ethical commercial clinic consulting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#E1A140] shrink-0" />
                      <span>Post-course lifetime mentorship forum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#E1A140] shrink-0" />
                      <span>Valid CPD compliance indicators</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "standards" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <p className="font-light">
                    Commercial aesthetics carry high physical clinical responsibilities. AAMA places extreme emphasis on 
                    the avoidance, diagnotics, and emergency handling of vascular occlusion, blindness, skin necrosis, 
                    and severe hypersensitivity reactions. We train doctors to inject with deep anatomic caution.
                  </p>
                  <div className="bg-amber-500/5 p-4 rounded-none border border-white/10 flex gap-3 text-[11px] text-neutral-400">
                    <ShieldAlert size={16} className="text-[#E1A140] shrink-0 mt-0.5" />
                    <span>Every AAMA workspace candidate is trained in emergency enzyme reconstitution (Hyaluronidase protocols) with sharp-needle vs. rounded micro-cannula safety diagnostics.</span>
                  </div>
                </div>
              )}

              {activeTab === "methodology" && (
                <div className="space-y-4 animate-in fade-in duration-305">
                  <p className="font-light">
                    Theory is useless without muscle-memory. While other courses rely on synthetic plastic medical heads or silicon pads, AAMA maintains a rigid <strong>live patient model policy</strong>. Candidates observe a mentor inject, map and calibrate, and subsequently inject the patient candidate themselves under 1-on-1 supervision.
                  </p>
                  <ul className="space-y-2 text-neutral-400">
                    <li className="flex items-start gap-2">
                      <strong className="text-[#E1A140] font-semibold uppercase">1-on-1 Coaching:</strong>
                      <span>A highly restricted candidate-per-mentor ratio to ensure individual attention.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <strong className="text-[#E1A140] font-semibold uppercase">Real Patients:</strong>
                      <span>All hands-on workshops are performed strictly on pre-screened live patient models.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Aesthetic Quote block */}
            <div className="border-l-4 border-[#E1A140]/30 pl-4 py-1 italic text-xs text-neutral-400 leading-relaxed font-serif">
              "Injecting is not merely delivering a chemical bolus. It is the three-dimensional sculpt of a living patient’s structural expression and health."
              <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mt-2 not-italic font-bold">
                — AAMA ACADEMIC BOARD DIRECTIVES
              </span>
            </div>

          </div>

          {/* RIGHT: BENTO STATS BLOCK */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4" id="about-bento-grid">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-white/10 rounded-none p-5 md:p-6 text-left hover:border-white/20 transition-colors duration-300 shadow-xl"
              >
                <p className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 font-display">
                  {stat.value}
                </p>
                <h4 className="text-xs font-bold text-neutral-200 mt-2 mb-1 uppercase tracking-tight font-display">
                  {stat.title}
                </h4>
                <p className="text-[10px] text-neutral-550 leading-normal font-light">
                  {stat.desc}
                </p>
              </div>
            ))}

            {/* Accompanying image/graphic capsule */}
            <div className="col-span-2 bg-neutral-900 border border-white/10 p-5 rounded-none text-left flex items-center gap-4">
              <div className="w-10 h-10 rounded-none bg-amber-500/10 flex items-center justify-center shrink-0 border border-[#E1A140]/20 text-[#E1A140]">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="text-[11px] font-extrabold uppercase text-neutral-100 tracking-wider">
                  Accredited by CPD Standards (UK Body)
                </h4>
                <p className="text-[10px] text-neutral-400 font-light mt-0.5">
                  Graduates receive formal, digitally-verifiable Continuing Professional Development credits recognized globally for licensing board submissions.
                </p>
              </div>
            </div>

            {/* Visual Classroom preview inside bento */}
            <div className="col-span-2 relative bg-neutral-900 border border-[#E1A140]/30 overflow-hidden group/bento-img h-48 flex flex-col justify-end p-5" id="about-clinical-theatre-card">
              <img
                src={suiteImg}
                alt="AAMA Clinical Training Theatre Karachi"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover/bento-img:scale-105 transition-transform duration-700 ease-out z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10"></div>
              <div className="relative z-20 text-left">
                <span className="text-[9px] font-mono text-[#E1A140] tracking-[0.15em] uppercase bg-black/75 backdrop-blur-xs px-2 py-0.5 border border-[#E1A140]/30 font-extrabold">
                  CLINICAL THEATRE VAULT
                </span>
                <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-display mt-2 mb-1">
                  Karachi Training Center
                </h4>
                <p className="text-[10px] text-zinc-300 leading-normal font-light">
                  A high-end luxury clinical space customized for 1-on-1 private injectables training and laser safety operations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
