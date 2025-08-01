"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"

interface Project {
  name: string
  description: string
  language: string
  image?: string
  repo: string
}

interface CardSwipeProps {
  projects: Project[]
  autoplayDelay?: number
}

const CardSwipe: React.FC<CardSwipeProps> = ({
  projects,
  autoplayDelay = 2500,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 320px;
      height: 400px;
      border-radius: 1rem;
      border: 2px solid rgba(0, 255, 0, 0.5);
      box-shadow: 0 0 15px rgba(0, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.3);
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  `

  return (
    <div className="w-full max-w-5xl px-4">
      <style>{css}</style>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        aria-label="Carrossel de projetos"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black bg-opacity-50 backdrop-blur-lg">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 h-full w-full rounded-2xl opacity-40"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold [text-shadow:0_0_8px_#000]">{project.name}</h3>
                <p className="mt-2 text-base [text-shadow:0_0_6px_#000]">{project.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">{project.language}</span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green-500/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-green-500/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                    aria-label={`Ver o projeto ${project.name} no GitHub`}
                  >
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CardSwipe