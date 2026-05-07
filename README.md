# Test Outsera

## 🇧🇷 Português

Aplicação Frontend desenvolvida como teste técnico para listar e filtrar filmes indicados e vencedores do **Golden Raspberry Awards (Framboesa de Ouro)**.

### Funcionalidades

A aplicação possui duas visualizações principais:

1. **Dashboard** (`/`)
   - **Anos com Múltiplos Vencedores:** Lista os anos que tiveram mais de um filme vencedor.
   - **Top Estúdios:** Exibe os 3 estúdios com o maior número de vitórias. Sendo configurável via variável de ambiente `TOP_STUDIOS_WITH_WINNERS` (Default 3).
   - **Intervalo de Vitórias de Produtores:** Mostra os produtores com o maior e o menor intervalo entre duas vitórias consecutivas.
   - **Vencedores por Ano:** Permite buscar os filmes vencedores de um ano específico.

2. **Lista de Filmes** (`/list`)
   - Tabela paginada contendo todos os filmes (vencedores e indicados).
   - Filtro integrado para exibir apenas os vencedores ou todos os filmes.
   - Sincronização de estado da tabela com a URL (filtros e paginação podem ser compartilhados via link).
   - A quantidade de itens por página é definida por `NEXT_PUBLIC_LIST_PAGE_SIZE` (Default 15) e a quantidade de botões de paginação é definida por `NEXT_PUBLIC_LIST_PAGE_PAGINATION_BUTTONS_LIMIT` (Default 5).

### Tecnologias e Arquitetura

O projeto foi construído focando em performance, testabilidade e um design system consistente.

- **Framework:** [Next.js (App Router)](https://nextjs.org/) utilizando React 19.
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) integrado com componentes modulares baseados no [Shadcn UI](https://ui.shadcn.com/) (Radix UI, `class-variance-authority`, `clsx`, `tailwind-merge`).
- **Gerenciamento de Estado de Dados:** [TanStack Query](https://tanstack.com/query/latest) para fetching client-side eficiente, cache e sincronização da interface.
- **Gerenciamento de URL:** [`nuqs`](https://nuqs.47ng.com/) para manipulação type-safe e performática de search params (filtros e páginas na URL).
- **Injeção de Dependências (DI):** [Brandi](https://brandi.js.org/) (`brandi`) para desacoplar a camada de UI da camada de serviços (API), facilitando a criação de mocks durante os testes.
- **Testes:** Ampla cobertura de testes unitários utilizando [Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/).

### Estrutura do Projeto

- `app/`: Rotas principais da aplicação (Dashboard e Listagem) e configurações globais do layout.
- `components/`:
  - `dashboard/`: Componentes específicos da tela de início.
  - `list/`: Componentes da tabela de filmes e paginação.
  - `shared/`: Componentes reutilizáveis em diferentes contextos.
  - `ui/`: Componentes base do design system (Shadcn/Tailwind).
- `services/`: Interfaces e implementações das chamadas à API, separados em clientes e servidores para uso de Injeção de Dependência.
- `lib/`: Utilitários, configurações do container Brandi (DI) e instâncias do TanStack Query.
- `__tests__/`: Arquivos de testes.

### Rodando o Projeto

#### Pré-requisitos

- **Node.js**: versão 22.20.0 ou superior.
- **Gerenciador de Pacotes**: `pnpm` (recomendado), `npm` ou `yarn`.

#### Passo a passo

1. Instale as dependências:

   ```bash
   pnpm install
   ```

2. Configure as Variáveis de Ambiente:
   Crie um arquivo `.env.local` na raiz do projeto contendo as seguintes configurações:

   ```env
   MOVIES_API_URL=https://challenge.outsera.tech/api
   NEXT_PUBLIC_LIST_PAGE_SIZE=15
   NEXT_PUBLIC_LIST_PAGE_PAGINATION_BUTTONS_LIMIT=5
   TOP_STUDIOS_WITH_WINNERS=3
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

### Rodando os Testes

Para executar a suíte completa de testes unitários:

```bash
pnpm test
```

Para verificar a cobertura de testes:

```bash
pnpm test:coverage
```

---

## 🇺🇸 English

Frontend application developed as a technical test to list and filter nominated and winning movies from the **Golden Raspberry Awards (Razzies)**.

### Features

The application features two main views:

1. **Dashboard** (`/`)
   - **Years with Multiple Winners:** Lists years that had more than one winning movie.
   - **Top Studios:** Displays the top 3 studios with the most wins. Configurable via `TOP_STUDIOS_WITH_WINNERS` (Default 3) environment variable.
   - **Producers Win Intervals:** Shows the producers with the longest and shortest gap between consecutive wins.
   - **Movie Winners by Year:** Allows searching for winning movies of a specific year.

2. **Movie List** (`/list`)
   - Paginated table containing all movies (winners and nominees).
   - Integrated filter to display only winners or all movies.
   - Table state synchronization with the URL (filters and pagination can be shared via link).
   - The number of items per page is defined by `NEXT_PUBLIC_LIST_PAGE_SIZE` (Default 15) and the number of pagination buttons is defined by `NEXT_PUBLIC_LIST_PAGE_PAGINATION_BUTTONS_LIMIT` (Default 5).

### Technologies & Architecture

The project was built focusing on performance, testability, and a consistent design system.

- **Framework:** [Next.js (App Router)](https://nextjs.org/) utilizing React 19.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) integrated with modular components based on [Shadcn UI](https://ui.shadcn.com/) (Radix UI, `class-variance-authority`, `clsx`, `tailwind-merge`).
- **Data Fetching & State:** [TanStack Query](https://tanstack.com/query/latest) for efficient client-side fetching, caching, and UI synchronization.
- **URL State Management:** [`nuqs`](https://nuqs.47ng.com/) for type-safe and performant search parameter manipulation (filters and pages in URL).
- **Dependency Injection (DI):** [Brandi](https://brandi.js.org/) (`brandi`) to decouple the UI layer from the services (API) layer, making it easy to mock data during testing.
- **Testing:** Comprehensive unit test coverage using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/).

### Project Structure

- `app/`: Main application routes (Dashboard and List) and global layout configurations.
- `components/`:
  - `dashboard/`: Components specific to the home screen.
  - `list/`: Components for the movie table and pagination.
  - `shared/`: Reusable components across different contexts.
  - `ui/`: Base design system components (Shadcn/Tailwind).
- `services/`: Interfaces and implementations for API calls, separated into client/server for Dependency Injection use.
- `lib/`: Utilities, Brandi container configurations (DI), and TanStack Query instances.
- `__tests__/`: Test files.

### Running the Project

#### Prerequisites

- **Node.js**: version 22.20.0 or higher.
- **Package Manager**: `pnpm` (recommended), `npm` or `yarn`.

#### Step by Step

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

3. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at: [http://localhost:3000](http://localhost:3000)

### Running Tests

To run the complete suite of unit tests:

```bash
pnpm test
```

To check test coverage:

```bash
pnpm test:coverage
```
