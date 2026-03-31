"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Keyboard, FreeMode } from "swiper/modules"
import Image from "next/image"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

// Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/free-mode"

const galleryImages = [
  { src: "/images/image (1).webp", alt: "Boda 1" },
  { src: "/images/image (2).webp", alt: "Boda 2" },
  { src: "/images/image (3).webp", alt: "Boda 3" },
  { src: "/images/image (4).webp", alt: "Boda 4" },
  { src: "/images/image (5).webp", alt: "Boda 5" },
  { src: "/images/image.webp", alt: "Boda 6" },
  { src: "/images/image (7).webp", alt: "Boda 7" },
  { src: "/images/image (6).webp", alt: "Boda 8" },
]

export function GallerySection() {
  return (
    <section className="flex flex-col items-center gap-12 px-6 py-24 max-w-5xl mx-auto w-full bg-[#fdfcf9]">
      <style jsx global>{`
        .swiper-pagination-bullet { background: #3d312b !important; opacity: 0.2; }
        .swiper-pagination-bullet-active { background: #b09c8d !important; opacity: 1; }
        /* Evita parpadeos en transiciones */
        .swiper-wrapper { will-change: transform; } 
      `}</style>

      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-serif text-[42px] text-[#3d312b] italic">Nuestra Historia</h2>
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#b09c8d]" />
          <div className="h-1.5 w-1.5 rotate-45 border border-[#b09c8d]" />
          <div className="h-px w-8 bg-[#b09c8d]" />
        </div>
      </div>

      <div className="w-full relative px-0 md:px-12 group">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, FreeMode]}
          spaceBetween={15}
          slidesPerView={1.2}
          centeredSlides={true}
          navigation={{ nextEl: ".next-gallery", prevEl: ".prev-gallery" }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          freeMode={true} // Hace que el deslizamiento sea más natural y fluido
          speed={400} // Transición más rápida (el default es 300, pero 400 es más suave)
          breakpoints={{
            640: { slidesPerView: 2.2, centeredSlides: false, freeMode: false },
            1024: { slidesPerView: 3, centeredSlides: false, freeMode: false },
          }}
          grabCursor={true}
          loop={true}
          className="w-full !pb-16"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f0f0f0]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 33vw"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flechas minimalistas - Solo en PC */}
        <button className="prev-gallery absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex text-[#b09c8d] hover:text-[#3d312b] transition-colors p-2">
          <FiChevronLeft size={32} strokeWidth={1} />
        </button>
        <button className="next-gallery absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex text-[#b09c8d] hover:text-[#3d312b] transition-colors p-2">
          <FiChevronRight size={32} strokeWidth={1} />
        </button>
      </div>
    </section>
  )
}