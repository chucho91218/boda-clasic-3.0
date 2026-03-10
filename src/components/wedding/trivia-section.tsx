"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedSection } from "./animated-section"
import { Check, X } from "lucide-react"

interface Question {
  question: string
  options: string[]
  correct: number
}

const questions: Question[] = [
  {
    question: "Quien dio el primer paso?",
    options: ["Valentina", "Santiago", "Fue mutuo"],
    correct: 1,
  },
  {
    question: "Donde fue la primera cita?",
    options: ["Un cafe en Palermo", "Una cena en San Telmo", "Un picnic en los Bosques de Palermo"],
    correct: 0,
  },
  {
    question: "Cual es su cancion?",
    options: ["Perfect - Ed Sheeran", "La Vida es un Carnaval", "All of Me - John Legend"],
    correct: 2,
  },
]

function QuestionCard({ question, onAnswer }: { question: Question; onAnswer: (correct: boolean) => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  function handleSelect(index: number) {
    if (revealed) return
    setSelected(index)
    setRevealed(true)
    setTimeout(() => {
      onAnswer(index === question.correct)
    }, 1500)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h4 className="text-center font-serif text-xl font-light text-gold md:text-2xl">
        {question.question}
      </h4>
      <div className="flex w-full flex-col gap-3">
        {question.options.map((option, index) => {
          let borderStyle = "border-gold/15 hover:border-gold/40"
          if (revealed && index === question.correct) {
            borderStyle = "border-green-500/50 bg-green-500/5"
          } else if (revealed && index === selected && index !== question.correct) {
            borderStyle = "border-red-500/50 bg-red-500/5"
          }

          return (
            <button
              key={option}
              onClick={() => handleSelect(index)}
              disabled={revealed}
              className={`group flex items-center justify-between border px-6 py-3.5 transition-all duration-400 ${borderStyle} ${!revealed ? "cursor-pointer" : "cursor-default"}`}
            >
              <span className="font-sans text-sm font-light tracking-wider text-champagne/80">
                {option}
              </span>
              {revealed && index === question.correct && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <Check className="h-4 w-4 text-green-500" />
                </motion.div>
              )}
              {revealed && index === selected && index !== question.correct && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <X className="h-4 w-4 text-red-500" />
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function TriviaSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  function handleAnswer(correct: boolean) {
    if (correct) setScore((s) => s + 1)
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion((q) => q + 1), 300)
    } else {
      setTimeout(() => setFinished(true), 300)
    }
  }

  return (
    <AnimatedSection className="flex flex-col items-center gap-10 px-6 py-24">
      <div className="flex flex-col items-center gap-3">
        <p className="font-sans text-xs font-extralight uppercase tracking-[0.4em] text-gold-dark">
          Trivia de la Pareja
        </p>
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-gold/20" />
          <div className="h-1 w-1 rotate-45 border border-gold/30" />
          <div className="h-px w-8 bg-gold/20" />
        </div>
      </div>

      <div className="w-full max-w-md border border-gold/10 bg-card/50 px-6 py-10 md:px-10">
        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-sans text-[10px] font-light uppercase tracking-[0.2em] text-muted-foreground">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </span>
                <div className="flex gap-1.5">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-6 transition-colors duration-300 ${
                        i <= currentQuestion ? "bg-gold/60" : "bg-gold/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <QuestionCard
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-6 py-6"
            >
              <p className="font-serif text-3xl font-light text-gold">
                {score}/{questions.length}
              </p>
              <p className="text-center font-sans text-sm font-extralight leading-relaxed text-champagne/60">
                {score === questions.length
                  ? "Conoces perfectamente a la pareja!"
                  : score >= 2
                  ? "Casi! Los conoces bastante bien."
                  : "Hay mucho por descubrir de esta pareja!"}
              </p>
              <button
                onClick={() => {
                  setCurrentQuestion(0)
                  setScore(0)
                  setFinished(false)
                }}
                className="border border-gold/20 px-6 py-2.5 font-sans text-[10px] font-light uppercase tracking-[0.25em] text-gold/70 transition-all duration-500 hover:border-gold/50 hover:bg-gold/5 hover:text-gold"
              >
                Jugar de Nuevo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}
