# Rudy Alfarizi - Muthowwif Profesional

A professional website for Rudy Alfarizi, a Umrah & Haji guide based in Makkah & Madinah, Saudi Arabia.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS v3 with shadcn/ui components
- **Routing**: React Router DOM v6
- **State/Data**: TanStack Query v5
- **UI Components**: Radix UI primitives via shadcn/ui

## Project Structure

```
src/
  components/       # Page section components (Hero, Nav, About, Services, Gallery, FAQ, etc.)
  components/ui/    # shadcn/ui base components
  pages/            # Route-level pages (Index, GalleryDetail, NotFound)
  data/             # Static data (gallery items)
  hooks/            # Custom React hooks
  lib/              # Utility functions
  assets/           # Images and media
public/
  fonts/            # Custom fonts (CreatoDisplay, Hubhead, MontecatiniPro)
```

## Running the Project

```bash
npm run dev       # Start development server on port 5000
npm run build     # Production build
npm run preview   # Preview production build
```

## Migration Notes

- Migrated from Lovable to Replit
- Removed `lovable-tagger` dependency from `vite.config.ts`
- Vite server configured to bind to `0.0.0.0` on port 5000 for Replit compatibility
- `allowedHosts: true` set for Replit's proxied preview iframe
