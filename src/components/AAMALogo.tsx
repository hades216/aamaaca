import React from "react";
import { motion } from "motion/react";
// @ts-ignore
import logoImg from "../assets/images/aama_logo_crest_1780602662962.png";

interface AAMALogoProps {
  className?: string;
  size?: number;
}

export function AAMALogo({ className = "", size = 64 }: AAMALogoProps) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      id="aama-glowing-logo-container"
    >
      {/* 1. ATMOSPHERIC AMBIENT GOLD GLOWING BACKDROP (PULSING INTERACTIVELY) */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E1A140] to-amber-600 opacity-40 blur-xl pointer-events-none"
        style={{ scale: 1.15 }}
        animate={{
          scale: [1.15, 1.3, 1.15],
          opacity: [0.35, 0.65, 0.35],
          filter: "drop-shadow(0px 0px 20px rgba(225, 161, 64, 0.6)) blur(16px)"
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        id="aama-ambient-glow"
      />

      {/* 2. DUMP SHADOW UNDERLAY */}
      <div className="absolute inset-0 rounded-full bg-black shadow-2xl border border-white/5 z-0"></div>

      {/* 3. MAIN INTERACTIVE IMAGE CARRIER (TAP & HOVER TARGET) */}
      <motion.div
        className="relative z-10 w-full h-full rounded-full overflow-hidden flex items-center justify-center cursor-pointer border border-[#E1A140]/35 bg-[#0D0B0A]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{
          scale: 1.06,
          rotate: [0, 2, -1, 0],
          borderColor: "rgba(225, 161, 64, 0.8)",
          boxShadow: "0 0 30px rgba(225, 161, 64, 0.65)",
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        id="aama-interactable-logo"
      >
        <img
          src={logoImg}
          alt="Academy of Advanced Medical Aesthetics Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover select-none pointer-events-none scale-[1.02]"
        />

        {/* Cinematic light sweep sheen effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-[200%]"
          animate={{
            x: ["-100%", "250%"]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5.5,
            ease: "easeInOut",
            delay: 1
          }}
          id="aama-logo-shine-sweep"
        />
      </motion.div>
    </div>
  );
}
