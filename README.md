<p align="center">
  <img src="./assets/banner.png" alt="Production Backend Template Banner" width="100%">
</p>

<h1 align="center">🚀 Production Backend Template</h1>

<p align="center">
  A production-ready <strong>Express.js backend template</strong> built with <strong>TypeScript</strong> and modern best practices.
</p>

<p align="center">
  Build scalable, maintainable, and production-ready REST APIs with a clean architecture and developer-friendly tooling.
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/amandotyadav/production-backend-template?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/github/stars/amandotyadav/production-backend-template?style=for-the-badge" alt="Stars">
  <img src="https://img.shields.io/github/forks/amandotyadav/production-backend-template?style=for-the-badge" alt="Forks">
  <img src="https://img.shields.io/github/issues/amandotyadav/production-backend-template?style=for-the-badge" alt="Issues">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-24.x-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express" alt="Express">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Zod-Validation-3068B7?style=flat-square" alt="Zod">
  <img src="https://img.shields.io/badge/Pino-Logger-F9A825?style=flat-square" alt="Pino">
  <img src="https://img.shields.io/badge/License-MIT-success?style=flat-square" alt="MIT">
</p>

---

## 📖 Overview

**Production Backend Template** is an open-source **Express.js + TypeScript backend starter** designed to eliminate repetitive project setup and provide a clean, scalable foundation for building REST APIs.

Instead of spending time configuring logging, validation, middleware, error handling, and project structure for every new project, you can start with a production-ready architecture and focus on building features.

This template follows modern backend development practices while keeping the codebase simple, modular, and easy to extend.

---

## ✨ Features

- ⚡ Express 5
- 📦 TypeScript
- 🏗️ Modular Project Structure
- 🔥 API Versioning
- 🛡️ Helmet Security Headers
- 🌐 CORS
- 🗜️ Response Compression
- 📝 Structured Logging with Pino
- ✅ Environment Validation with Zod
- ✔️ Request Validation
- 🚨 Centralized Error Handling
- 📨 Consistent API Response Helpers
- 🎯 Path Aliases
- 🧹 ESLint
- 💅 Prettier
- 🪝 Husky
- 📌 lint-staged
- ✅ Conventional Commits

---

## 📂 Project Structure

```text
src
├── api
├── core
│   ├── config
│   ├── database
│   ├── errors
│   ├── http
│   ├── jobs
│   ├── logger
│   ├── middleware
│   ├── plugins
│   ├── routes
│   ├── server
│   ├── shared
│   ├── utils
│   └── validation
│
├── modules
│   └── health
│
├── app.ts
└── server.ts
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/amandotyadav/production-backend-template.git
```

```bash
cd production-backend-template
```

### Install dependencies

```bash
pnpm install
```

### Configure environment variables

Create a `.env` file.

```env
PORT=8080
NODE_ENV=development
APP_NAME=production-backend
```

### Start the development server

```bash
pnpm dev
```

The server will be available at:

```
http://localhost:8080
```

---

## 📜 Available Scripts

| Command             | Description                   |
| ------------------- | ----------------------------- |
| `pnpm dev`          | Start development server      |
| `pnpm build`        | Build the application         |
| `pnpm start`        | Run the production build      |
| `pnpm lint`         | Run ESLint                    |
| `pnpm lint:fix`     | Automatically fix lint issues |
| `pnpm format`       | Format the project            |
| `pnpm format:check` | Check formatting              |
| `pnpm typecheck`    | Run TypeScript type checking  |

---

## 🏛️ Architecture

The template follows a layered architecture to keep responsibilities separated and the codebase maintainable.

```text
Request
    │
    ▼
Express
    │
    ▼
Middleware
    │
    ▼
Routes
    │
    ▼
Controllers
    │
    ▼
Services
    │
    ▼
Response
```

---

## 🛠️ Tech Stack

| Technology | Purpose            |
| ---------- | ------------------ |
| Express 5  | Web Framework      |
| TypeScript | Static Type Safety |
| Zod        | Runtime Validation |
| Pino       | Structured Logging |
| Helmet     | Security Headers   |
| ESLint     | Code Linting       |
| Prettier   | Code Formatting    |
| Husky      | Git Hooks          |

---

## 🎯 Design Principles

This project is built around a few core principles:

- Keep business logic out of the template.
- Follow a clean and modular architecture.
- Prefer composition over unnecessary abstraction.
- Validate all external input.
- Centralize configuration and error handling.
- Write type-safe, maintainable code.
- Build for scalability without sacrificing simplicity.

---

## 📌 Current Status

This template currently provides the core backend infrastructure required to start a production-ready Express.js application.

Additional infrastructure such as API documentation, testing, CI/CD, and observability will be added incrementally.

---

## 🤝 Contributing

Contributions, ideas, and improvements are always welcome.

If you'd like to improve the project, feel free to:

- Open an issue
- Submit a pull request
- Suggest new features
- Report bugs

---

## ⭐ Support

If you find this project helpful, please consider giving it a **⭐ Star**.

It helps the project reach more developers and motivates continued development.

---

## 📄 License

This project is licensed under the **MIT License**.
