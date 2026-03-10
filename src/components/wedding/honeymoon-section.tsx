"use client"

import { useState } from "react"
import { Plane, CreditCard, Copy, Check } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { motion, AnimatePresence } from "framer-motion"

export function HoneymoonSection() {
  const [showDetails, setShowDetails] = useState(false)
  const [copied, setCopied] = useState(false)

  const alias = "valentina.santiago.boda"
  const cbu = "0000003100000000000000"

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatedSection className="flex flex-col items-center gap-10 px-6 py-24">
      <div className="flex flex-col items-center gap-3">
        <Plane className="h-6 w-6 text-gold/60" strokeWidth={1} />
        <p className="font-sans text-xs font-extralight uppercase tracking-[0.4em] text-gold-dark">
          Luna de Miel
        </p>
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-gold/20" />
          <div className="h-1 w-1 rotate-45 border border-gold/30" />
          <div className="h-px w-8 bg-gold/20" />
        </div>
      </div>

      <div className="flex w-full max-w-lg flex-col items-center gap-8 border border-gold/10 bg-card/50 px-8 py-12 md:px-14">
        <h3 className="text-center font-serif text-3xl font-light tracking-wide text-gold md:text-4xl">
          Nuestro destino es el mundo
        </h3>

        <p className="text-center font-sans text-sm font-extralight leading-relaxed text-champagne/60">
          Si queres hacernos un regalo, tu contribucion nos ayudaria a cumplir
          el sueno de nuestra luna de miel. Tu presencia es nuestro mejor regalo.
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="group flex items-center gap-2.5 border border-gold/20 px-8 py-3 transition-all duration-500 hover:border-gold/50 hover:bg-gold/5"
        >
          <CreditCard className="h-3.5 w-3.5 text-gold/60 transition-colors group-hover:text-gold" />
          <span className="font-sans text-[10px] font-light uppercase tracking-[0.25em] text-gold/70 transition-colors group-hover:text-gold">
            {showDetails ? "Ocultar Datos" : "Ver CBU / Alias"}
          </span>
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="flex w-full flex-col gap-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2 border border-gold/10 bg-secondary/30 px-5 py-4">
                <span className="font-sans text-[9px] font-light uppercase tracking-[0.25em] text-gold-dark">
                  Alias
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-light tracking-wider text-champagne">
                    {alias}
                  </span>
                  <button
                    onClick={() => handleCopy(alias)}
                    className="text-gold/40 transition-colors hover:text-gold"
                    aria-label="Copiar alias"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-green-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 border border-gold/10 bg-secondary/30 px-5 py-4">
                <span className="font-sans text-[9px] font-light uppercase tracking-[0.25em] text-gold-dark">
                  CBU
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-light tracking-wider text-champagne">
                    {cbu}
                  </span>
                  <button
                    onClick={() => handleCopy(cbu)}
                    className="text-gold/40 transition-colors hover:text-gold"
                    aria-label="Copiar CBU"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-green-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <p className="text-center font-sans text-[10px] font-light tracking-wider text-muted-foreground">
                Titular: Valentina & Santiago
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}
