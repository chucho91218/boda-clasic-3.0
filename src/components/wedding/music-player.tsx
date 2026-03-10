"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function MusicPlayer({ triggerPlay }: { triggerPlay: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Dispara la música cuando triggerPlay es true (al tocar el botón)
  useEffect(() => {
    if (triggerPlay && audioRef.current && !isPlaying) {
      audioRef.current.play().catch(err => console.log("Error al reproducir:", err))
      setIsPlaying(true)
    }
  }, [triggerPlay])

  function toggleMusic() {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/images/Perfect -Ed Sheeran.mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={toggleMusic}
          initial={{ scale: 0, opacity: 0 }}
          animate={triggerPlay ? { scale: 1, opacity: 1 } : {}}
          whileTap={{ scale: 0.9 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl border border-[#d6c8b8]/30 text-[#3d312b]"
        >
          {/* Icono de Ondas/Música Minimalista */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5v14M22 9v6M7 5v14M2 9v6" />
          </svg>
          
          {/* Pequeño indicador si está pausado */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/40 rounded-full">
               <div className="w-6 h-[1.5px] bg-[#3d312b] rotate-45" />
            </div>
          )}
        </motion.button>
      </div>
    </>
  )
}