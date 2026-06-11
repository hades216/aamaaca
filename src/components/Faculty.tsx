import React from "react";
import { Award, ShieldCheck, Mail, Linkedin, GraduationCap, CheckCircle } from "lucide-react";

interface FacultyMember {
  name: string;
  role: string;
  degrees: string[];
  bio: string;
  expertise: string[];
  imageUrl: string;
  boardRegistration: string;
}

export function Faculty() {
  const facultyList: FacultyMember[] = [
    {
      name: "Dr. Shumaila Khan",
      role: "Lead Consultant Dermatologist & Aesthetic Mentor",
      degrees: ["MBBS (Doctor of Medicine)", "FCPS (Dermatology)", "Fellow of American Academy of Aesthetic Medicine"],
      bio: "Dr. Shumaila Khan is a leading authority in clinical dermatology and advanced lasers in Pakistan. With over 15 years of consulting experience, she leads the lasers and energy device diagnostic syllabuses at AAMA Academy, training doctors on selective photothermolysis and facial skin pathology.",
      expertise: [
        "Advanced Dermal Fillers Rheology",
        "Clinical Lasers & IPL Safety Protocols",
        "Fitzpatrick Skin Type IV-VI Complications",
        "Vascular Danger Zones Mapping"
      ],
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300", // High-end professional doctor photo
      boardRegistration: "PM&DC Board-Certified Dermatologist"
    },
    {
      name: "Dr. Asher Mashhood",
      role: "Senior Aesthetic Surgeon & Injectables Lead",
      degrees: ["MBBS (Doctor of Medicine)", "FCPS (Plastic & Reconstructive Surgery)", "Diploma in Aesthetic Medicine (UK)"],
      bio: "Dr. Asher Mashhood is a highly respected aesthetic surgeon. He has dedicated his career to refining facial symmetry, volumetric fat-pad restoration, and structural liquid profiloplasty. At AAMA, Dr. Asher personally conducts the 1-on-1 hands-on candidate injection evaluations.",
      expertise: [
        "Botulinum Toxin Dosage Dilutions",
        "MD Codes Injection Vectors",
        "Liquid Rhinoplasty Midline Cannula Techniques",
        "Necrosis Emergency Hyaluronidase Interventions"
      ],
      imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300", // Male professional doctor photo
      boardRegistration: "PM&DC Board-Certified Aesthetic Surgeon"
    }
  ];

  return (
    <section className="bg-neutral-950 py-20 px-4 md:px-8 relative z-10 border-b border-white/10" id="faculty-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 font-sans">
          <GraduationCap size={40} className="text-[#E1A140] mx-auto mb-4" />
          <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E1A140] mb-2 font-mono">
            Scientific Advisory Panel 
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase font-display">
            Faculty & <span className="text-[#E1A140] font-serif lowercase italic">academic board</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#E1A140] mx-auto mt-4 mb-6"></div>
          <p className="text-sm text-neutral-400 font-sans font-light">
            Learn Aesthetic Medicine from certified medical legends who have established eminent aesthetic 
            practices and are recognized authorities by national and international plastic surgery assemblies.
          </p>
        </div>

        {/* --- FACULTY CARD LIST GRID --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12" id="faculty-cards-container">
          {facultyList.map((member, i) => (
            <div
              key={i}
              className="bg-neutral-900 border border-white/10 hover:border-[#E1A140]/30 rounded-none p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 transition-colors duration-300 shadow-2xl relative overflow-hidden group"
              id={`faculty-card-${i}`}
            >
              {/* Photo component representing doctors face */}
              <div className="w-full md:w-44 shrink-0 font-sans">
                <div className="aspect-square md:aspect-[3/4] w-full rounded-none overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle vignette layer overlay */}
                  <div className="absolute inset-0 bg-neutral-950/20 border border-[#E1A140]/10 rounded-none"></div>
                </div>

                {/* Technical Board Registration badge under photo */}
                <div className="mt-3.5 bg-[#E1A140]/5 border border-[#E1A140]/15 py-1.5 px-3 rounded-none text-[10px] font-bold text-[#E1A140] text-center tracking-wider uppercase font-mono">
                  {member.boardRegistration}
                </div>
              </div>

              {/* Text description/Details column */}
              <div className="text-left flex flex-col justify-between font-sans" id={`faculty-doc-${i}`}>
                <div className="space-y-3">
                  {/* Name and Professional Title */}
                  <div>
                    <h3 className="text-lg md:text-xl font-extrabold text-white font-display uppercase tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#E1A140] mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Accompanying Qualifications listing */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.degrees.map((deg, index) => (
                      <span key={index} className="text-[9px] font-sans text-neutral-400 bg-neutral-950 border border-white/10 px-2 py-0.5 rounded-none">
                        {deg}
                      </span>
                    ))}
                  </div>

                  {/* Detailed Bio text */}
                  <p className="text-[11px] md:text-xs text-neutral-400 leading-relaxed font-light">
                    {member.bio}
                  </p>

                  {/* Expertise Skills Pills */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <p className="text-[9px] uppercase font-bold tracking-wider text-neutral-500 font-mono">
                      Faculty Workshop Focus Areas:
                    </p>
                    <div className="grid grid-cols-1 gap-1">
                      {member.expertise.map((exp, skillIdx) => (
                        <div key={skillIdx} className="flex items-center gap-1.5 text-xs text-neutral-300 font-sans font-light">
                          <CheckCircle size={11} className="text-[#E1A140] shrink-0" />
                          <span>{exp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simulated Social Links */}
                <div className="flex gap-4 mt-6 pt-4 border-t border-white/5 text-neutral-500 text-xs">
                  <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer font-mono text-[10px] uppercase">
                    <Linkedin size={12} className="text-[#E1A140]" />
                    <span>professional profile</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer font-mono text-[10px] uppercase">
                    <Award size={12} className="text-[#E1A140]" />
                    <span>CME Certified</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
