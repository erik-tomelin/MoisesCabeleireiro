import React, { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section className="bg-gradient-to-br from-[#0f0f0f] via-[#1a0033] to-[#0f0f0f] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-black tracking-tight text-[#A78BFA] sm:text-5xl">
          Entre em Contato
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0d]/80 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.2)] sm:p-6">
              <iframe
                title="Moisés Barber Location"
                className="h-full w-full min-h-[300px] rounded-[1.25rem] border border-[#8b5cf6]/30"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0875814117413!2d-46.656174!3d-23.550519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0f51dd%3A0x5b5d5b5d5b5d5b5d!2sSP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              ></iframe>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-x-1 hover:border-[#A78BFA]/40">
                <FiMapPin size={26} className="text-[#A78BFA]" />
                <div>
                  <h3 className="text-lg font-semibold text-[#A78BFA]">Localização</h3>
                  <p className="text-sm leading-7 text-[#e5e7f0]/80">São Paulo, SP - Brasil</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-x-1 hover:border-[#A78BFA]/40">
                <FiPhone size={26} className="text-[#A78BFA]" />
                <div>
                  <h3 className="text-lg font-semibold text-[#A78BFA]">Telefone</h3>
                  <p className="text-sm leading-7 text-[#e5e7f0]/80">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-x-1 hover:border-[#A78BFA]/40">
                <FiMail size={26} className="text-[#A78BFA]" />
                <div>
                  <h3 className="text-lg font-semibold text-[#A78BFA]">Email</h3>
                  <p className="text-sm leading-7 text-[#e5e7f0]/80">moises@email.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.2)] sm:p-10">
            <h3 className="mb-6 text-2xl font-bold text-[#A78BFA]">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="grid gap-5">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full rounded-3xl border border-white/10 bg-[#111827]/85 px-5 py-4 text-white placeholder:text-[#cbd5e1]/70 outline-none transition focus:border-[#A78BFA]/60 focus:ring-2 focus:ring-[#A78BFA]/20"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Seu Telefone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full rounded-3xl border border-white/10 bg-[#111827]/85 px-5 py-4 text-white placeholder:text-[#cbd5e1]/70 outline-none transition focus:border-[#A78BFA]/60 focus:ring-2 focus:ring-[#A78BFA]/20"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-3xl border border-white/10 bg-[#111827]/85 px-5 py-4 text-white placeholder:text-[#cbd5e1]/70 outline-none transition focus:border-[#A78BFA]/60 focus:ring-2 focus:ring-[#A78BFA]/20"
              />
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="min-h-[160px] rounded-3xl border border-white/10 bg-[#111827]/85 px-5 py-4 text-white placeholder:text-[#cbd5e1]/70 outline-none transition focus:border-[#A78BFA]/60 focus:ring-2 focus:ring-[#A78BFA]/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-3xl bg-gradient-to-br from-[#8b5cf6] to-[#c4b5fd] px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(139,92,246,0.35)]"
              >
                <FiSend size={18} />
                Enviar Mensagem
              </button>
              {submitted && (
                <div className="rounded-3xl border border-[#4ade80]/40 bg-[#22c55e]/10 px-5 py-4 text-sm text-[#bbf7d0]">
                  Mensagem enviada com sucesso! 🎉
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
