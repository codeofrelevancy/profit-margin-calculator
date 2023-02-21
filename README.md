# Getting Started

<p align="center">
  <a href="https://www.youtube.com/@codeofrelevancy" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://paradiseofcreativity.com/wp-content/uploads/2023/02/Code-of-Relevancy-Logo-White-Plain.png" alt="Code of Relevancy">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://www.youtube.com/@codeofrelevancy/videos" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/youtube/channel/subscribers/UCVcJ4UAyjXS2iihmiIa0xXg?style=social" alt="youtube subscribers"></a>
  <a href="https://dev.to/codeofrelevancy" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/DEV-Community-blue" alt="dev community"></a>
  <a href="https://medium.com/@codeofrelevancy" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Medium-Blog-green" alt="medium blog"></a>
  <a href="https://twitter.com/intent/follow?screen_name=codeofrelevancy" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/twitter/follow/codeofrelevancy?style=social" alt="twitter follow"></a>
</p>

# Vite ⚡

<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

Vite (French word for "quick", pronounced [`/vit/`](https://cdn.jsdelivr.net/gh/vitejs/vite@main/docs/public/vite.mp3), like "veet") is a new breed of frontend build tooling that significantly improves the frontend development experience. It consists of two major parts:

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vitejs.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vitejs.dev/guide/api-plugin.html) and [JavaScript API](https://vitejs.dev/guide/api-javascript.html) with full typing support.

[Read the Docs to Learn More](https://vitejs.dev).

## Install Tailwind CSS with Vite

Create your project

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template paths in `tailwind.config.cjs`

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS `index.css`

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process

```bash
npm run dev
```

[Read the Docs to Learn More](https://tailwindcss.com/docs/guides/vite#react).

## Content

Headline

```text
Profit Margin Calculator
```

Description

```text
Optimize your menu item prices to maximize profits by identifying the most effective selling prices.
```

FAQ #1

```text
What is profit margin?
```

```text
 Profit margin indicates the profitability of a product, service, or
business. It’s expressed as a percentage; the higher the number, the
more profitable the business.
```

FAQ #2

```text
How do you calculate gross profit margin?
```

```html
It’s simple to find gross profit margin automatically using the calculator. To
calculate manually, subtract the cost of goods sold (COGS) from the net sales
(gross revenues minus returns, allowances, and discounts). Then divide this
figure by net sales, to calculate the gross profit margin in a percentage.
<br />
<br />
<a
  href="https://www.youtube.com/@codeofrelevancy"
  target="_blank"
  className="text-brand"
>
  Code of Relevancy
</a>
's free profit margin calculator does it for you, but you can also use the
following formula:
<br />
Step 1: X (Net sales) - Y (COGS) = Z<br />
Step 2: Z / X (Net sales) = % Gross profit margin
```

FAQ #3

```text
How do you calculate gross profit margin?
```

```html
Follow these easy steps to calculate a 20% profit margin:
<ol className="list-decimal list-inside">
  <li>Use 20% in its decimal form, which is 0.2</li>
  <li>Subtract 0.2 from 1 to get 0.8</li>
  <li>Divide the original price of your good by 0.8</li>
  <li>
    The resulting number is how much you should charge for a 20% profit margin
  </li>
</ol>
```

FAQ #4

```text
How does the profit margin calculator work?
```

```html
<a
  href="https://www.youtube.com/@codeofrelevancy"
  target="_blank"
  className="text-brand"
>
  Code of Relevancy
</a>
’s free profit margin calculator is fast and easy to use. It simply takes the
markup percentage you enter, adds that in decimal format to the cost, and then
gives you a sale price which reflects the markup.
```
