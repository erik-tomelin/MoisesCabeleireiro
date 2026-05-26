# Pasta de Imagens

## 📁 Como Usar Esta Pasta

Coloque aqui todas as imagens do seu projeto:

### Imagens Necessárias:

1. **hero.jpg** (recomendado: 1920x1080px)
   - Background da seção Hero
   - Foto de um salão, profissional trabalhando, ou cliente satisfeito

2. **moises.jpg** (recomendado: 600x600px)
   - Foto profissional do Moisés
   - Usada na seção About

3. **corte.jpg** (recomendado: 400x300px)
   - Imagem para card de "Corte e Finalização"

4. **coloracao.jpg** (recomendado: 400x300px)
   - Imagem para card de "Coloração e Mechas"

5. **tratamentos.jpg** (recomendado: 400x300px)
   - Imagem para card de "Tratamentos Capilares"

6. **cliente1.jpg, cliente2.jpg, etc** (recomendado: 300x300px)
   - Fotos de clientes para testemunhas (ao menos 4)

## 📐 Tamanhos Recomendados

| Imagem | Dimensão | Peso |
|--------|----------|------|
| hero.jpg | 1920x1080 | < 500KB |
| moises.jpg | 600x600 | < 200KB |
| corte.jpg | 400x300 | < 100KB |
| coloracao.jpg | 400x300 | < 100KB |
| tratamentos.jpg | 400x300 | < 100KB |
| cliente*.jpg | 300x300 | < 80KB |

## 🎨 Dicas de Qualidade

1. Use formatos: JPG (photos) ou PNG (gráficos)
2. Comprima em: https://tinypng.com
3. Considere WebP para melhor performance
4. Use loading lazy para otimizar

## 🔗 Como Referenciar no Código

```tsx
// Exemplo 1: Import direto
import heroImage from '../assets/images/hero.jpg'
<img src={heroImage} alt="Hero" />

// Exemplo 2: String path (recomendado para Vite)
<img src="/src/assets/images/hero.jpg" alt="Hero" />

// Exemplo 3: URL externa
<img src="https://seu-site.com/imagens/hero.jpg" alt="Hero" />
```

## ✅ Checklist

- [ ] Preparar 9 imagens no mínimo
- [ ] Redimensionar para os tamanhos recomendados
- [ ] Comprimir para otimizar
- [ ] Dar nomes descritivos (em inglês)
- [ ] Colocar nesta pasta
- [ ] Atualizar componentes com os caminhos corretos
- [ ] Testar no navegador
- [ ] Verificar loading performance

## 📞 Precisa de Imagens?

Fontes livres de imagens de qualidade:
- Unsplash: https://unsplash.com (barber, salon)
- Pexels: https://pexels.com (barber, haircut)
- Pixabay: https://pixabay.com (grooming)

Termos para buscar:
- "barber shop"
- "hairstyle"
- "haircut"
- "salon"
- "professional hairdresser"

---

Após adicionar as imagens, atualize os componentes conforme descrito em `PERSONALIZACAO.md`
