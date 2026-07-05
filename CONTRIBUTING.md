# Contributing

First of all, thank you for considering contributing to **Production Backend Template**! 🎉

Whether you're fixing a bug, improving documentation, suggesting a new feature, or refactoring existing code, your contributions are greatly appreciated.

---

## Ways to Contribute

You can contribute by:

- Reporting bugs
- Suggesting new features
- Improving documentation
- Fixing issues
- Refactoring code
- Improving project structure
- Adding tests
- Improving developer experience

---

## Getting Started

### 1. Fork the repository

Click the **Fork** button on GitHub.

### 2. Clone your fork

```bash
git clone https://github.com/<your-username>/production-backend-template.git
```

### 3. Navigate into the project

```bash
cd production-backend-template
```

### 4. Install dependencies

```bash
pnpm install
```

### 5. Create a new branch

```bash
git checkout -b feat/your-feature-name
```

---

## Development

Start the development server:

```bash
pnpm dev
```

Before opening a Pull Request, make sure all of the following commands pass:

```bash
pnpm lint
```

```bash
pnpm typecheck
```

```bash
pnpm build
```

---

## Coding Guidelines

Please follow these guidelines when contributing:

- Write clean and readable code.
- Follow the existing project structure.
- Keep functions focused on a single responsibility.
- Prefer meaningful variable and function names.
- Avoid unnecessary abstractions.
- Keep changes small and focused.
- Update documentation when necessary.

---

## Commit Messages

This project follows the **Conventional Commits** specification.

Examples:

```text
feat: add authentication middleware

fix: handle invalid request payload

docs: improve README

refactor: simplify logger configuration

chore: update dependencies
```

---

## Pull Requests

Before submitting a Pull Request:

- Ensure your branch is up to date.
- Make sure the project builds successfully.
- Verify that linting passes.
- Update documentation if your changes require it.

Please provide a clear description of your changes and the motivation behind them.

---

## Questions

If you have questions or suggestions, feel free to open a GitHub Discussion or Issue.

Thank you for helping improve this project! 🚀
