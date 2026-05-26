# 💈 Moisés Cabeleireiro - Landing Page

Uma landing page moderna e responsiva para o cabeleireiro profissional Moisés, desenvolvida com React, TypeScript e Vite. Apresenta um design elegante com tema roxo, animações suaves e todas as seções necessárias para um negócio de beleza.

## ✨ Recursos

- **Header Animado**: Navegação fixa com menu responsivo
- **Hero Section**: Seção inicial com animações e chamada para ação
- **Sobre**: Apresentação do profissional com layout em duas colunas
- **Seção Transform**: Seção intermediária com imagem fixa
- **Serviços**: 3 cards com ícones para apresentar os principais serviços
- **Testemunhas**: Carrossel animado com feedbacks de clientes
- **Contato**: Mapa integrado e formulário de contato
- **Footer**: Links de navegação e informações de copyright
- **Responsivo**: Design adaptado para mobile, tablet e desktop
- **Tema Roxo**: Paleta de cores roxo degradê em todo o site

## 🛠️ Tecnologias

- **React 18.3**: Biblioteca JavaScript para UI
- **TypeScript**: Tipagem estática para JavaScript
- **Vite**: Build tool rápido e moderno
- **React Icons**: Ícones SVG para React
- **CSS Modules**: Estilo encapsulado por componente

## 📋 Requisitos

- Node.js 16+ e npm

## 🚀 Como Executar

1. **Clone ou acesse o projeto:**
   ```bash
   cd moises
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra no navegador:**
   ```
   http://localhost:5173
   ```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build para produção
- `npm run preview` - Visualiza a build de produção

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx              # Cabeçalho com navegação
│   ├── Header.module.css
│   ├── Footer.tsx              # Rodapé com links
│   ├── Footer.module.css
│   └── sections/
│       ├── Hero.tsx            # Seção inicial
│       ├── Hero.module.css
│       ├── About.tsx           # Sobre o Moisés
│       ├── About.module.css
│       ├── Transform.tsx       # Seção intermediária
│       ├── Transform.module.css
│       ├── Services.tsx        # Cards de serviços
│       ├── Services.module.css
│       ├── Testimonials.tsx    # Carrossel de testemunhas
│       ├── Testimonials.module.css
│       ├── Contact.tsx         # Contato com mapa
│       └── Contact.module.css
├── App.tsx                     # Componente principal
├── main.tsx                    # Entrada da aplicação
└── index.css                   # Estilos globais
```

## 🎨 Paleta de Cores

- **Roxo Primário**: #8B5CF6
- **Roxo Escuro**: #6D28D9
- **Roxo Claro**: #A78BFA
- **Roxo Acento**: #C4B5FD
- **Background Escuro**: #0f0f0f

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints para:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customização

### Alterar Cores
Edite as variáveis CSS em `src/index.css`:
```css
:root {
  --primary-purple: #8B5CF6;
  --dark-purple: #6D28D9;
  --light-purple: #A78BFA;
  --accent-purple: #C4B5FD;
  --dark-bg: #0f0f0f;
  --card-bg: #1a1a1a;
}
```

### Adicionar Imagens
Substitua os placeholders de imagem nos componentes:
- `Hero`: Imagem de fundo
- `About`: Foto do profissional
- `Services`: Ícones ou imagens dos serviços
- `Testimonials`: Fotos dos clientes

### Alterar Informações de Contato
Atualize os dados em `src/components/sections/Contact.tsx`:
- Telefone
- Email
- Endereço
- Link do Google Maps

## 📞 Informações de Contato (Placeholder)

- **Telefone**: (11) 99999-9999
- **Email**: moises@email.com
- **Localização**: São Paulo, SP - Brasil

## 🚀 Deploy

### Fazer Build
```bash
npm run build
```

### Fazer Deploy em Vercel
1. Faça push do código para GitHub
2. Conecte seu repositório ao Vercel
3. Deploy automático a cada push

## 📝 Próximas Melhorias

- [ ] Integração com WhatsApp para contato
- [ ] Galeria de trabalhos
- [ ] Agendamento online
- [ ] Blog de dicas de cuidado capilar
- [ ] Chat em tempo real
- [ ] Dark/Light mode toggle

## 📄 Licença

Este projeto está aberto para uso e modificação.

## 👨‍💼 Desenvolvido com ❤️ para Moisés Cabeleireiro

---

**Nota**: Substitua os placeholders de imagens e informações de contato com os dados reais do profissional.
