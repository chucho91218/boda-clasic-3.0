"use client"

import { useEffect, useState } from "react"
import { AnimatedSection } from "./animated-section"

const WEDDING_DATE = new Date("2026-11-15T17:00:00-03:00")

interface TimeUnit {
  value: number
  label: string
}

function CountdownUnit({ value, label }: TimeUnit) {
  const formatted = String(value).padStart(2, "0")
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded border border-gold/10 bg-secondary/50" />
        <span className="relative px-4 py-3 font-serif text-4xl font-light tracking-widest text-gold md:px-6 md:py-4 md:text-6xl lg:text-7xl">
          {formatted}
        </span>
      </div>
      <span className="font-sans text-[9px] font-light uppercase tracking-[0.35em] text-gold-dark">
        {label}
      </span>
    </div>
  )
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: "Dias" },
    { value: 0, label: "Horas" },
    { value: 0, label: "Min" },
    { value: 0, label: "Seg" },
  ])

  useEffect(() => {
    function calculate() {
      const now = new Date()
      const diff = WEDDING_DATE.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft([
          { value: 0, label: "Dias" },
          { value: 0, label: "Horas" },
          { value: 0, label: "Min" },
          { value: 0, label: "Seg" },
        ])
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTimeLeft([
        { value: days, label: "Dias" },
        { value: hours, label: "Horas" },
        { value: minutes, label: "Min" },
        { value: seconds, label: "Seg" },
      ])
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatedSection className="flex flex-col items-center gap-10 px-6 py-24">
      <div className="flex flex-col items-center gap-3">
        <p className="font-sans text-xs font-extralight uppercase tracking-[0.4em] text-gold-dark">
          Faltan
        </p>
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-gold/20" />
          <div className="h-1 w-1 rotate-45 border border-gold/30" />
          <div className="h-px w-8 bg-gold/20" />
        </div>
      </div>

      <div className="flex items-start gap-4 md:gap-8">
        {timeLeft.map((unit, index) => (
          <div key={unit.label} className="flex items-start gap-4 md:gap-8">
            <CountdownUnit value={unit.value} label={unit.label} />
            {index < timeLeft.length - 1 && (
              <span className="mt-4 font-serif text-2xl font-light text-gold/30 md:mt-5 md:text-4xl">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
