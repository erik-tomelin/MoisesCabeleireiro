# Guia de Instalação e Configuração

## ⚙️ Instalação

### Pré-requisitos
- Node.js versão 16 ou superior
- npm ou yarn

### Passos

1. **Abra o terminal na pasta do projeto:**
   ```bash
   cd c:\Users\proje\OneDrive\Documentos\moises
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
   
   Isso instalará:
   - react
   - react-dom
   - react-icons
   - vite (build tool)

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra no navegador:**
   ```
   http://localhost:5173
   ```

## 🖼️ Adicionando Imagens

### 1. Crie uma pasta de imagens
```
src/
├── assets/
│   └── images/
│       ├── hero.jpg
│       ├── about.jpg
│       └── ...
```

### 2. Atualize os componentes

#### Para a seção Hero
Edite `src/components/sections/Hero.tsx`:
```tsx
// Adicione uma imagem de fundo
background: url('/src/assets/images/hero.jpg') center/cover;
```

#### Para a seção About
Edite `src/components/sections/About.tsx`:
Substitua o `imagePlaceholder` por uma imagem real.

#### Para Services
Edite `src/components/sections/Services.tsx`:
Adicione imagens reais aos cards.

#### Para Testimonials
Edite `src/components/sections/Testimonials.tsx`:
Substitua o placeholder circular por foto de perfil real.

## 🔧 Configurações

### Alterar Informações de Contato
Edite `src/components/sections/Contact.tsx`:

```tsx
// Telefone
<p>(11) 99999-9999</p>  // Altere para o número real

// Email
<p>moises@email.com</p>  // Altere para o email real

// Google Maps
// Substitua a URL de embed do iframe
```

### Alterar Tema de Cores
Edite `src/index.css`:

```css
:root {
  --primary-purple: #8B5CF6;      /* Roxo primário */
  --dark-purple: #6D28D9;         /* Roxo escuro */
  --light-purple: #A78BFA;        /* Roxo claro */
  --accent-purple: #C4B5FD;       /* Roxo acento */
}
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push para GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/moises.git
   git push -u origin main
   ```

2. Acesse https://vercel.com e conecte seu repositório
3. O deploy será automático a cada push

### Netlify

1. Crie uma build:
   ```bash
   npm run build
   ```

2. Faça upload da pasta `dist` no Netlify

## 📱 Testando Responsividade

- **Desktop**: 1920x1080px
- **Tablet**: 768x1024px
- **Mobile**: 375x667px

Use o DevTools do navegador (F12) para testar.

## ✅ Checklist Antes de Publicar

- [ ] Substituir placeholder de imagens
- [ ] Atualizar telefone de contato
- [ ] Atualizar email
- [ ] Atualizar endereço/mapa
- [ ] Revisar textos das testemunhas
- [ ] Testar em mobile, tablet e desktop
- [ ] Testar formulário de contato
- [ ] Testar navegação (links funcionam?)
- [ ] Verificar velocidade de carregamento

## 🆘 Troubleshooting

### Porta já em uso
Se a porta 5173 estiver ocupada:
```bash
npm run dev -- --port 3000
```

### Problemas com imagens
- Verifique se as imagens estão na pasta correta
- Use caminhos relativos corretos
- Não use espaços nos nomes dos arquivos

### Build falha
Limpe a cache e instale de novo:
```bash
rm -rf node_modules
npm install
npm run build
```

## 📞 Suporte

Para problemas ou dúvidas, consulte a documentação:
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
