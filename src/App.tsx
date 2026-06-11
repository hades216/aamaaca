import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { Schedule } from "./components/Schedule";
import { RegistrationForm } from "./components/RegistrationForm";
import { Faculty } from "./components/Faculty";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [selectedCourseFilter, setSelectedCourseFilter] = useState<string | null>(null);
  const [prefilledCourseName, setPrefilledCourseName] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark"; // Default to premium dark mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    
    // Smooth scrolling alignment
    const matches: Record<string, string> = {
      hero: "hero",
      about: "about-section",
      courses: "courses-section",
      faculty: "faculty-section",
      registration: "registration-section",
      contact: "contact"
    };

    const targetId = matches[sectionId];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleCourseFilterSelect = (courseId: string | null) => {
    setSelectedCourseFilter(courseId);
  };

  const handleApplyForCourse = (courseName: string) => {
    setPrefilledCourseName(courseName);
    setCurrentSection("registration");
  };

  const handleRegistrationSuccess = () => {
    // Scroll smoothly to receipt anchor representation
    setTimeout(() => {
      const receipt = document.getElementById("registration-success-receipt");
      if (receipt) {
        receipt.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Intersection observer to track active screen section for Navbar highlighted triggers
  useEffect(() => {
    const sections = [
      { id: "hero", elementId: "hero" },
      { id: "about", elementId: "about-section" },
      { id: "courses", elementId: "courses-section" },
      { id: "faculty", elementId: "faculty-section" },
      { id: "registration", elementId: "registration-section" },
      { id: "contact", elementId: "contact" }
    ];

    const observerOption = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Focus center viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedSection = sections.find((s) => s.elementId === entry.target.id);
          if (matchedSection) {
            setCurrentSection(matchedSection.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOption);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.elementId);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.elementId);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
      
      {/* 1. STRUCTURAL FIXED HEADER NAVIGATION PANEL */}
      <Header 
        onNavigate={handleNavigate} 
        onSelectCourseFilter={handleCourseFilterSelect}
        currentSection={currentSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* 2. VALUE PROPOSITIONS & HERO (SECTION 1) */}
      <Hero 
        onRegisterClick={() => handleNavigate("registration")}
        onExploreCourses={() => handleNavigate("courses")}
        onSelectCourseFilter={handleCourseFilterSelect}
      />

      {/* 3. ADVERTISING SOCIAL HIGHLIGHTS STORIES ROW */}
      <Highlights />

      {/* 4. ABOUT AAMA BENTO COMPLIANCE PANEL */}
      <About />

      {/* 5. COURSE DESCRIPTOR WORKSHOPS (SECTION 2) */}
      <Courses 
        selectedFilter={selectedCourseFilter}
        onSelectFilter={handleCourseFilterSelect}
        onApplyForCourse={handleApplyForCourse}
      />

      {/* 6. WEEKDAY TIMETABLE & REGIONAL STATIONS (SECTION 3) */}
      <Schedule />

      {/* 7. MEDICAL PHYSICIAN VERIFICATION & INTAKES (SECTION 4) */}
      <RegistrationForm 
        prefilledCourse={prefilledCourseName}
        onSuccess={handleRegistrationSuccess}
      />

      {/* 8. EXPERT FACULTY PROFILES PANEL */}
      <Faculty />

      {/* 9. CONTACT HOTLINES & STYLISED VECTOR MAPS (SECTION 5) */}
      <Footer />

    </div>
  );
}
