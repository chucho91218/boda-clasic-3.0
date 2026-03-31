"use client"

import { motion } from "framer-motion"

const timelineEvents = [
  { year: "2018", title: "El Comienzo", desc: "Nos conocimos un verano inolvidable." },
  { year: "2020", title: "Primer Viaje", desc: "Descubrimos que queríamos recorrer el mundo juntos." },
  { year: "2023", title: "El Sí", desc: "En una tarde mágica, decidimos caminar juntos para siempre." },
]

export function Timeline() {
  return (
    <section className="py-20 px-6 bg-[#fdfcf9]">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#b09c8d]/30" />
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-5/12 text-center">
                  <span className="font-serif text-[#b09c8d] text-lg italic">{event.year}</span>
                  <h3 className="text-[#3d312b] font-serif text-xl mt-1">{event.title}</h3>
                  <p className="text-[#3d312b]/70 text-sm mt-2 leading-relaxed">{event.desc}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#b09c8d] rotate-45 border-4 border-[#fdfcf9]" />
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}