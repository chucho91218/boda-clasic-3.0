"use client"

import { Camera, Instagram } from "lucide-react"
import Image from "next/image"

export function QRAlbumSection() {
  const instagramLink = "https://ig.me/j/AbbM7kBrAVL1rswe/"

  return (
    <section className="flex flex-col items-center gap-10 px-6 py-24 max-w-xl mx-auto">
      <div className="flex flex-col items-center gap-3 text-center">
        <Camera className="h-6 w-6 text-[#b09c8d]" strokeWidth={1} />
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#b09c8d]">
          Álbum Digital
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-8 border border-[#d6c8b8] bg-white p-10 md:p-16 shadow-sm">
        <h3 className="text-center font-serif text-[32px] text-[#3d312b] italic leading-tight">
          Capturá el momento
        </h3>

        <p className="text-center font-sans text-xs leading-relaxed text-[#b09c8d] max-w-[280px]">
          Subí todas las fotos y videos que saques para que podamos revivir este día juntos.
        </p>

        {/* QR con Link Directo */}
        <a 
          href={instagramLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group transition-transform duration-500 hover:scale-105"
        >
          <div className="absolute -inset-4 border border-[#d6c8b8]/40 scale-95 group-hover:scale-100 transition-transform duration-500" />
          <div className="relative h-48 w-48 md:h-56 md:w-56 bg-white p-2">
            <Image 
              src="/images/image_41317a.png" 
              alt="QR Instagram Album" 
              fill 
              className="object-contain p-2"
            />
          </div>
        </a>

        <div className="flex flex-col items-center gap-4">
          <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#b09c8d] italic">
            Escanealo o toca el código
          </p>

          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#3d312b] bg-[#3d312b] px-8 py-4 text-white transition-all hover:bg-transparent hover:text-[#3d312b]"
          >
            <Instagram className="h-4 w-4" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em]">
              Unirse al grupo
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}