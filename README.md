# Bun Monorepo

A TypeScript monorepo built with Bun, featuring a Hono backend, React frontend, and shared types.

## Structure

```
bun-monorepo/
├── packages/
│   ├── server/       # Hono backend
│   ├── client/       # React frontend
│   └── shared/       # Shared TypeScript types
└── package.json      # Root workspace configuration
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Installation

```bash
cd bun-monorepo
bun install
```

### Development

Run both server and client in development mode:

```bash
# Terminal 1 - Start the Hono server
bun run dev:server

# Terminal 2 - Start the React client
bun run dev:client
```

The server will run on `http://localhost:3000` and the client on `http://localhost:5173`.

### Building

```bash
# Build all packages
bun run build

# Build individually
bun run build:server
bun run build:client
```

## Packages

### @monorepo/server

Hono backend server with TypeScript support. Includes:

- REST API endpoints
- CORS enabled
- Shared type definitions from `@monorepo/shared`

### @monorepo/client

React application built with Vite. Features:

- TypeScript support
- Hot module replacement
- Proxy to backend API
- Shared type definitions from `@monorepo/shared`

### @monorepo/shared

Shared TypeScript types and interfaces used across server and client packages.
