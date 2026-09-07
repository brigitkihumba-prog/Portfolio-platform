# Portfolio Platform

A dynamic Single Page Application (SPA) Built With React, Vite, CSS, and React Router

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Last Commit](https://img.shields.io/badge/Last%20Commit-2026%20Update-brightgreen)]()

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Local Setup](#local-setup)
- [Technologies Used](#technologies-used)
- [Contact](#contact)
- [Roadmap](#roadmap)
- [License](#license)

## Overview

Portfolio Platform is a scalable, modern web presence designed for creative agencies and freelance developers. Built entirely as a Single Page Application (SPA), it solves the problem of manual portfolio updates by allowing administrators to dynamically inject new project items directly into a live feed. Clients can browse past work, search for specific keywords, and navigate through dedicated project detail pages seamlessly without ever reloading the browser.



## Features

 **Dynamic Portfolio Feed:** Automatically renders a clean list of project cards, complete with titles, descriptions, and dynamic data rendering.
 **Real-Time Search & Filtering:** Evaluates user keystrokes instantly to filter projects across titles and descriptions using dynamic string matching.
 **Interactive Form Submission:** A centralized submission interface allows for the addition of new projects, updating the application's global feed instantly.
 **Client-Side Routing:** Leverages `react-router-dom` to provide seamless, flicker-free page transitions between the main portfolio landing page and dedicated project views (`/project/:id`).
 **Robust Input Validation:** Form controls include sanitization logic (`String.prototype.trim()`) to prevent empty inputs or accidental whitespace submissions, paired with immediate user error feedback.
 **Responsive Architecture:** Accessible styling built with flexible CSS layout models that adjust gracefully across mobile, tablet, and desktop viewports.

## Live Demo

Open the application here:

https://github.com/brigitkihumba-prog/Portfolio-platform.git

## Local Setup

### Requirements

Node.js (v18.0 or higher)
 npm (Node Package Manager)
 A modern web browser
 Code editor (VS Code recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/brigitkihumba-prog/Portfolio-platform.git

2. Navigate into the project folder:

   ```Bash
cd Portfolio-platform
Install project dependencies:

  ```Bash
npm install

```Bash
npm run dev
Open the app in your browser:

Plaintext
http://localhost:5173


Technologies Used
HTML5 & CSS3

JavaScript (ES6+)

React (Hooks, Context, Router)

Vite

JSON Server (Simulated REST API)

Roadmap
Potential improvements for future enterprise production iterations:

Backend API Integration: Replace local state initialization with asynchronous useEffect fetch requests connecting to a Node.js / Express backend server.

CRUD Capabilities: Expand item controls to include update (edit) and delete action buttons on individual project items.

Media Management: Integrate image upload support allowing users to attach custom thumbnails and screenshot galleries to each project.

License
MIT License

Copyright © 2026 Brigit Kihumba

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.