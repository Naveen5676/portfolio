# Naveen Wali — React Portfolio

A standalone React + Vite portfolio using JavaScript and plain CSS. Includes the current portfolio design, responsive layouts, category filters, an exclusive experience accordion, an illustrative seat-booking demo, and your resume PDF. No backend, API keys, database, or ChatGPT subscription is needed to run the exported application.

## Run locally

Install Node.js 22.12 or newer (Node 22 LTS recommended), extract this folder, then open a terminal inside it:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. In VS Code or Cursor, use File → Open Folder to open this folder.

## Production build

```sh
npm run build
npm run preview
```

Vite creates `dist/`. `npm run preview` lets you inspect the production build locally.

## Deploy to Vercel

1. Create a GitHub repository and push the contents of this folder. Include package.json, package-lock.json, src/, public/, index.html, vite.config.js and vercel.json. Do not upload node_modules/ or dist/.
2. In Vercel, choose Add New → Project, and import that repository.
3. Use these settings:

| Setting               | Value                             |
| --------------------- | --------------------------------- |
| Framework preset      | Vite                              |
| Root directory        | Folder containing package.json    |
| Install command       | npm install                       |
| Build command         | npm run build                     |
| Output directory      | dist                              |
| Node.js               | 22.x or a supported newer version |
| Environment variables | None                              |

4. Click Deploy. Future commits to your production branch trigger new deployments.

`vercel.json` already declares the framework, build command, and output directory. This is a single-page portfolio with anchor navigation; no client router or catch-all rewrite is necessary.

## Edit the portfolio

| File                           | Purpose                                              |
| ------------------------------ | ---------------------------------------------------- |
| src/App.jsx                    | Overall section order                                |
| src/components/Header.jsx      | Name and navigation                                  |
| src/components/Hero.jsx        | Intro, headline and resume link                      |
| src/components/Projects.jsx    | Project descriptions and links                       |
| src/components/BookingDemo.jsx | Seat booking demo using React state                  |
| src/components/Experience.jsx  | Work experience and controlled accordion             |
| src/components/Toolkit.jsx     | Skills, filters and AI highlight                     |
| src/components/Education.jsx   | Education and training                               |
| src/components/Contact.jsx     | Email, social links and footer                       |
| src/styles.css                 | Colors, typography, layout and responsive styles     |
| public/Naveen-Wali-Resume.pdf  | Replace this file to update your downloadable resume |
| index.html                     | Page title and search description                    |

The CSS color variables are at the start of src/styles.css. Project links currently point to your GitHub profile because the supplied resume used that URL; replace them with exact repository URLs if desired.

The booking lab is an illustrative browser-only interaction. Reservations reset on reload and do not call the real TicketFlow backend. Contact uses a mailto link, not a contact-form backend.

## Official references

- Vite: https://vite.dev/guide/
- Vercel + Vite: https://vercel.com/docs/frameworks/frontend/vite

This export is independent of the ChatGPT-hosted site. Editing or deploying it does not update that site automatically.
