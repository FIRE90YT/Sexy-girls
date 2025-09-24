
# GameHost Pro - Professional Game Hosting Website
# Discord Server - https://discord.phantwalker.com?db0dc42786ef1663fc4514fe919c1c62

A fully configurable, modern game hosting website built with React, TypeScript, and Tailwind CSS. All content, features, and settings can be customized through configuration files without touching the code.

## 🚀 Features

### Core Pages
- **Home Page** (`src/pages/Index.tsx`) - Hero section, features showcase, game listings, testimonials, pricing, and CTA
- **Games Page** (`src/pages/Games.tsx`) - Comprehensive game hosting options with detailed pricing and features
- **Minecraft Page** (`src/pages/Minecraft.tsx`) - Specialized Minecraft hosting with modpack support and server types
- **Counter-Strike 2 Page** (`src/pages/CS2.tsx`) - CS2 server hosting options
- **Rust Page** (`src/pages/Rust.tsx`) - Rust server hosting solutions
- **ARK Page** (`src/pages/ARK.tsx`) - ARK: Survival Evolved hosting
- **Valheim Page** (`src/pages/Valheim.tsx`) - Valheim server hosting
- **Garry's Mod Page** (`src/pages/GarrysMod.tsx`) - GMod server hosting
- **VPS Solutions** (`src/pages/VPS.tsx`) - Virtual private server hosting options
- **Web Hosting** (`src/pages/WebHosting.tsx`) - Website hosting solutions
- **About Page** (`src/pages/About.tsx`) - Company story, values, and contact information
- **Support Page** (`src/pages/Support.tsx`) - Help center and contact options
- **Partners Page** (`src/pages/Partners.tsx`) - Partnership information and opportunities
- **Specs & Pricing** (`src/pages/Specs.tsx`) - Detailed specifications and pricing comparison

### Legal Pages
- **Terms of Service** (`src/pages/TermsOfService.tsx`)
- **Privacy Policy** (`src/pages/PrivacyPolicy.tsx`)
- **Acceptable Use Policy** (`src/pages/AcceptableUse.tsx`)
- **Sitemap** (`src/pages/Sitemap.tsx`)

### Key Features
- **Fully Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme Ready** - Built with theme switching in mind
- **Performance Optimized** - Fast loading with modern React practices
- **SEO Friendly** - Proper meta tags and structured content
- **Accessibility** - Built with accessibility best practices
- **Component Library** - Uses shadcn/ui for consistent design

## 📁 Complete File Structure

### Pages (`src/pages/`)
```
src/pages/
├── Index.tsx              # Home page
├── Games.tsx              # Game hosting overview
├── Minecraft.tsx          # Minecraft hosting
├── CS2.tsx               # Counter-Strike 2 hosting
├── Rust.tsx              # Rust hosting
├── ARK.tsx               # ARK hosting
├── Valheim.tsx           # Valheim hosting
├── GarrysMod.tsx         # Garry's Mod hosting
├── VPS.tsx               # VPS hosting
├── WebHosting.tsx        # Web hosting
├── About.tsx             # About page
├── Support.tsx           # Support center
├── Partners.tsx          # Partners page
├── Specs.tsx             # Pricing & specs
├── TermsOfService.tsx    # Legal terms
├── PrivacyPolicy.tsx     # Privacy policy
├── AcceptableUse.tsx     # Acceptable use policy
├── Sitemap.tsx           # Site navigation
└── NotFound.tsx          # 404 error page
```

### Home Page Components (`src/components/home/`)
```
src/components/home/
├── HeroSection.tsx       # Main hero banner
├── FeaturesSection.tsx   # Why choose us features
├── StatsSection.tsx      # Statistics display
├── TestimonialsSection.tsx # Customer testimonials
└── CTASection.tsx        # Call-to-action section
```

### Support Page Components (`src/components/support/`)
```
src/components/support/
├── SupportHero.tsx       # Support page hero
├── SupportChannels.tsx   # Contact methods
├── SupportStats.tsx      # Support statistics
├── SupportKnowledgeBase.tsx # FAQ categories
├── SupportTestimonials.tsx  # Support testimonials
└── SupportCTA.tsx        # Support call-to-action
```

### Global Components (`src/components/`)
```
src/components/
├── Navbar.tsx            # Main navigation
├── Footer.tsx            # Site footer
└── ui/                   # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    ├── badge.tsx
    └── ... (30+ UI components)
```

