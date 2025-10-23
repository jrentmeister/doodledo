# Doodle Do - Art & Pattern Licensing Platform

## Overview

Doodle Do is a curated art marketplace for purchasing, licensing, and commissioning repeating pattern designs. The platform showcases pattern artwork for fabric, wallpaper, and other commercial applications with a "gallery meets shop" aesthetic. Built as a full-stack web application, it features a React frontend with a Node.js/Express backend, focusing on seamless art commerce.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing (lightweight alternative to React Router).

**UI Component Library**: Radix UI primitives with shadcn/ui styling system, providing accessible, unstyled components that are customized through Tailwind CSS.

**Styling Approach**: 
- Tailwind CSS with custom design tokens defined in CSS variables
- Design system follows "New York" shadcn style variant
- Custom color palette featuring soft pastels (blush pink primary, mint green secondary, lavender accents)
- Typography using Google Fonts: Montserrat for headings, Raleway for body text
- Elevation system using subtle overlays (`--elevate-1`, `--elevate-2`) for hover/active states

**State Management**: 
- TanStack Query (React Query) for server state management
- Local component state with React hooks
- No global client-side state management solution

**Form Handling**: React Hook Form with Zod schema validation via `@hookform/resolvers`.

**Design Philosophy**: Light, airy aesthetic with generous spacing, soft color transitions, and focus on showcasing pattern artwork. Components follow a "hover-elevate" pattern for interactive feedback.

### Backend Architecture

**Runtime**: Node.js with Express.js framework.

**API Design**: RESTful JSON API with the following endpoints:
- `/api/patterns` - Pattern CRUD operations
- `/api/collections` - Collection management
- `/api/commissions` - Commission request handling
- `/api/newsletter` - Newsletter subscription management

**Data Storage Strategy**: Currently using in-memory storage (`MemStorage` class) with interfaces designed for database migration. The storage layer implements `IStorage` interface, allowing easy swap to persistent storage.

**Database ORM**: Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless`), though not actively connected. Schema definitions exist in `shared/schema.ts` with:
- Patterns table (id, title, description, category, price, imageUrl, etsyUrl, collectionId)
- Collections table (id, title, description, imageUrl)
- Commissions table (id, name, email, projectType, description, budget, status, createdAt)
- Newsletter subscribers table

**Session Management**: Configured for `connect-pg-simple` session store (PostgreSQL-backed sessions).

**Development Server**: Custom Vite integration in development mode with middleware mounting, HMR support, and SSR template rendering for the React application.

**Production Build**: Client built to `dist/public`, server bundled with esbuild to `dist/index.js`.

### Data Flow Architecture

**Client → Server Communication**:
- Fetch API wrapped in `apiRequest` utility function
- TanStack Query manages caching, refetching, and request deduplication
- Credentials included for session-based authentication (prepared but not implemented)

**Error Handling**:
- Response status validation with descriptive error messages
- Toast notifications for user feedback via shadcn toast component
- Unauthorized requests configurable to return null or throw

**Type Safety**: Shared TypeScript types between client and server via `shared/schema.ts` using Drizzle's type inference and Zod validation schemas.

### Build and Development Tools

**TypeScript Configuration**: Strict mode enabled, ESNext module system, path aliases for clean imports (`@/` for client, `@shared/` for shared code, `@assets/` for static assets).

**Code Quality**: No explicit linting configuration in repository (ESLint/Prettier configs not present).

**Development Workflow**:
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build (Vite + esbuild)
- `npm run start` - Production server
- `npm run db:push` - Drizzle schema push to database

### Asset Management

Static assets stored in `attached_assets/generated_images/` directory with generated pattern images, lifestyle photos, and artist portraits. Assets referenced via Vite's asset handling system with the `@assets` path alias.

## External Dependencies

### UI Component Libraries
- **Radix UI**: Complete suite of unstyled, accessible UI primitives (accordion, dialog, dropdown, select, toast, etc.)
- **shadcn/ui**: Pre-styled component system built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (specifically using Simple Icons for social media)

### Data & State Management
- **TanStack Query v5**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation and type inference
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **drizzle-zod**: Integration for generating Zod schemas from Drizzle schemas

### Database & Storage
- **@neondatabase/serverless**: Serverless PostgreSQL driver (configured but not actively used)
- **connect-pg-simple**: PostgreSQL session store for Express (configured but not actively used)

### Utilities
- **date-fns**: Date formatting and manipulation
- **clsx & tailwind-merge**: Conditional className utilities
- **class-variance-authority**: Component variant management
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component
- **wouter**: Lightweight routing library

### Development Tools
- **Vite**: Build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server code
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit integration (development only)
- **@replit/vite-plugin-dev-banner**: Development banner (development only)

### Third-Party Integrations
- **Etsy**: External link integration for pattern purchases (URLs stored in pattern records)
- **Google Fonts**: Typography via CDN (Montserrat, Raleway)
- **Email**: Newsletter subscription and commission request notifications (infrastructure prepared, implementation pending)

### Future Integration Points
Database migration from in-memory to PostgreSQL (Neon) is prepared but not executed. All schema definitions and ORM configuration exist, requiring only database provisioning and running `npm run db:push`.