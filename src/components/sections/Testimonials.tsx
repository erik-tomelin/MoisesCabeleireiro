import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      text: 'Melhor corte que já fiz! Moisés é um profissional de verdade, muito atencioso e detalhista. Com certeza vou voltar sempre!',
      rating: 5,
    },
    {
      id: 2,
      name: 'João Santos',
      text: 'Adorei o resultado da coloração. As cores ficaram perfeitas e os fios muito saudáveis. Recomendo para todos os meus amigos.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ana Costa',
      text: 'Fiz um tratamento de hidratação e meu cabelo voltou a brilhar! O ambiente é muito aconchegante também.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Pedro Oliveira',
      text: 'Moisés entendeu perfeitamente o que eu queria. Fez um corte impecável e ainda deu dicas de cuidado.',
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)

  useEffect(() => {
    if (!autoScroll) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoScroll, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoScroll(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoScroll(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoScroll(false)
  }

  return (
    <section className="bg-gradient-to-br from-[#0f0f0f] via-[#1a0033] to-[#0f0f0f] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-black tracking-tight text-[#A78BFA] sm:text-5xl">
          Testemunhas
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-8">
          <button
            type="button"
            onClick={prevSlide}
            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#c4b5fd] text-white shadow-lg transition hover:scale-105"
            aria-label="Slide anterior"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.2)] sm:p-6">
            <div className="relative min-h-[380px] sm:min-h-[420px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentIndex
                      ? 'translate-x-0 opacity-100'
                      : index < currentIndex
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  } ${index === currentIndex ? 'relative' : 'pointer-events-none'}`}
                >
                  <div className="grid h-full gap-8 rounded-[1.25rem] bg-[#0f0f0f]/85 p-6 text-white sm:grid-cols-[auto_1fr] sm:p-8">
                    <div className="flex items-center justify-center">
                      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#c4b5fd] text-4xl font-black text-white shadow-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <p className="text-base leading-8 text-[#e5e7f0]/85 sm:text-lg">
                        "{testimonial.text}"
                      </p>
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl font-bold text-[#A78BFA]">{testimonial.name}</h3>
                        <div className="flex gap-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <FaStar key={i} color="#FFD700" size={18} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#c4b5fd] text-white shadow-lg transition hover:scale-105"
            aria-label="Próximo slide"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-3 w-3 rounded-full transition ${
                index === currentIndex ? 'bg-[#A78BFA] scale-110' : 'bg-white/30'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
