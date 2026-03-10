"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface WelcomeScreenProps {
  onEnter: () => void
}

export const WelcomeScreen = ({ onEnter }: WelcomeScreenProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleEnter = () => {
    setIsVisible(false)
    // Ejecutamos la función que activa la música inmediatamente
    onEnter()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f5eee6] px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#b09c8d]">
                Nuestra Boda
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-[#3d312b] mt-4">
                Valentina <br /> & <br /> Santiago
              </h1>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="mt-12 px-10 py-4 border border-[#3d312b] text-[#3d312b] font-sans text-sm uppercase tracking-[0.2em] hover:bg-[#3d312b] hover:text-white transition-all duration-300 shadow-sm"
            >
              Abrir Invitación
            </motion.button>
          </motion.div>

          <div className="absolute bottom-10">
             <p className="font-serif italic text-[#b09c8d] text-lg">
               15 de Noviembre, 2026
             </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}