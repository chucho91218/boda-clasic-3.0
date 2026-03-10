"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Send } from "lucide-react"

export function RSVPSection() {
  const [count, setCount] = useState(1)
  const [guests, setGuests] = useState([{ name: "", diet: "NINGUNA", song: "" }])

  const whatsappNumber = "5491100000000"

  useEffect(() => {
    setGuests((prev) => {
      if (count > prev.length) {
        const toAdd = count - prev.length
        return [...prev, ...Array(toAdd).fill(null).map(() => ({ name: "", diet: "NINGUNA", song: "" }))]
      }
      return prev.slice(0, count)
    })
  }, [count])

  const updateGuest = (index: number, field: string, value: string) => {
    const newGuests = [...guests]
    newGuests[index] = { ...newGuests[index], [field]: value }
    setGuests(newGuests)
  }

  function handleConfirm() {
    let message = `¡Hola! Confirmo asistencia.\n`
    message += `Total de invitados: ${count}\n`
    message += `--------------------------\n`
    guests.forEach((g, i) => {
      message += `👤 Invitado ${i + 1}: ${g.name || "Sin nombre"}\n`
      message += `🍴 Dieta: ${g.diet}\n`
      message += `🎵 Canción: ${g.song || "No sugiere"}\n`
      if (i !== guests.length - 1) message += `--------------------------\n`
    })
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="flex flex-col items-center gap-10 px-6 py-24 max-w-xl mx-auto">
      <div className="text-center">
        <h2 className="font-serif text-[42px] text-[#8b7355] italic">Confirmación de Asistencia</h2>
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#b09c8d] mt-4">¿Cuántos vienen?</p>
      </div>

      {/* Selector - Borde beige clarito */}
      <div className="flex items-center border border-[#d6c8b8] bg-white">
        <button onClick={() => setCount(Math.max(1, count - 1))} className="p-3 border-r border-[#d6c8b8] hover:bg-[#f5eee6] transition-colors">
          <Minus size={14} className="text-[#b09c8d]" />
        </button>
        <span className="font-serif text-2xl w-12 text-center text-[#8b7355]">{count}</span>
        <button onClick={() => setCount(Math.min(10, count + 1))} className="p-3 border-l border-[#d6c8b8] hover:bg-[#f5eee6] transition-colors">
          <Plus size={14} className="text-[#b09c8d]" />
        </button>
      </div>

      <div className="w-full space-y-8">
        <AnimatePresence mode="popLayout">
          {guests.map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white border border-[#d6c8b8] p-8 md:p-12 space-y-10"
            >
              <div className="flex items-center gap-2 border-b border-[#d6c8b8]/40 pb-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#b09c8d] font-bold">
                  Invitado {index + 1}
                </span>
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Nombre y Apellido"
                  className="w-full bg-transparent border-b border-[#d6c8b8] py-2 focus:outline-none font-serif text-xl text-[#8b7355] placeholder:text-[#d6c8b8]"
                  onChange={(e) => updateGuest(index, "name", e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#b09c8d] block font-bold">Restricción Alimentaria</label>
                <select 
                  className="w-full bg-transparent border-b border-[#d6c8b8] py-2 focus:outline-none text-xs uppercase tracking-widest text-[#8b7355] appearance-none cursor-pointer"
                  onChange={(e) => updateGuest(index, "diet", e.target.value)}
                >
                  <option value="NINGUNA">NINGUNA</option>
                  <option value="VEGETARIANO/A">VEGETARIANO/A</option>
                  <option value="VEGANO/A">VEGANO/A</option>
                  <option value="CELÍACO/A">CELÍACO/A</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#b09c8d] block font-bold">Canción que no puede faltar</label>
                <input
                  type="text"
                  placeholder="Título y Artista"
                  className="w-full bg-transparent border-b border-[#d6c8b8] py-2 focus:outline-none text-xs text-[#8b7355] placeholder:text-[#d6c8b8] italic"
                  onChange={(e) => updateGuest(index, "song", e.target.value)}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Botón - Color café con leche suave (como el de la Luna de Miel) */}
      <button 
        onClick={handleConfirm}
        className="w-full bg-[#fdfcfb] border border-[#d6c8b8] text-[#b09c8d] py-5 flex items-center justify-center gap-3 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#f5eee6] transition-all"
      >
        <Send size={14} />
        Confirmar por WhatsApp
      </button>
    </section>
  )
}