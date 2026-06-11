import React, { useState } from "react";
import { MapPin, Calendar, Users, Clock, Compass, AlertCircle, ArrowRight, HeartHandshake } from "lucide-react";

interface ScheduleItem {
  id: string;
  city: string;
  date: string;
  venue: string;
  module: string;
  totalSeats: number;
  openSeats: number;
  timeframe: string;
  coordinates: string;
}

export function Schedule() {
  const [selectedCity, setSelectedCity] = useState<"karachi" | "islamabad">("karachi");

  const schedules: ScheduleItem[] = [
    {
      id: "kh-1",
      city: "karachi",
      date: "Saturday, July 11, 2026",
      venue: "AAMA Partner Aesthetics Centre, Block 4, Clifton, Karachi",
      module: "Basic & Advanced Botox Masterclass",
      totalSeats: 15,
      openSeats: 3,
      timeframe: "09:00 AM - 06:00 PM PST",
      coordinates: "Clifton, Karachi near Ocean Mall"
    },
    {
      id: "kh-2",
      city: "karachi",
      date: "Sunday, July 12, 2026",
      venue: "AAMA Partner Aesthetics Centre, Block 4, Clifton, Karachi",
      module: "Aesthetic Dermal Fillers (Volumisation Codes)",
      totalSeats: 12,
      openSeats: 5,
      timeframe: "09:00 AM - 06:30 PM PST",
      coordinates: "Clifton, Karachi near Ocean Mall"
    },
    {
      id: "is-1",
      city: "islamabad",
      date: "Saturday, August 01, 2026",
      venue: "AAMA Executive Complex, Sector G-8, Islamabad",
      module: "Masterclass in Profiloplasty & Liquid Rhinoplasty",
      totalSeats: 10,
      openSeats: 2,
      timeframe: "10:00 AM - 05:30 PM PST",
      coordinates: "Sector G-8, Islamabad"
    },
    {
      id: "is-2",
      city: "islamabad",
      date: "Sunday, August 02, 2026",
      venue: "AAMA Executive Complex, Sector G-8, Islamabad",
      module: "Combined Botox & Dynamic Fillers Masterclass",
      totalSeats: 15,
      openSeats: 4,
      timeframe: "09:00 AM - 06:00 PM PST",
      coordinates: "Sector G-8, Islamabad"
    }
  ];

  const filteredItems = schedules.filter((s) => s.city === selectedCity);

  // Daily structural breakdown timeline representation
  const timelineData = [
    { time: "09:00 AM - 11:30 AM", event: "Applied Anatomy & Patient Selection", details: "Deep-dive lecture focusing on dangerous arterial grids, dilution science, patient photography, and anatomical target lines." },
    { time: "11:30 AM - 01:00 PM", event: "Mentor Live Demonstration & Mapping", details: "Mentor maps faces live, evaluating muscle resistance, skin vectors, and inject angles. Interactive candidate calibration." },
    { time: "01:00 PM - 02:00 PM", event: "Clinical Buffet & Networking", details: "Exclusive private dining with colleagues and international aesthetic consultants to share local clinical insights." },
    { time: "02:00 PM - 05:30 PM", event: "Supervised Hands-on Candidate Injecting", details: "Strictly supervised 1-on-1 hands-on candidate injection on pre-screened models. Validating grip stability, depth, and safety." },
    { time: "05:30 PM - 06:00 PM", event: "Certificate Ceremony & Portals Access", details: "Distribution of accredited CPD certifications, peer photography, and granting entry to the global AAMA Pakistan Alumni Portal." }
  ];

  return (
    <section className="bg-neutral-950 py-20 border-b border-white/10" id="schedule-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left">
            <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E1A140] mb-2 font-mono">
              Live Clinical Assemblies
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
              Workshop Schedule <span className="text-[#E1A140] font-serif lowercase italic">& locations</span>
            </h2>
          </div>

          {/* Toggle buttons */}
          <div className="flex gap-2 mt-4 md:mt-0 bg-neutral-900 p-1 rounded-none border border-white/10" id="city-toggle-buttons">
            <button
              onClick={() => setSelectedCity("karachi")}
              className={`px-6 py-2.5 rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                selectedCity === "karachi"
                  ? "bg-[#E1A140] text-black shadow-lg"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Karachi Hub
            </button>
            <button
              onClick={() => setSelectedCity("islamabad")}
              className={`px-6 py-2.5 rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                selectedCity === "islamabad"
                  ? "bg-[#E1A140] text-black shadow-lg"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Islamabad Center
            </button>
          </div>
        </div>

        {/* --- MAIN SPLIT SECTION: METRICS AND ROADMAP --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Workshop Locations List & seats */}
          <div className="lg:col-span-6 space-y-6 text-left" id="schedules-list-column">
            {filteredItems.map((item) => {
              const seatPercent = (item.openSeats / item.totalSeats) * 100;
              const isLowSeats = item.openSeats <= 3;

              return (
                <div
                  key={item.id}
                  className="bg-neutral-900 border border-white/10 hover:border-[#E1A140]/40 p-6 rounded-none relative overflow-hidden transition-all duration-300"
                  id={`schedule-card-${item.id}`}
                >
                  {/* Subtle City Icon Indicator */}
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-neutral-950 px-2.5 py-1 rounded-none border border-white/10 text-[9px] font-mono uppercase tracking-widest text-[#E1A140]">
                    <MapPin size={10} />
                    <span>{item.city}</span>
                  </div>

                  <p className="text-xs font-bold text-[#E1A140] font-mono tracking-wide mb-1 flex items-center gap-1.5">
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </p>
                  
                  <h3 className="text-lg font-bold text-white uppercase font-display mb-3 max-w-[85%]">
                    {item.module}
                  </h3>

                  <div className="space-y-2.5 text-xs text-neutral-400 mb-6 max-w-lg">
                    <div className="flex gap-2 items-start">
                      <Compass size={14} className="text-[#E1A140]/60 shrink-0 mt-0.5" />
                      <span>{item.venue}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Clock size={14} className="text-[#E1A140]/60 shrink-0" />
                      <span className="font-mono">{item.timeframe}</span>
                    </div>
                  </div>

                  {/* Dynamic Seats remain metric */}
                  <div className="bg-neutral-950 p-4 rounded-none border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500">
                        Remaining Seat Allocation
                      </span>
                      <span className={`text-xs font-extrabold flex items-center gap-1 ${isLowSeats ? "text-rose-500" : "text-[#E1A140]"}`}>
                        {isLowSeats && <AlertCircle size={13} className="animate-bounce" />}
                        <span>{item.openSeats} of {item.totalSeats} Slots Open</span>
                      </span>
                    </div>
                    
                    {/* Progress slider bar */}
                    <div className="h-1.5 w-full bg-neutral-900 rounded-none overflow-hidden">
                      <div
                        className={`h-full rounded-none transition-all duration-500 ${
                          isLowSeats ? "bg-rose-500" : "bg-[#E1A140]"
                        }`}
                        style={{ width: `${seatPercent}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center mt-3 text-[10px] text-neutral-550">
                      <span>Strict limited class ratios</span>
                      <span className="font-mono text-[9px] uppercase tracking-widest">Immediate book essential</span>
                    </div>
                  </div>

                  {/* Immediate registration redirection */}
                  <div className="mt-4 flex justify-end">
                    <a
                      href="#registration"
                      onClick={() => {
                        const element = document.getElementById("registration-section");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-xs font-bold text-[#E1A140] hover:text-amber-400 flex items-center gap-1.5 group cursor-pointer lowercase italic"
                    >
                      <span>Pre-register for slot</span>
                      <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              );
            })}

            {/* Simulated Clinical Trust Widget */}
            <div className="bg-neutral-900 border border-white/10 p-5 rounded-none flex items-start gap-4">
              <HeartHandshake className="text-[#E1A140] shrink-0 mt-0.5" size={24} />
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase text-neutral-200 tracking-wider">
                  Partner Clinic Standards
                </h4>
                <p className="text-xs text-neutral-450 leading-relaxed font-light">
                  All clinical venues are certified under provincial health regulatory authorities (such as SHCC and IHRA), maintaining surgical sterilization, complete trauma safety packs, and professional lighting configurations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Daily Workshop Timeline Breakdown */}
          <div className="lg:col-span-6 bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-none text-left" id="timeline-column">
            <h3 className="text-sm font-extrabold text-[#E1A140] uppercase font-mono tracking-widest mb-6">
              Daily Clinical Roadmap Schedule
            </h3>

            {/* Stepped Timeline */}
            <div className="space-y-6 relative border-l border-white/5 pl-5 ml-2">
              {timelineData.map((step, i) => (
                <div key={i} className="relative group/timeline font-sans">
                  {/* Outer circle dot */}
                  <div className="absolute -left-[26px] top-1 h-3 w-3 rounded-full bg-neutral-950 border-2 border-[#E1A140] group-hover/timeline:scale-125 transition-transform"></div>
                  
                  <div className="space-y-1 font-sans">
                    <span className="text-[10px] font-mono font-medium text-[#E1A140] bg-neutral-955 px-2 py-0.5 rounded-none border border-white/10">
                      {step.time}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-100 uppercase tracking-tight font-display mt-2">
                      {step.event}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light mt-1">
                      {step.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
