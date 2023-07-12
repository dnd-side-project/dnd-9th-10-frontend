<div align="center">
<h1>9-10 Frontend</h1>

<p>Description</p>

![build](https://github.com/BoBeenLee/nx-react-code-sharing/actions/workflows/ci-cd.yml/badge.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/bobeenlee/nx-react-code-sharing-starter/badge)](https://www.codefactor.io/repository/github/bobeenlee/nx-react-code-sharing-starter)
![lastUpdated](https://img.shields.io/github/last-commit/BoBeenLee/nx-react-code-sharing-starter/master)

</div>

## ✨ Features

- ⚡️ Next.js 13
- ⚛️ React 18
- 📱 React Native(WIP)
- ✨ TypeScript
- 📚 Storybook - Build component driven UIs faster
- 🏗 TurboRepo - Smart, Fast and Extensible Build System
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using @nx-react-code-sharing/ prefix (rename prefix)
- 📏 ESLint — Find and fix problems in your code, also will auto sort your imports
- 💖 Prettier — Format your code consistently
- 👷 Github Actions — Lint, Test your code on Master Branch, Automatic Storybook Deployment

## 📂 Directory structure

    root
    ├── apps
    ├──── web              # nextjs app
    ├──── native           # react native app
    ├── packages
    ├──── tsconfig         # 공통 tsconfig 설정
    ├──── ui               # WIP
    ├─────── web
    ├────────── ui         # web ui components, styles (ex) Button, Text... )
    ├──── utils            # shared utils (ex) string, datetime, object, uri ...)
    ├──── stores           # shared state management (ex) Toast, Notification... )
    ├──── apis             # initalize api setup, add api middleware
    ├──── hooks            # shared hooks (ex) timer, debounce...)
    ├──── libs          # primitive libs ex) logging, storage, analytics
    └── README.md

## ⚡️ Getting Started

### 1. Install dependencies

```bash
yarn
```

### 2. Run the development server

You can start the nextjs using this command:

```bash
yarn dev
```

### 3. Change defaults

There are some things you need to change including title, urls, favicons, etc.

Find all texts with `nx-react-code-sharing`, then change the package name

## 📚 Convention

### Naming Convention

- 파일 이름 네이밍
  - 하이픈 형식 ex) z-index.ts, login-modal.tsx ...
- 컴포넌트명 네이밍
  - ex) const LoginModal = () => { ... }
- 패키지, 폴더명 단수or복수 네이밍

  - 여러파일이 들어갈거같다면 복수명으로
    ex) shared/styles, shared/libs ...
  - 고유 기능을 의미한다면 단수
    ex) app/email, app/login ...

### Commit Convention

- This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Deployment

### Dev Deployment

#### Zeit

#### Storybook
