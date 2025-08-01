"use client"

import React from "react"
import CardSwipe from "@/components/ui/card-swipe"

export default function App() {
  // Array Github
  const projects = [
    {
      name: "LoFi Square",
      description: "Lofi Rádio sem distrações",
      language: "HTML",
      repo: "https://github.com/Jeiel0rbit/LoFi_Square",
      image: "/demo1.png",
    },
    {
      name: "Proverb Day",
      description: "30/31 com livro de Provérbios de cada dia. ",
      language: "HTML",
      repo: "https://github.com/Jeiel0rbit/Proverb-Day",
      image: "/demo2.png",
    },
    {
      name: "Lofi gospel",
      description: "Um bot simples para tocar estações de rádio Lofi Gospel em servidores Discord. Comandos restritos a administradores e moderadores.",
      language: "Javascript",
      repo: "https://github.com/Jeiel0rbit/lofi-gospel",
      image: "/demo3.png",
    },
    {
      name: "Quiz Bíblico",
      description: "Quiz Bíblico diferenciado!",
      language: "HTML",
      repo: "https://github.com/Jeiel0rbit/quiz-jeiel",
      image: "/demo4.png",
    },
    {
      name: "Concursos API",
      description: "API de concurso público para Dev ",
      language: "TypeScript",
      repo: "https://github.com/Jeiel0rbit/concursos-api-deno",
      image: "/demo5.png",
    },
    {
      name: "Danilo Car Automotivo",
      description: "Lading Page criado para um cliente de serviços automotivos",
      language: "Nextjs",
      repo: "https://github.com/Jeiel0rbit/danilocarautomotivo",
      image: "/demo6.png",
    },
    {
      name: "Ask Jetrom",
      description: "Inteligência Artifical simplificado via Web",
      language: "HTML",
      repo: "https://github.com/Jeiel0rbit/ask-jetrom-ui",
      image: "/demo7.png",
    },
  ]

  return (
    <main className="dark-beams-background flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-white" style={{ backgroundColor: '#000', color: '#fff' }}>
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-400">
          Jeiel Miranda
        </h1>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-200">
          Vibe Coding
        </p>
      </div>
      <CardSwipe projects={projects} />
    </main>
  )
}

