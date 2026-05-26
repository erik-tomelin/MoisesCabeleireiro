# 📝 Checklist e Guia de Personalização

## ✅ Status do Projeto

A landing page foi criada com sucesso com os seguintes componentes:

### ✓ Implementado

- [x] **Header Animado**: Menu de navegação fixo com animações suaves
- [x] **Seção Hero**: Página inicial com gradiente roxo e animações
- [x] **Sobre Moisés**: Seção com layout duas colunas (imagem + texto)
- [x] **Seção Transform**: Intermediária com imagem fixa no fundo
- [x] **Serviços**: 3 cards com ícones (Corte, Coloração, Tratamentos)
- [x] **Testemunhas**: Carrossel animado com 4 clientes
- [x] **Contato**: Mapa integrado + formulário
- [x] **Footer**: Links e copyright
- [x] **Responsividade**: Mobile, tablet e desktop
- [x] **Tema Roxo**: Paleta completa de cores

## 🎨 Personalizações Necessárias

### 1️⃣ Adicionar Imagens

#### A. Criar pasta de imagens
```bash
mkdir src/assets
mkdir src/assets/images
```

#### B. Seção Hero (Background)
1. Coloque uma imagem em `src/assets/images/hero.jpg` (de um salão de beleza ou cabeleireiro)
2. Abra `src/components/sections/Hero.tsx`
3. Adicione CSS background no `.hero`:

```css
.hero {
  background-image: url('/src/assets/images/hero.jpg');
  background-size: cover;
  background-position: center;
}
```

#### C. Seção About (Foto do Moisés)
1. Coloque foto em `src/assets/images/moises.jpg`
2. Abra `src/components/sections/About.tsx`
3. Substitua o `imagePlaceholder`:

```tsx
<img 
  src="/src/assets/images/moises.jpg" 
  alt="Moisés"
  style={{
    width: '100%',
    borderRadius: '20px',
    border: '2px solid #8B5CF6'
  }}
/>
```

#### D. Serviços (Cards)
Edite `src/components/sections/Services.tsx` e adicione imagens:

```tsx
const services = [
  {
    id: 1,
    title: 'Corte e Finalização',
    image: '/src/assets/images/corte.jpg',
    // ...
  }
]
```

#### E. Testemunhas (Fotos dos Clientes)
Edite `src/components/sections/Testimonials.tsx`:

```tsx
const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    image: '/src/assets/images/maria.jpg',
    // ...
  }
]
```

### 2️⃣ Informações de Contato

Abra `src/components/sections/Contact.tsx` e atualize:

```tsx
// Telefone
<p>(11) 99999-9999</p>  // ← ALTERE

// Email
<p>moises@email.com</p>  // ← ALTERE

// Mapa - Altere a URL do iframe
src="https://www.google.com/maps/embed?pb=..."
```

### 3️⃣ Informações do Rodapé

Abra `src/components/Footer.tsx`:

```tsx
// Mude os textos conforme necessário
<p>Copyright © 2026 All rights reserved</p>
```

### 4️⃣ Adicionar Mais Testemunhas

Edite `src/components/sections/Testimonials.tsx`:

```tsx
const testimonials = [
  {
    id: 1,
    name: 'Nome do Cliente',
    text: 'Aqui vai o depoimento...',
    rating: 5,
  },
  // Adicione mais aqui
]
```

### 5️⃣ Editar Textos das Seções

#### Hero
`src/components/sections/Hero.tsx`

#### About
`src/components/sections/About.tsx`

#### Services
`src/components/sections/Services.tsx`

## 🎯 Próximas Funcionalidades Opcionais

### WhatsApp Integration
```tsx
<a href="https://wa.me/5511999999999?text=Olá">
  Enviar mensagem
</a>
```

### Integração com formulário
Para fazer o formulário realmente enviar emails:
1. Use Formspree (https://formspree.io)
2. Ou EmailJS (https://www.emailjs.com)

### Galeria de Trabalhos
Crie um novo componente `Gallery.tsx` com:
- Grid de imagens 3x3
- Modal para visualizar em tamanho grande
- Filtros por tipo de serviço

### Agendamento Online
Integre:
- Calendly
- Acuity Scheduling
- Google Calendar

## 🚀 Fluxo de Trabalho Recomendado

1. **Coletar Imagens**
   - 1 background hero
   - 1 foto do Moisés
   - 3 imagens de serviços
   - 4-5 fotos de clientes

2. **Customizar Textos**
   - About
   - Descrições dos serviços
   - Testemunhas

3. **Configurar Contato**
   - Telefone
   - Email
   - Endereço no mapa

4. **Testar**
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)
   - Navegação
   - Formulário

5. **Deploy**
   - Build: `npm run build`
   - Upload em Vercel ou Netlify

## 📊 Arquivos Importantes

```
moises/
├── src/
│   ├── components/          # Componentes React
│   ├── assets/              # 📁 COLOQUE AS IMAGENS AQUI
│   │   └── images/
│   ├── index.css            # Estilos globais
│   ├── main.tsx             # Entrada
│   └── App.tsx              # Componente principal
├── package.json             # Dependências
├── vite.config.ts           # Configuração Vite
└── README.md                # Documentação

```

## 🖥️ Comandos Úteis

```bash
# Iniciar desenvolvimento
npm run dev

# Criar build para produção
npm run build

# Visualizar build
npm run preview

# Instalar nova dependência
npm install nome-do-pacote

# Atualizar dependências
npm update
```

## 💡 Dicas

1. Use compressão de imagens (https://tinypng.com)
2. Mantenha o tema roxo consistente
3. Teste sempre em mobile primeiro
4. Faça backup antes de fazer mudanças grandes
5. Use Git para controlar versões

## ❓ Dúvidas Frequentes

**P: Como adicionar um Instagram link?**
R: No Footer ou Header, adicione:
```tsx
<a href="https://instagram.com/seu_usuario" target="_blank">
  <FiInstagram />
</a>
```

**P: Como mudar a cor roxo?**
R: Edite `src/index.css` e atualize as variáveis CSS.

**P: O formulário envia email?**
R: Atualmente não. Use Formspree ou EmailJS para essa funcionalidade.

**P: Posso usar em mobile?**
R: Sim! O design é totalmente responsivo.

---

**Último atualizado**: 2026-05-26
**Status**: ✅ Pronto para personalização
