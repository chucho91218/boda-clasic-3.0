"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/wedding/welcome-screen"
import { HeroSection } from "@/components/wedding/hero-section"
import { CountdownSection } from "@/components/wedding/countdown-section"
import { LogisticsSection } from "@/components/wedding/logistics-section"
import { Timeline } from "@/components/wedding/timeline-section"
import { GallerySection } from "@/components/wedding/gallery-section"
import { QRAlbumSection } from "@/components/wedding/qr-album-section"
import { TriviaSection } from "@/components/wedding/trivia-section"
import { RSVPSection } from "@/components/wedding/rsvp-section"
import { HoneymoonSection } from "@/components/wedding/honeymoon-section"
import { FooterSection } from "@/components/wedding/footer-section"
import { MusicPlayer } from "@/components/wedding/music-player"

export default function WeddingPage() {
  const [showContent, setShowContent] = useState(false)

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Pantalla de Bienvenida */}
      <WelcomeScreen onEnter={() => setShowContent(true)} />

      {/* Contenido Principal */}
      {showContent && (
        <div className="animate-in fade-in duration-1000">
          <HeroSection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
          
          <CountdownSection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
          
          <LogisticsSection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />

          <Timeline />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
          
          <GallerySection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
          
          <QRAlbumSection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
          
          <TriviaSection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
          
          <RSVPSection />
          <div className="mx-auto h-px w-3/4 max-w-md bg-border/30" />
          
          <HoneymoonSection />
          
          <FooterSection />

          {/* Le pasamos true para que arranque apenas se monte el componente */}
          <MusicPlayer triggerPlay={true} />
        </div>
      )}
    </main>
  )
}