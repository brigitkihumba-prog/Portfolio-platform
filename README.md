# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Personal Project Showcase

A modern Single Page Application (SPA) built with React and Vite to dynamically display, add, and filter portfolio projects.

## Component Tree
```text
App (Holds `projects` & `searchTerm` state)
 ├── Header
 ├── Routes
 │    ├── Route ("/")
 │    │    ├── AddProject (Local state: `title`, `description`. Handles validation)
 │    │    ├── SearchBar (Controlled input updating `searchTerm`)
 │    │    └── ProjectList (Receives filtered projects)
 │    │         └── Project (Maps individual items)
 │    └── Route ("/project/:id")
 │         └── ProjectDetails (Displays full info via URL params)


## Table of Contents

Overview
Features
Live Demo
Local Setup
Technologies Used
Contact
Roadmap
License

## Overview
Portfolio Platform is a modern Single Page Application (SPA) built with React and Vite. It provides creative agencies, developers, and designers with an interactive showcase to display past work, dynamically add new portfolio projects, filter entries in real time, and navigate detailed project views using client-side routing.

## Features
Browse a clean list of past and present personal projects

Dynamically add new projects using an interactive form with built-in validation

Search and filter projects in real time by title or keyword

View detailed project pages using client-side routing 

Enjoy a responsive, card-based layout designed to adapt across mobile and desktop screens

## Live Demo
Open the app here:

https://github.com/brigitkihumba-prog/Portfolio-platform.git

## Local Setup

## Requirements
Node.js (v18.0 or higher)
npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
https://github.com/brigitkihumba-prog/Portfolio-platform.git

Navigate into the project folder:
cd portfolio-platform

Install project dependencies:
```Bash
npm install

 Open the app in your browser:
   ```text
  http://localhost:5173/

  Technologies Used
HTML5
CSS3
JavaScript (ES6+)
React
Vite
React Router

Roadmap
Potential improvements for future versions:

Connect to a Node.js/Express backend API for asynchronous data fetching

License
MIT License

Copyright © 2026 Brigit Kihumba

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.