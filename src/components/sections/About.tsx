import React from 'react'

const About: React.FC = () => {
  return (
    <section className="bg-[#0f0f0f] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#8b5cf6]/15 to-[#6d28d9]/10 p-5 shadow-[0_40px_120px_rgba(145,52,255,0.12)] sm:p-8">
          <div className="flex h-full min-h-[340px] items-center justify-center overflow-hidden rounded-[1.75rem] bg-[#150434]/90 p-8 text-center text-sm uppercase tracking-[0.3em] text-white/70 sm:p-12 sm:text-base">
            <span>Imagem do Moisés</span>
          </div>
        </div>

        <div className="space-y-6 px-2 sm:px-0">
          <h2 className="text-4xl font-black tracking-tight text-[#A78BFA] sm:text-5xl">
            Sobre o Moisés
          </h2>
          <p className="text-base leading-8 text-[#e5e7f0]/85 sm:text-lg">
            Moisés é um cabeleireiro profissional apaixonado por realçar a beleza e a identidade de cada cliente. Com atendimento personalizado, ele analisa seu tipo de fio, rotina e preferências para criar cortes e penteados que valorizam seu rosto e seu estilo.
          </p>
          <p className="text-base leading-8 text-[#e5e7f0]/85 sm:text-lg">
            Além disso, trabalha com coloração e mechas com foco em resultado natural e saudável, sempre utilizando produtos de qualidade. Para quem busca recuperar brilho e maciez, oferece tratamentos capilares de hidratação e reparação em um ambiente moderno, acolhedor e pensado para você se sentir bem do início ao fim.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
