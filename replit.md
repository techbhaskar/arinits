# ARIN IT Solutions Website

## Overview
A premium, glassmorphic static website for ARIN IT Solutions - a software development and consulting company. Built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack
- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 5.2.2
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.3.6
- **Routing**: React Router DOM 6.20.0

## Project Structure
- `src/` - Source code
  - `components/` - Reusable React components (Navbar, Footer, Logo, SEO)
  - `pages/` - Page components (Home, Contact, Portfolio, Team, Blog, Services)
  - `App.tsx` - Main application component with routing
  - `main.tsx` - Entry point
  - `index.css` - Global styles and Tailwind imports
- `public/` - Static assets (images, favicon, robots.txt, sitemap.xml)
- `scripts/` - Build scripts (sitemap generation)

## Development
The project is configured to run in the Replit environment:
- Dev server runs on port 5000 (required for Replit)
- Host configured as 0.0.0.0 to work with Replit's proxy
- Hot Module Reload (HMR) configured for WebSocket connections

## Features
- Modern glassmorphic design with orange/red color scheme
- SEO optimized with meta tags and sitemap
- Responsive layout for all screen sizes
- Multiple service pages (Software Development, IT Consulting, Web Development, App Development, Technology Solutions)
- Lazy loading for optimal performance
- Contact form with validation
- Professional portfolio and team pages
- Blog section

## Deployment
Configured for Replit Autoscale deployment:
- Build command: `npm run build` (includes sitemap generation)
- Run command: `npx vite preview --host 0.0.0.0 --port 5000`

## Recent Changes
- 2025-11-03: Initial Replit environment setup
  - Configured Vite for Replit (port 5000, host 0.0.0.0)
  - Set up dev workflow
  - Configured deployment settings
  - Installed @types/node for TypeScript support