## 🛠️ Configuration System

All website content is managed through configuration files in the `siteconfig/` folder:

### Configuration Files Structure

```
siteconfig/
├── index.ts              # Main export file with helper functions
├── general.ts            # Site information, logo, contact, social media
├── navigation.ts         # Navigation menus and CTA buttons
├── content.ts            # Hero sections, CTA content, about page content
├── games.ts              # Game hosting options and configurations  
├── features.ts           # Feature listings and statistics
├── pricing.ts            # Pricing plans and configurations
├── vps.ts               # VPS hosting plans and features
├── webhosting.ts        # Web hosting plans and features
├── support.ts           # Support page content and channels
├── partners.ts          # Partnership information
├── testimonials.ts      # Customer testimonials
├── pages.ts             # Page visibility and section toggles
├── contact.ts           # Contact methods and support hours
├── legal.ts             # Legal page content
└── theme.ts             # Color schemes and typography
```

## 🎛️ Enable/Disable Pages and Sections

### Page Control (`siteconfig/pages.ts`)

To enable/disable entire pages:

```typescript
pages: {
  home: { enabled: true, title: "Home - GameHost Pro" },
  games: { enabled: true, title: "Game Hosting - GameHost Pro" },
  minecraft: { enabled: false, title: "Minecraft Hosting - GameHost Pro" }, // DISABLED
  cs2: { enabled: true, title: "Counter-Strike 2 Hosting - GameHost Pro" },
  rust: { enabled: true, title: "Rust Hosting - GameHost Pro" },
  ark: { enabled: true, title: "ARK Hosting - GameHost Pro" },
  valheim: { enabled: true, title: "Valheim Hosting - GameHost Pro" },
  gmod: { enabled: true, title: "Garry's Mod Hosting - GameHost Pro" },
  vps: { enabled: true, title: "VPS Solutions - GameHost Pro" },
  webHosting: { enabled: true, title: "Web Hosting - GameHost Pro" },
  support: { enabled: true, title: "Support - GameHost Pro" },
  about: { enabled: true, title: "About Us - GameHost Pro" },
  partners: { enabled: true, title: "Partners - GameHost Pro" },
  sitemap: { enabled: true, title: "Sitemap - GameHost Pro" },
  terms: { enabled: true, title: "Terms of Service - GameHost Pro" },
  privacy: { enabled: true, title: "Privacy Policy - GameHost Pro" },
  acceptableUse: { enabled: true, title: "Acceptable Use Policy - GameHost Pro" }
}
```

### Section Control (`siteconfig/pages.ts`)

Control what appears on each page:

```typescript
sections: {
  // Homepage sections
  home: {
    hero: { enabled: true },          // HeroSection.tsx
    features: { enabled: true },      // FeaturesSection.tsx
    stats: { enabled: true },         // StatsSection.tsx
    testimonials: { enabled: false }, // TestimonialsSection.tsx - DISABLED
    cta: { enabled: true },           // CTASection.tsx
    discordCta: {
      hero: { enabled: true },
      features: { enabled: true },
      cta: { enabled: true }
    }
  },
  
  // Support page sections
  support: {
    hero: { enabled: true },          // SupportHero.tsx
    contactMethods: { enabled: true }, // SupportChannels.tsx
    faq: { enabled: true },           // SupportKnowledgeBase.tsx
    resources: { enabled: true },     // SupportStats.tsx
    discordCta: {
      hero: { enabled: true }
    }
  }
}
```

## 📝 Content Configuration Guide

### 1. Basic Site Information (`siteconfig/general.ts`)

**File**: `siteconfig/general.ts`
**Controls**: Logo, contact info, social media, SEO

```typescript
export const siteConfig = {
  siteName: "Your Site Name",
  tagline: "Your Tagline",
  description: "Your description",
  logo: {
    url: "your-logo-url.jpg",
    alt: "Your Logo Alt Text"
  },
  contact: {
    email: "your@email.com",
    phone: "+1 (555) 123-4567"
  },
  socialMedia: {
    discord: { url: "your-discord-link", enabled: true },
    twitter: { url: "your-twitter-link", enabled: false } // DISABLED
  }
}
```

### 2. Navigation (`siteconfig/navigation.ts`)

**File**: `siteconfig/navigation.ts`
**Controls**: Navbar.tsx, Footer.tsx

