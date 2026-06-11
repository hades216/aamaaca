import React, { useState, useEffect } from "react";
import { ShieldCheck, UploadCloud, CheckCircle, FileText, Download, Award, AlertTriangle, ArrowRight, RefreshCw } from "lucide-react";

interface Application {
  refId: string;
  doctorName: string;
  pmncLicense: string;
  degree: string;
  courseSelected: string;
  citySelected: string;
  email: string;
  phone: string;
  submittedAt: string;
}

interface RegistrationFormProps {
  prefilledCourse: string;
  onSuccess: () => void;
}

export function RegistrationForm({ prefilledCourse, onSuccess }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    doctorName: "",
    pmncLicense: "",
    degree: "MBBS",
    courseSelected: "",
    citySelected: "karachi",
    email: "",
    phone: "",
    consent: false
  });

  const [uploadedFile, setUploadedFile] = useState<File | { name: string; size: string } | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [submittedApplication, setSubmittedApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(false);

  // Sync prefilled course selection from Course buttons click
  useEffect(() => {
    if (prefilledCourse) {
      setFormData((prev) => ({ ...prev, courseSelected: prefilledCourse }));
    }
  }, [prefilledCourse]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.doctorName || !formData.pmncLicense || !formData.email || !formData.phone || !formData.consent) {
      alert("Please ensure all clinical registration fields are filled completely.");
      return;
    }

    setLoading(true);

    // Simulate clinical licensing background evaluation
    setTimeout(() => {
      const randHex = Math.floor(100000 + Math.random() * 900000).toString(16).toUpperCase();
      const refId = `AAMA-2026-${randHex}`;
      
      const newApp: Application = {
        refId,
        doctorName: formData.doctorName.startsWith("Dr.") ? formData.doctorName : `Dr. ${formData.doctorName}`,
        pmncLicense: formData.pmncLicense,
        degree: formData.degree,
        courseSelected: formData.courseSelected || "Botox Masterclass (Basic & Advanced)",
        citySelected: formData.citySelected,
        email: formData.email,
        phone: formData.phone,
        submittedAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })
      };

      // Store in standard localStorage registry
      const currentApps = JSON.parse(localStorage.getItem("aama_applications") || "[]");
      currentApps.push(newApp);
      localStorage.setItem("aama_applications", JSON.stringify(currentApps));

      setSubmittedApplication(newApp);
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      doctorName: "",
      pmncLicense: "",
      degree: "MBBS",
      courseSelected: "",
      citySelected: "karachi",
      email: "",
      phone: "",
      consent: false
    });
    setUploadedFile(null);
    setSubmittedApplication(null);
  };

  return (
    <section className="bg-neutral-950 py-20 px-4 md:px-8 border-b border-white/10 scroll-mt-20" id="registration-section">
      <div className="max-w-4xl mx-auto">
        
        {/* Title details */}
        <div className="text-center max-w-2xl mx-auto mb-12 font-sans">
          <ShieldCheck size={40} className="text-[#E1A140] mx-auto mb-4" />
          <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E1A140] mb-2 font-mono">
            Registrar Admission Portal
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase font-display">
            Eligibility & <span className="text-[#E1A140] font-serif lowercase italic">Enrollment</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#E1A140] mx-auto mt-4 mb-6"></div>
          <p className="text-sm text-neutral-400 font-sans font-light">
            Due to strict hands-on safety standards and legal guidelines in Pakistan, candidates must provide 
            valid medical license registry details to gain clinic entry permissions.
          </p>
        </div>

        {/* --- DYNAMIC TRANSITION SCREEN ONLY --- */}
        {submittedApplication ? (
          <div className="bg-neutral-900 border border-[#E1A140]/30 rounded-none p-6 md:p-8 text-left max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 duration-350" id="registration-success-receipt">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
              <div className="h-12 w-12 rounded-none bg-[#E1A140]/10 flex items-center justify-center text-[#E1A140] border border-[#E1A140]/20 shrink-0">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-100 font-display uppercase tracking-tight">
                  Pre-Enrollment Verification Initiated
                </h3>
                <p className="text-xs text-neutral-500 font-sans">
                  Ref Key: <span className="text-[#E1A140] font-mono font-bold">{submittedApplication.refId}</span>
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-neutral-300 font-sans">
              <p className="leading-relaxed font-light">
                Thank you, <strong className="text-white font-semibold">{submittedApplication.doctorName}</strong>. 
                Our academic coordination desk has recorded your medical credential credentials. We are validating your 
                PMDC/BMDC Medical License <span className="text-[#E1A140] font-mono">({submittedApplication.pmncLicense})</span> 
                with the national registries.
              </p>

              {/* Informative Grid Details Receipt */}
              <div className="bg-neutral-950 p-4 rounded-none border border-white/10 space-y-2 font-mono">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Course Selected:</span>
                  <span className="text-white font-medium text-right">{submittedApplication.courseSelected}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Workshop Location:</span>
                  <span className="text-[#E1A140] font-medium capitalize">{submittedApplication.citySelected} Hub</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Candidate Degree:</span>
                  <span className="text-white font-mono">{submittedApplication.degree}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Submission Timestamp:</span>
                  <span className="text-neutral-400">{submittedApplication.submittedAt}</span>
                </div>
              </div>

              {/* Technical Warning block */}
              <div className="bg-[#E1A140]/5 border border-[#E1A140]/15 p-4 rounded-none flex gap-3 text-xs text-neutral-450">
                <AlertTriangle size={18} className="text-[#E1A140] shrink-0" />
                <div className="space-y-1">
                  <p className="font-semibold text-neutral-200">What happens next?</p>
                  <p className="font-light leading-relaxed">
                    1. A confirmation SMS and secure onboarding email has been sent to <strong className="text-neutral-200">{submittedApplication.phone}</strong> and <strong className="text-neutral-200">{submittedApplication.email}</strong>. <br />
                    2. Once licensing verification concludes (typically 12-24 hours), our regional coordinator will call you to conduct a short credential interview and allocate your supervised live-model seat.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons on completion */}
            <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4 font-sans">
              <button
                onClick={() => window.print()}
                className="px-5 py-3 text-xs font-bold tracking-widest text-[#E1A140] bg-neutral-950 border border-white/10 hover:bg-[#E1A140]/5 rounded-none uppercase flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <Download size={14} />
                <span>Save PDF Receipt</span>
              </button>
              
              <button
                onClick={handleReset}
                className="px-5 py-3 text-xs font-bold tracking-widest text-black bg-[#E1A140] hover:bg-neutral-100 rounded-none uppercase flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer duration-300"
              >
                <RefreshCw size={14} />
                <span>Submit Another Admission</span>
              </button>
            </div>
          </div>
        ) : (
          
          /* --- ONLINE REGISTRATION FORM GRID --- */
          <form 
            onSubmit={handleSubmit} 
            className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-none text-left shadow-2xl relative"
            id="enrollment-submission-form"
          >
            {/* Form Section heading */}
            <div className="mb-6 pb-4 border-b border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E1A140]">
                Phase 1 // Credential Ingestion
              </span>
              <h3 className="text-lg font-bold text-neutral-100 font-display uppercase tracking-tight mt-1">
                Candidate Licensing Registration Form
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              
              {/* Doctor Name Field */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-mono">
                  Full Doctor Name (as on Degree) <span className="text-[#E1A140]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Shumaila Qasim"
                  value={formData.doctorName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, doctorName: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/10 focus:border-[#E1A140] rounded-none px-4 py-3 text-xs text-neutral-200 outline-none transition-colors"
                />
              </div>

              {/* Council License No. PMDC */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-mono">
                  PMDC / PM&DC License Number <span className="text-[#E1A140]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 84092-P or 1042-D"
                  value={formData.pmncLicense}
                  onChange={(e) => setFormData((prev) => ({ ...prev, pmncLicense: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/10 focus:border-[#E1A140] rounded-none px-4 py-3 text-xs text-neutral-200 outline-none transition-colors"
                />
              </div>

              {/* Primary Professional Degree Dropdown */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-mono">
                  Registered Medical Qualification <span className="text-[#E1A140]">*</span>
                </label>
                <select
                  value={formData.degree}
                  onChange={(e) => setFormData((prev) => ({ ...prev, degree: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/10 focus:border-[#E1A140] rounded-none px-4 py-3 text-xs text-neutral-200 outline-none transition-colors select"
                >
                  <option value="MBBS">MBBS (Doctor of Medicine)</option>
                  <option value="BDS">BDS (Doctor of Dental Surgery)</option>
                  <option value="FCPS">FCPS / MD Specialty Boards</option>
                  <option value="Diploma">Postgrad Diploma in Dermatology</option>
                  <option value="International">International Equivalent MD</option>
                </select>
              </div>

              {/* Target Course Selected Dropdown */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-mono">
                  Target Course Module <span className="text-[#E1A140]">*</span>
                </label>
                <select
                  value={formData.courseSelected}
                  onChange={(e) => setFormData((prev) => ({ ...prev, courseSelected: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/10 focus:border-[#E1A140] rounded-none px-4 py-3 text-xs text-neutral-200 outline-none transition-colors select"
                >
                  <option value="">-- Choose Workshop Module --</option>
                  <option value="Masterclass in Botox (Basic to Advanced)">Botox Masterclass (Basic & Advanced)</option>
                  <option value="Masterclass in Basic & Advanced Dermal Fillers">Aesthetic Dermal Fillers</option>
                  <option value="Clinical Lasers & Energy-Based Devices (EBDs)">Medical Lasers & Energy Devices</option>
                  <option value="Liquid Rhinoplasty & Profiloplasty">Liquid Rhinoplasty & Profiloplasty</option>
                </select>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-mono">
                  Official Email Address <span className="text-[#E1A140]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. shumaila@doctor.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/10 focus:border-[#E1A140] rounded-none px-4 py-3 text-xs text-neutral-200 outline-none transition-colors"
                />
              </div>

              {/* Contact Phone (whatsapp preferred because AAMA coordinator contacts over WhatsApp) */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-mono">
                  Phone / WhatsApp Contact <span className="text-[#E1A140]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-neutral-950 border border-white/10 focus:border-[#E1A140] rounded-none px-4 py-3 text-xs text-neutral-200 outline-none transition-colors"
                />
              </div>

              {/* Preferred Assembly Hub */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-mono mb-2">
                  Preferred Training Assembly City <span className="text-[#E1A140]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`border rounded-none p-4 flex items-center justify-between cursor-pointer transition-all ${
                    formData.citySelected === "karachi"
                      ? "border-[#E1A140] bg-[#E1A140]/5 text-white"
                      : "border-white/10 hover:bg-neutral-950 text-neutral-400"
                  }`}>
                    <div>
                      <p className="text-xs font-semibold uppercase font-display">Karachi Hub</p>
                      <p className="text-[10px] text-neutral-500 font-light mt-0.5">Clifton Clinic Facility</p>
                    </div>
                    <input
                      type="radio"
                      name="city"
                      checked={formData.citySelected === "karachi"}
                      onChange={() => setFormData((prev) => ({ ...prev, citySelected: "karachi" }))}
                      className="accent-[#E1A140] h-4 w-4"
                    />
                  </label>

                  <label className={`border rounded-none p-4 flex items-center justify-between cursor-pointer transition-all ${
                    formData.citySelected === "islamabad"
                      ? "border-[#E1A140] bg-[#E1A140]/5 text-white"
                      : "border-white/10 hover:bg-neutral-950 text-neutral-400"
                  }`}>
                    <div>
                      <p className="text-xs font-semibold uppercase font-display">Islamabad Center</p>
                      <p className="text-[10px] text-neutral-500 font-light mt-0.5">G-8 Executive Complex</p>
                    </div>
                    <input
                      type="radio"
                      name="city"
                      checked={formData.citySelected === "islamabad"}
                      onChange={() => setFormData((prev) => ({ ...prev, citySelected: "islamabad" }))}
                      className="accent-[#E1A140] h-4 w-4"
                    />
                  </label>
                </div>
              </div>

              {/* High-Fidelity License Drag and Drop Field */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-mono">
                  Upload PMDC License copy / Aesthetic Diploma (Optional Pre-Check)
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border border-dashed rounded-none p-6 text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                    dragActive 
                      ? "border-[#E1A140] bg-[#E1A140]/5" 
                      : "border-white/10 hover:border-neutral-700 bg-neutral-950"
                  }`}
                >
                  <input
                    type="file"
                    id="license-file-input"
                    multiple={false}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,.pdf"
                  />
                  <label htmlFor="license-file-input" className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
                    <UploadCloud size={28} className="text-neutral-500 mb-2 group-hover:text-[#E1A140] transition-colors" />
                    
                    {uploadedFile ? (
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-[#E1A140] flex items-center justify-center gap-1">
                          <FileText size={12} />
                          <span>{uploadedFile.name}</span>
                        </p>
                        <p className="text-[10px] text-neutral-500 font-mono">Size: {uploadedFile.size}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xs font-semibold text-neutral-300 font-sans">
                          Drag and drop license copy, or <span className="text-[#E1A140]">browse file</span>
                        </p>
                        <p className="text-[10px] text-neutral-500 mt-1 font-sans">
                          Supported formats: JPEG, PNG, PDF (Max 8MB)
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Authority Credential Certifying Consent Checkbox */}
              <div className="md:col-span-2 flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  required
                  id="consent-check"
                  checked={formData.consent}
                  onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
                  className="accent-[#E1A140] h-4 w-4 mt-0.5 shadow-sm rounded-none cursor-pointer"
                />
                <label htmlFor="consent-check" className="text-[11px] text-neutral-400 leading-tight font-light cursor-pointer select-none font-sans">
                  I hereby certify that I am a registered medical/dental practitioner currently registered with the Medical Commission of Pakistan. I understand that falsification of medical credentials will lead to immediate cancellation of admission without recourse.
                </label>
              </div>

            </div>

            {/* Submission triggers */}
            <div className="flex justify-end pt-4 border-t border-white/5">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 text-xs font-extrabold tracking-widest text-[#E1A140] border border-[#E1A140] hover:bg-[#E1A140] hover:text-black rounded-none shadow-none transition-all duration-300 text-center uppercase flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-[#E1A140]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M 4 12 a 8 8 0 0 1 8 -8 V 0 C 5.373 0 0 5.373 0 12 h 4 zm 2 5.291 A 7.962 7.962 0 0 1 4 12 H 0 c 0 3.042 1.135 5.824 3 7.938 l 3 -2.647 z"></path>
                    </svg>
                    <span>Authenticating Registry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Pre-Registration Verify</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
