import React from 'react'
import { FiScissors, FiDroplet } from 'react-icons/fi'

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Corte e Finalização',
      subtitle:
        'Cortes femininos e masculinos com orientação de visagismo e finalização que destaca textura e movimento.',
      icon: FiScissors,
      color: '#A78BFA',
    },
    {
      id: 2,
      title: 'Coloração e Mechas',
      subtitle:
        'Aplicação de coloração, luzes e mechas com técnica para um tom harmonioso, luminoso e com fios protegidos',
      icon: FiDroplet,
      color: '#C4B5FD',
    },
    {
      id: 3,
      title: 'Tratamentos Capilares',
      subtitle:
        'Hidratação, reparação e brilho para recuperar a saúde dos fios, reduzindo ressecamento e frizz.',
      icon: FiDroplet,
      color: '#8B5CF6',
    },
  ]

  return (
    <section className="bg-gradient-to-br from-[#0f0f0f] via-[#1a0033] to-[#0f0f0f] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-black tracking-tight text-[#A78BFA] sm:text-5xl">
          Nossos Serviços
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#A78BFA]/40 hover:bg-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#8b5cf6]/20 via-[#c4b5fd]/15 to-[#ffffff]/10">
                  <IconComponent size={40} color={service.color} />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#C4B5FD]">{service.title}</h3>
                <p className="text-sm leading-7 text-[#e5e7f0]/80">{service.subtitle}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