```typescript
mainNavigation: [
  { name: "Home", path: "/", enabled: true },
  { name: "Games", path: "/games", enabled: false }, // DISABLED
  { name: "VPS", path: "/vps", enabled: true }
]
```

### 3. Hero Sections (`siteconfig/content.ts`)

**File**: `siteconfig/content.ts`
**Controls**: HeroSection.tsx, SupportHero.tsx, and other hero components

```typescript
hero: {
  title: "Your Main Headline",
  subtitle: "Your description",
  primaryButton: {
    text: "Button Text",
    target: "/your-link"
  }
}
```

### 4. Features (`siteconfig/features.ts`)

**File**: `siteconfig/features.ts`
**Controls**: FeaturesSection.tsx, StatsSection.tsx

```typescript
whyChooseUs: {
  enabled: true,
  features: [
    {
      id: "instant-setup",
      icon: "Zap",
      title: "Instant Setup",
      description: "Your description",
      enabled: false // DISABLED
    }
  ]
}
```

### 5. Testimonials (`siteconfig/testimonials.ts`)

**File**: `siteconfig/testimonials.ts`
**Controls**: TestimonialsSection.tsx, SupportTestimonials.tsx

```typescript
testimonials: [
  {
    id: "testimonial-1",
    name: "Customer Name",
    content: "Their testimonial",
    enabled: false // DISABLED
  }
]
```

### 6. Support Configuration (`siteconfig/support.ts`)

**File**: `siteconfig/support.ts`
**Controls**: All support components in `src/components/support/`

```typescript
channels: [
  {
    icon: "MessageCircle",
    title: "Live Chat",
    enabled: false // DISABLED
  }
]
```

## 🎨 Component Control Examples

### Disable Home Page Stats Section

**File**: `siteconfig/pages.ts`
```typescript
home: {
  stats: { enabled: false } // Disables StatsSection.tsx
}
```

### Disable Specific Features

**File**: `siteconfig/features.ts`
```typescript
whyChooseUs: {
  features: [
    {
      id: "ddos-protection",
      enabled: false // Hides this feature
    }
  ]
}
```

### Disable Support Channels

**File**: `siteconfig/support.ts`
```typescript
channels: [
  {
    title: "Phone Support",
    enabled: false // Hides phone support option
  }
]
```

## 🔍 Helper Functions

The configuration system includes helper functions in `siteconfig/index.ts`:

- `getEnabledItems()` - Filters arrays to only enabled items
- `isPageEnabled()` - Checks if a page is enabled
- `isSectionEnabled()` - Checks if a section is enabled
- `isGameEnabled()` - Checks if a specific game is enabled
- `shouldShowDiscordCta()` - Controls Discord CTA visibility

## 🚀 Getting Started

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

3. **Customize Configuration**
   - Edit files in `siteconfig/` folder
   - Changes are reflected immediately

4. **Build for Production**
```bash
npm run build
```

## 🎯 Quick Configuration Examples

### Hide Entire Minecraft Page
```typescript
// siteconfig/pages.ts
pages: {
  minecraft: { enabled: false }
}
```

### Remove Testimonials from Home
```typescript
// siteconfig/pages.ts
sections: {
  home: {
    testimonials: { enabled: false }
  }
}
```

### Disable Specific Game
```typescript
// siteconfig/games.ts
games: [
  {
    id: "minecraft",
    enabled: false // Game won't appear anywhere
  }
]
```

### Hide Support Phone Number
```typescript
// siteconfig/support.ts
channels: [
  {
    type: "phone",
    enabled: false
  }
]
```

## 🔒 Code Security Note

**Important**: This codebase is designed to be transparent and configurable. Code obfuscation is not recommended because:

1. **Configuration-based**: All sensitive data should be in environment variables, not code
2. **Open source friendly**: Makes collaboration and customization easier
3. **Debugging**: Readable code helps with maintenance and troubleshooting
4. **Performance**: Obfuscation can impact build times and runtime performance

For production security:
- Use environment variables for sensitive data
- Implement proper authentication on your backend
- Use HTTPS for all communications
- Regular security audits of dependencies

## 📞 Support

- Configuration files are self-documenting with TypeScript
- All settings have sensible defaults
- Enable/disable any feature with boolean flags
- Component files are focused and easy to modify

## 🚦 Deployment

The site is ready for deployment to:
- Vercel
- Netlify  
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and shadcn/ui**
