# Alto do Pegado - Website

Website institucional do empreendimento Alto do Pegado, desenvolvido com Next.js e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

## Estrutura do Projeto

- `/app` - Páginas e componentes da aplicação
- `/app/components` - Componentes reutilizáveis
- `/app/areas` - Páginas das áreas específicas
- `/public` - Arquivos estáticos (imagens, ícones)

## Como Executar

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/alto-do-pegado.git
```

2. Instale as dependências
```bash
npm install
```

3. Execute o servidor de desenvolvimento
```bash
npm run dev
```

4. Acesse http://localhost:3000

## Páginas

- `/` - Página inicial
- `/areas/contemplativa` - Área Contemplativa
- `/areas/gourmet` - Espaço Gourmet
- `/areas/lazer` - Área de Lazer
- `/staff` - Nossa Equipe
- `/politica-de-privacidade` - Política de Privacidade
- `/termos-de-uso` - Termos de Uso

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Requisitos de Imagens

Para o funcionamento adequado do site, as seguintes imagens precisam ser adicionadas ao diretório `public/`:

### hero-image.jpg
- Dimensões recomendadas: 1920x1080px
- Formato: JPG
- Conteúdo: Vista aérea do condomínio ou imagem de uma casa de alto padrão cercada por natureza
- Otimização: Comprimir para web mantendo qualidade

### map.jpg
- Dimensões recomendadas: 800x600px
- Formato: JPG
- Conteúdo: Mapa da localização do condomínio ou imagem de satélite da região
- Otimização: Comprimir para web mantendo qualidade

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar servidor de produção
npm start
```

## Estrutura do Projeto

```
alto-do-pegado/
├── app/
│   ├── components/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── public/
│   │   ├── icons/
│   │   │   ├── nature.svg
│   │   │   ├── security.svg
│   │   │   └── location.svg
│   │   ├── hero-image.jpg
│   │   └── map.jpg
│   ├── package.json
│   └── README.md
```

## Customização

O site utiliza um esquema de cores que pode ser personalizado através do arquivo `app/globals.css`:

- Primary: #2C5530 (Verde escuro)
- Secondary: #8B9D83 (Verde sage)
- Accent: #D4B59E (Bege)
- Text: #333333 (Cinza escuro)

## Contato

Para mais informações ou suporte:
- Email: contato@altodopegado.com.br
- Telefone: (21) 99999-9999
