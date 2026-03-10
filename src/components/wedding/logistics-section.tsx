"use client"

import { Church, PartyPopper, CalendarPlus, MapPin } from "lucide-react"
import { AnimatedSection } from "./animated-section"

interface EventBlockProps {
  icon: React.ReactNode
  title: string
  date: string
  time: string
  venue: string
  address: string
  calendarUrl?: string
  mapsUrl?: string
}

function EventBlock({ icon, title, date, time, venue, address, calendarUrl, mapsUrl }: EventBlockProps) {
  return (
    <div className="flex flex-1 flex-col items-center gap-6 border border-gold/10 bg-card/50 px-6 py-10 md:px-10 md:py-14">
      <div className="text-gold/70">{icon}</div>

      <h3 className="font-serif text-2xl font-light tracking-widest text-gold uppercase md:text-3xl">
        {title}
      </h3>

      <div className="h-px w-12 bg-gold/20" />

      <div className="flex flex-col items-center gap-1.5">
        <p className="font-sans text-sm font-light tracking-wider text-champagne/80">{date}</p>
        <p className="font-sans text-xs font-extralight tracking-widest text-gold-dark">{time}</p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="font-serif text-lg font-light text-gold/90">{venue}</p>
        <p className="text-center font-sans text-xs font-extralight leading-relaxed text-muted-foreground">
          {address}
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row">
        <a
          href={calendarUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 border border-gold/20 px-5 py-2.5 transition-all duration-500 hover:border-gold/50 hover:bg-gold/5"
        >
          <CalendarPlus className="h-3.5 w-3.5 text-gold/60 transition-colors group-hover:text-gold" />
          <span className="font-sans text-[10px] font-light uppercase tracking-[0.25em] text-gold/70 transition-colors group-hover:text-gold">
            Agendar
          </span>
        </a>
        <a
          href={mapsUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 border border-gold/20 px-5 py-2.5 transition-all duration-500 hover:border-gold/50 hover:bg-gold/5"
        >
          <MapPin className="h-3.5 w-3.5 text-gold/60 transition-colors group-hover:text-gold" />
          <span className="font-sans text-[10px] font-light uppercase tracking-[0.25em] text-gold/70 transition-colors group-hover:text-gold">
            {"Como Llegar"}
          </span>
        </a>
      </div>
    </div>
  )
}

export function LogisticsSection() {
  return (
    <AnimatedSection className="flex flex-col items-center gap-10 px-6 py-24">
      <div className="flex flex-col items-center gap-3">
        <p className="font-sans text-xs font-extralight uppercase tracking-[0.4em] text-gold-dark">
          Ceremonia & Fiesta
        </p>
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-gold/20" />
          <div className="h-1 w-1 rotate-45 border border-gold/30" />
          <div className="h-px w-8 bg-gold/20" />
        </div>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <EventBlock
          icon={<Church className="h-8 w-8" strokeWidth={1} />}
          title="Ceremonia"
          date="15 de Noviembre, 2026"
          time="17:00 hs"
          venue="Parroquia San Ignacio"
          address="Calle Bolivar 225, CABA"
          calendarUrl="#"
          mapsUrl="#"
        />
        <EventBlock
          icon={<PartyPopper className="h-8 w-8" strokeWidth={1} />}
          title="Recepcion"
          date="15 de Noviembre, 2026"
          time="20:00 hs"
          venue="Estancia El Ombu"
          address="Ruta 6, Km 170, Buenos Aires"
          calendarUrl="#"
          mapsUrl="#"
        />
      </div>
    </AnimatedSection>
  )
}
