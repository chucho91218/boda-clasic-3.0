"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Keyboard } from "swiper/modules"
import Image from "next/image"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

// Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const galleryImages = [
  { src: "/images/boda1.jpg", alt: "Boda 1" },
  { src: "/images/boda2.jpg", alt: "Boda 2" },
  { src: "/images/boda3.jpg", alt: "Boda 3" },
  { src: "/images/boda4.jpg", alt: "Boda 4" },
  { src: "/images/boda5.jpg", alt: "Boda 5" },
  { src: "/images/boda6.jpg", alt: "Boda 6" },
  { src: "/images/boda7.jpg", alt: "Boda 7" },
  { src: "/images/boda8.jpg", alt: "Boda 8" },
]

export function GallerySection() {
  return (
    <section className="flex flex-col items-center gap-12 px-6 py-24 max-w-5xl mx-auto w-full">
      <style jsx global>{`
        .swiper-pagination-bullet { background: #3d312b !important; opacity: 0.3; }
        .swiper-pagination-bullet-active { background: #3d312b !important; opacity: 1; }
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
          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={10}
          slidesPerView={1.2}
          centeredSlides={true}
          navigation={{ nextEl: ".next-gallery", prevEl: ".prev-gallery" }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
          grabCursor={true}
          loop={true}
          className="w-full !pb-16"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              {/* Cero bordes, cero radio, pura imagen */}
              <div className="relative aspect-[3/4] overflow-hidden bg-white">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 33vw"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flechas minimalistas */}
        <button className="prev-gallery absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex text-[#b09c8d] hover:text-[#3d312b] transition-colors">
          <FiChevronLeft size={40} strokeWidth={1} />
        </button>
        <button className="next-gallery absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex text-[#b09c8d] hover:text-[#3d312b] transition-colors">
          <FiChevronRight size={40} strokeWidth={1} />
        </button>
      </div>
    </section>
  )
}