<p align="center">
  <a href="" rel="noopener">
 <img src="https://plus.unsplash.com/premium_photo-1661962910391-cfe1ea4dfe90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project logo"></a>
</p>
<h3 align="center">Toolbox</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

<p align="center">
  This project will be an fullstack project with the goal to let it available to the public short functionalities that you'll need some day or you'll use in you day-to-day.
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Future Scope](#future_scope)
- [Getting started](#getting_started)
- [Authors](#authors)

## 🧐 Problem Statement <a name = "problem_statement"></a>

When we need some short functions as document converting, password generation, or short some URL, we have to go and search for so many websites, this will generate a memory problem in your machine.

## 💡 Idea / Solution <a name = "idea"></a>

Unify all these functions to one simpel and intuitive website to all public with all ages.

This repository will be the frontend of it.

It will be one section for each short functionality

## 🚀 Future Scope <a name = "future_scope"></a>

- [x] URL Shortener API endpoint
- [x] PDF converter API endpoint
- [x] Password generator API endpoint

## 🏁 Getting Started <a name = "getting_started"></a>

Clone the project
```
git clone https://github.com/pedrohrbarros/toolbox
```

### Prerequisites

Install [Node.js](https://nodejs.org/en/download/package-manager/current)

### Installing

Install all dependecies

- With NPM
```
npm install
```

- With Bun
```
bun install
```

## 🎈 Usage <a name="usage"></a>

- URL Shortener: Insert your URL and click in the button to generate the URL shortened, click again to copy if successfully shortened, otherwise click again to generate another URL shortened, after you copy the URL the state of the input will be reset, so that you can input another URL. The button will be reset if you change the input.

- PDF Converter: Choose only one .docx document and click in the button to convert the docx file to .pdf file, click again to download it if successfully converted, otherwise, click again to try to convert again. If the file inserted is invalid the bacend will return an error, the maximum files allowed is 1.

- Secret generator: Select your specifications (Secret length, if you want special, uppercase or lowercase characters, and select if you want numbers in your secret) click in the button to generate your secret, click again to copy if successfully generated, click again to generate another one with selected specifications. Minimum length for the secret is 1, and there is no maximum. 

## ⛏️ Built With <a name = "tech_stack"></a>

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## ✍️ Authors <a name = "authors"></a>

- [@pedrohrbarros](https://github.com/pedrohrbarros)

## 📝 License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).