<div align="center">
<h1>9-10 Frontend</h1>

<p>Description</p>

![build](https://github.com/dnd-side-project/dnd-9th-10-frontend/actions/workflows/ci.yml/badge.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/dnd-side-project/dnd-9th-10-frontend/badge)](https://www.codefactor.io/repository/github/dnd-side-project/dnd-9th-10-frontend)
![lastUpdated](https://img.shields.io/github/last-commit/dnd-side-project/dnd-9th-10-frontend/main)

</div>

## ✨ Features

- ⚡️ Next.js 13
- ⚛️ React 18
- 📱 React Native(WIP)
- ✨ TypeScript
- 📚 Storybook - Build component driven UIs faster
- 🚀 PWA - Native app experience
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
    ├──── shared
    ├────── utils          # shared utils (ex) string, datetime, object, uri ...)
    ├────── stores         # shared state management (ex) Toast, Notification... )
    ├────── apis           # initalize api setup, add api middleware
    ├────── hooks          # shared hooks (ex) timer, debounce...)
    ├────── libs           # primitive libs ex) logging, storage, analytics
    └── README.md

## ⚡️ Getting Started

### 1. Install dependencies

```bash
yarn --registry=https://registry.yarnpkg.com
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
  - 카멜케이스 형식 ex) zIndex.ts, LoginModal.tsx ...
- 컴포넌트명 네이밍
  - ex) const LoginModal = () => { ... }
- 패키지, 폴더명 단수or복수 네이밍

  - 여러파일이 들어갈거같다면 복수명으로
    ex) shared/styles, shared/libs ...
  - 고유 기능을 의미한다면 단수
    ex) app/email, app/login ...

### Commit Convention

- This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Gitflow

- git flow release start, finish 2.0.16
- git flow hotfix start, finish 2.0.16-hotfix.0

## Deployment

#### Zeit

- https://bbok.vercel.app/

#### Storybook

- https://dnd-side-project.github.io/dnd-9th-10-frontend/

#### Server

- https://bbok.kro.kr/swagger-ui/index.html
