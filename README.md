# 🍷 Wine Selector - Frontend

Interface web ultra premium para recomendação personalizada de vinhos baseada em ocasião, intimidade e harmonização gastronômica.

## 🎨 Design

Design luxuoso com tema dark, gradientes dourados e animações elegantes que transmitem sofisticação e exclusividade.

## ✨ Features

- 🎭 **10 Ocasiões Sociais** - De reuniões de negócios a encontros íntimos
- 🤝 **10 Níveis de Intimidade** - Desde primeiro encontro até familiar
- 🍽️ **12 Tipos de Pratos** - Harmonização completa
- 🍷 **7 Perfis de Vinho** - Recomendações personalizadas
- 🎯 **Sistema de Alternativas** - Sugestão secundária quando scores próximos
- ✨ **Animações Suaves** - Transições elegantes e fade-in escalonado
- 📱 **Design Responsivo** - Adaptado para mobile, tablet e desktop
- 🌙 **Tema Noturno Premium** - Estética luxuosa com tons de vinho e ouro

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS 3** - Estilização utilitária
- **Axios** - Requisições HTTP
- **JavaScript ES6+** - Linguagem moderna

## 📐 Arquitetura
```
src/
├── components/       # Componentes React
│   ├── Welcome.jsx
│   ├── OccasionStep.jsx
│   ├── IntimacyStep.jsx
│   ├── DishStep.jsx
│   └── Result.jsx
├── services/        # Integração com API
│   └── api.js
├── constants/       # Enums e configurações
│   └── enums.js
├── App.jsx         # Orquestrador principal
└── index.css       # Estilos globais
```

## 🎨 Paleta de Cores
```css
/* Cores principais */
Vinho Escuro: #7d1a33 - #4a0f1e
Dourado: #ffd700 - #ffc107
Preto Premium: #0a0a0a - #121212
```

## 🔧 Como Rodar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Backend rodando em `http://localhost:8080`

### Instalação
```bash
# Clonar repositório
git clone https://github.com/AlvaroDultra/wine-selector-front.git
cd wine-selector-front

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

## 🌐 Integração com Backend

A aplicação consome a API REST do backend:
```javascript
// Endpoint principal
POST http://localhost:8080/api/recommendation

// Payload
{
  "occasion": "JANTAR_ROMANTICO",
  "intimacyLevel": "PRIMEIRO_ENCONTRO",
  "mainDish": "CARNES_VERMELHAS"
}

// Response
{
  "recommendedProfile": "TINTO_MEDIO",
  "displayName": "Tinto Médio",
  "description": "Vinho tinto equilibrado...",
  "justification": "Harmoniza perfeitamente...",
  "score": 31,
  "alternativeProfile": "TINTO_ENCORPADO",
  "alternativeScore": 33
}
```

## 🎯 Fluxo de Uso

1. **Tela Inicial** - Apresentação do sistema
2. **Seleção de Ocasião** - Escolha o contexto social
3. **Nível de Intimidade** - Defina a proximidade
4. **Prato Principal** - Selecione o menu
5. **Resultado** - Recomendação personalizada com justificativa

## 🎨 Animações

- **Fade-in Escalonado** - Cards aparecem suavemente um após o outro
- **Transições de Tela** - Overlay suave entre mudanças de página
- **Hover Effects** - Interações elegantes nos cards
- **Float Animation** - Elementos flutuantes sutis
- **Gold Shimmer** - Efeito de brilho dourado

## 📱 Responsividade

- **Mobile First** - Design otimizado para smartphones
- **Breakpoints** - md (768px), lg (1024px)
- **Grid Adaptável** - Layouts flexíveis por device

## 👨‍💻 Autor

**Alvaro Dultra**
- GitHub: [@AlvaroDultra](https://github.com/AlvaroDultra)
- LinkedIn: [Alvaro Dultra](https://linkedin.com/in/alvarodultra)

## 🔗 Repositórios Relacionados

- [Backend (Spring Boot)](https://github.com/AlvaroDultra/wine-selector-backend)

## 📄 Licença

MIT License

---

⭐ Se este projeto te inspirou, considere dar uma estrela!

🍷 **Crafted with precision and elegance**
