# Test Outsera

Frontend application developed as a technical test to list and filter movies from the Golden Raspberry Awards.

---

## 🇺🇸 English

### Prerequisites

- **Node.js**: version 18 or higher.
- **Package Manager**: pnpm, npm, or yarn.

### Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Configure Environment Variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MOVIES_API_URL=https://challenge.outsera.tech/api
   NEXT_PUBLIC_LIST_PAGE_SIZE=15
   NEXT_PUBLIC_LIST_PAGE_PAGINATION_BUTTONS_LIMIT=5
   TOP_STUDIOS_WITH_WINNERS=3
   ```

### Running the Application

To start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🇧🇷 Português

### Pré-requisitos

- **Node.js**: versão 18 ou superior.
- **Gerenciador de Pacotes**: pnpm, npm ou yarn.

### Instalação

1. Instale as dependências:

   ```bash
   pnpm install
   ```

2. Configure as Variáveis de Ambiente:
   Crie um arquivo `.env.local` no diretório raiz e adicione o seguinte:
   ```env
   MOVIES_API_URL=https://challenge.outsera.tech/api
   NEXT_PUBLIC_LIST_PAGE_SIZE=15
   NEXT_PUBLIC_LIST_PAGE_PAGINATION_BUTTONS_LIMIT=5
   TOP_STUDIOS_WITH_WINNERS=3
   ```

### Rodando a Aplicação

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).
