"use client"

import { Instagram, Heart } from "lucide-react"
import Image from "next/image"

export function FooterSection() {
  const instagramUrl = "https://instagram.com/festa_invitaciones"

  return (
    <footer className="flex flex-col items-center gap-8 border-t border-[#d6c8b8]/20 px-6 py-20">
      {/* Separador con Corazón */}
      <div className="flex items-center gap-4">
        <div className="h-px w-12 bg-[#d6c8b8]/40" />
        <Heart className="h-3 w-3 text-[#b09c8d]/40" strokeWidth={1} fill="currentColor" />
        <div className="h-px w-12 bg-[#d6c8b8]/40" />
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* Logo Festa Transparente */}
        <div className="relative h-20 w-40 transition-transform duration-700 hover:scale-105">
          <Image 
            src="/images/festa_transparente.png" 
            alt="Festa Invitaciones Logo" 
            fill 
            className="object-contain opacity-90"
          />
        </div>

        {/* Link a Instagram */}
        <a 
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2 border-b border-transparent group-hover:border-[#3d312b] transition-all pb-1">
            <Instagram size={14} className="text-[#b09c8d] group-hover:text-[#3d312b] transition-colors" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#3d312b] group-hover:text-[#3d312b]">
              @festa_invitaciones
            </span>
          </div>
        </a>
      </div>

      {/* Info de Cierre en Marrón Oscuro */}
      <div className="mt-4 flex flex-col items-center gap-2 text-center">
        <p className="font-sans text-[9px] uppercase tracking-[0.5em] text-[#3d312b] font-medium">
          Diseño Exclusivo para Eventos
        </p>
        <p className="font-serif text-[11px] italic text-[#3d312b]">
          Hecho con amor por Festa
        </p>
      </div>
    </footer>
  )
}