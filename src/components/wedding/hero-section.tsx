"use client"

import { motion } from "framer-motion"

function RingsIcon() {
  return (
    <svg
      width="64"
      height="40"
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gold"
      aria-hidden="true"
    >
      <circle cx="22" cy="20" r="14" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="42" cy="20" r="14" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="h-px w-16 bg-gold/30 md:w-24" />
      <div className="h-1.5 w-1.5 rotate-45 border border-gold/50" />
      <div className="h-px w-16 bg-gold/30 md:w-24" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center gap-8 text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="font-sans text-xs font-extralight uppercase tracking-[0.4em] text-gold-dark"
        >
          Nos casamos
        </motion.p>

        <RingsIcon />

        <div className="flex flex-col items-center gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl font-light tracking-wide text-gold md:text-7xl lg:text-8xl"
          >
            <span className="text-balance">Valentina</span>
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-serif text-2xl font-light italic text-gold/60 md:text-3xl"
          >
            &
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-serif text-5xl font-light tracking-wide text-gold md:text-7xl lg:text-8xl"
          >
            <span className="text-balance">Santiago</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Divider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-sans text-sm font-extralight uppercase tracking-[0.3em] text-gold-dark"
        >
          15 de Noviembre, 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="font-sans text-xs font-thin tracking-widest text-muted-foreground"
        >
       
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-dark/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gold/20"
        />
      </motion.div>
    </section>
  )
}
