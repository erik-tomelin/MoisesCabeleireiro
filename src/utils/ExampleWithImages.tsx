import React from 'react'

// Exemplo de como importar e usar imagens no projeto
// Este arquivo é apenas um guia de referência

export const ImageImportExample: React.FC = () => {
  // Modo 1: Importar imagem diretamente
  // import heroImage from '../assets/images/hero.jpg'

  // Modo 2: Usar string de caminho (melhor para Vite)
  const heroImage = '/src/assets/images/hero.jpg'
  const moisesImage = '/src/assets/images/moises.jpg'

  return (
    <div className="space-y-6">
      {/* Exemplo 1: Background image em CSS */}
      <div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 400,
          borderRadius: 24,
          overflow: 'hidden',
        }}
      >
        {/* Seu conteúdo aqui */}
      </div>

      {/* Exemplo 2: Tag img */}
      <img
        src={moisesImage}
        alt="Foto do Moisés"
        style={{
          maxWidth: '100%',
          borderRadius: '10px',
        }}
      />

      {/* Exemplo 3: Com loading lazy */}
      <img
        src={moisesImage}
        alt="Foto do Moisés"
        loading="lazy"
        style={{
          maxWidth: '100%',
          borderRadius: '10px',
        }}
      />
    </div>
  )
}

// Função auxiliar para otimizar imagens
export const OptimizeImage = (imagePath: string, alt: string) => {
  return (
    <img
      src={imagePath}
      alt={alt}
      loading="lazy"
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
      }}
    />
  )
}

// Padrão de card com imagem (para Services)
export const CardWithImage: React.FC<{
  image: string
  title: string
  subtitle: string
}> = ({ image, title, subtitle }) => {
  return (
    <div className="overflow-hidden rounded-[1.25rem] bg-[#111827]/80 border border-white/10 shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="block h-[250px] w-full object-cover"
      />
      <div className="p-5 text-white">
        <h3 className="mb-2 text-lg font-semibold text-[#A78BFA]">{title}</h3>
        <p className="text-sm leading-6 text-[#e5e7f0]/80">{subtitle}</p>
      </div>
    </div>
  )
}

// Padrão de testemunha com foto (para Testimonials)
export const TestimonialWithPhoto: React.FC<{
  photo: string
  name: string
  text: string
  rating: number
}> = ({ photo, name, text, rating }) => {
  return (
    <div className="flex flex-col gap-5 rounded-[1.25rem] border border-white/10 bg-[#0f172a]/80 p-5 text-white sm:flex-row">
      <img
        src={photo}
        alt={name}
        className="h-24 w-24 rounded-full object-cover"
      />
      <div>
        <p className="mb-4 text-sm italic leading-7 text-[#e5e7f0]/80">"{text}"</p>
        <h4 className="text-lg font-semibold text-[#A78BFA]">{name}</h4>
        <div className="mt-3 flex gap-1 text-[#facc15]">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/*
INSTRUÇÕES:

1. Crie a pasta: src/assets/images/

2. Coloque suas imagens lá:
   - hero.jpg (background do hero)
   - moises.jpg (foto do profissional)
   - corte.jpg, coloracao.jpg, tratamentos.jpg (serviços)
   - cliente1.jpg, cliente2.jpg, etc (testemunhas)

3. Para usar as imagens nos componentes:

   Option A - Import direto (recomendado para produção):
   import heroImage from '../assets/images/hero.jpg'
   <img src={heroImage} alt="Hero" />

   Option B - String path (melhor para desenvolvimento com Vite):
   const heroImage = '/src/assets/images/hero.jpg'
   <img src={heroImage} alt="Hero" />

   Option C - URL externa:
   <img src="https://sua-url.com/imagem.jpg" alt="Hero" />

4. IMPORTANTE para Vite:
   - Use caminhos relativos ao root do projeto
   - Coloque assets dentro de `src/assets/`
   - Vite processará automaticamente

5. Otimização:
   - Use loading="lazy" em imagens abaixo do fold
   - Comprima as imagens em https://tinypng.com
   - Considere usar WebP para melhor performance
*/
