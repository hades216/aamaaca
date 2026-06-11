import React, { useState } from "react";
import { AAMALogo } from "./AAMALogo";
import { ChevronDown, ShieldAlert, Award, Globe, Phone, FileText, Menu, X, Sun, Moon } from "lucide-react";

interface HeaderProps {
  onNavigate: (section: string) => void;
  onSelectCourseFilter: (course: string | null) => void;
  currentSection: string;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Header({ onNavigate, onSelectCourseFilter, currentSection, theme, onToggleTheme }: HeaderProps) {
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const coursesList = [
    { name: "Botox Masterclass", id: "botox" },
    { name: "Aesthetic Fillers", id: "fillers" },
    { name: "Medical Lasers & Energy Devices", id: "lasers" },
    { name: "Liquid Rhinoplasty & Profiloplasty", id: "rhinoplasty" }
  ];

  const handleDropdownItemClick = (courseId: string) => {
    onSelectCourseFilter(courseId);
    onNavigate("courses");
    setCoursesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40" id="main-navigation-header">
      {/* 1. PROFESSIONAL AUTHORITY TOP BAR */}
      <div className="w-full bg-[#E1A140] text-black text-[10px] font-bold tracking-[0.2em] py-1.5 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center uppercase gap-1.5 transition-all text-center" id="top-authority-bar">
        <span>Dedicated strictly to Registered Medical Professionals Only</span>
        <span className="flex items-center gap-1.5">
          <Award size={12} className="shrink-0" />
          <span>PMC & ISO 9001:2015 Certified Academy</span>
        </span>
      </div>

      {/* 2. GLASSY FLOATING NAVBAR CONTROLLER */}
      <div className="bg-neutral-950/90 backdrop-blur-xl border-b border-white/10 px-4 md:px-8 py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LEFT SIDE: LOGO AND TITLES */}
          <button 
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-1 focus:ring-amber-500/30 rounded-lg p-1 group"
            id="logo-navigation-trigger"
          >
            <AAMALogo size={52} className="transform group-hover:scale-105 transition-transform duration-300 pointer-events-none" />
            <div>
              <h1 className="text-sm font-extrabold tracking-[0.2em] text-white uppercase font-display m-0 leading-tight">
                AAMA <span className="text-[#E1A140]">Academy</span>
              </h1>
              <p className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase font-sans font-medium m-0">
                Academy of Advanced Medical Aesthetics
              </p>
            </div>
          </button>

          {/* DESKTOP MENU ITEMS */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest font-semibold">
            <button
              onClick={() => handleNavClick("hero")}
              className={`hover:text-[#E1A140] transition-colors py-2 focus:outline-none cursor-pointer ${currentSection === "hero" ? "text-[#E1A140]" : "text-neutral-300"}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`hover:text-[#E1A140] transition-colors py-2 focus:outline-none cursor-pointer ${currentSection === "about" ? "text-[#E1A140]" : "text-neutral-300"}`}
            >
              About AAMA
            </button>

            {/* Courses Dropdown trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 py-2 hover:text-[#E1A140] transition-colors focus:outline-none cursor-pointer ${currentSection === "courses" ? "text-[#E1A140]" : "text-neutral-300"}`}
                onClick={() => {
                  onSelectCourseFilter(null);
                  handleNavClick("courses");
                }}
              >
                <span>Courses</span>
                <ChevronDown size={14} className={`transform transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Absolute Dropdown */}
              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-neutral-950 border border-white/10 rounded-none shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-neutral-500 font-bold border-b border-white/5 mb-1.5">
                    Course Categories
                  </div>
                  {coursesList.map((course) => (
                    <button
                      key={course.id}
                      onClick={() => handleDropdownItemClick(course.id)}
                      className="w-full text-left px-3 py-2 text-[10px] uppercase tracking-wider rounded-none text-neutral-350 hover:bg-amber-500/10 hover:text-[#E1A140] transition-all font-medium flex items-center justify-between group cursor-pointer"
                    >
                      <span>{course.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E1A140] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </button>
                  ))}
                  <div className="mt-1.5 pt-1.5 border-t border-white/5">
                    <button
                      onClick={() => {
                        onSelectCourseFilter(null);
                        handleNavClick("courses");
                      }}
                      className="w-full text-center py-2 text-[10px] uppercase tracking-widest font-extrabold text-[#E1A140] hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      View All 4 Modules
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick("faculty")}
              className={`hover:text-[#E1A140] transition-colors py-2 focus:outline-none cursor-pointer ${currentSection === "faculty" ? "text-[#E1A140]" : "text-neutral-300"}`}
            >
              Faculty
            </button>
            <button
              onClick={() => handleNavClick("registration")}
              className={`hover:text-[#E1A140] transition-colors py-2 focus:outline-none cursor-pointer ${currentSection === "registration" ? "text-[#E1A140]" : "text-neutral-300"}`}
            >
              Registration
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`hover:text-[#E1A140] transition-colors py-2 focus:outline-none cursor-pointer ${currentSection === "contact" ? "text-[#E1A140]" : "text-neutral-300"}`}
            >
              Contact Us
            </button>
          </nav>

          {/* RIGHT SIDE ACTIONS: APPLY CTA BUTTON */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onToggleTheme}
              className="border border-white/10 p-2.5 text-neutral-300 hover:text-[#E1A140] hover:bg-[#E1A140]/5 transition-colors rounded-none focus:outline-none cursor-pointer flex items-center justify-center"
              aria-label="Toggle light and dark theme mode"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            </button>
            <button 
              onClick={() => handleNavClick("registration")}
              className="border border-[#E1A140] px-5 py-2.5 text-[#E1A140] hover:bg-[#E1A140] hover:text-black transition-colors rounded-none font-bold uppercase tracking-widest text-[11px] cursor-pointer flex items-center gap-2"
            >
              <FileText size={13} />
              <span>Apply Online</span>
            </button>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="border border-white/10 p-2 text-neutral-300 hover:text-[#E1A140] transition-colors rounded-none focus:outline-none cursor-pointer flex items-center justify-center mr-1"
              aria-label="Toggle light and dark theme mode"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-400 hover:text-white p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE SLIDEOUT MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-neutral-950 border-b border-neutral-900 p-4 shadow-2xl animate-in fade-in slide-in-from-top duration-300 relative z-40">
          <div className="flex flex-col gap-3 py-2 text-sm font-medium text-neutral-300">
            <button
              onClick={() => handleNavClick("hero")}
              className="text-left py-2 border-b border-neutral-900"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="text-left py-2 border-b border-neutral-900"
            >
              About AAMA
            </button>

            {/* Courses list inline for mobile */}
            <div className="flex flex-col pl-3 pt-1 border-l border-amber-500/30 gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">
                Course Training Modules
              </span>
              {coursesList.map((course) => (
                <button
                  key={course.id}
                  onClick={() => handleDropdownItemClick(course.id)}
                  className="text-left py-1 text-xs text-neutral-400 hover:text-amber-400 transition-colors"
                >
                  {course.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick("faculty")}
              className="text-left py-2 border-b border-neutral-900"
            >
              Faculty & Experts
            </button>
            <button
              onClick={() => handleNavClick("registration")}
              className="text-left py-2 border-b border-neutral-900"
            >
              Eligibility & Registration
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-left py-2"
            >
              Contact Us
            </button>

            <button
              onClick={() => handleNavClick("registration")}
              className="mt-2 w-full text-center py-3 text-xs uppercase font-extrabold tracking-widest text-black bg-gradient-to-r from-amber-400 to-amber-600 rounded-md"
            >
              Register Now (Strictly MD/MBBS/BDS)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
