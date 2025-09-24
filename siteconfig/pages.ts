
export const pagesConfig = {
  // Page Visibility and Configuration
  pages: {
    home: { enabled: true, title: "Home - GameHost Pro" },
    games: { enabled: true, title: "Game Hosting - GameHost Pro" },
    minecraft: { enabled: false, title: "Minecraft Hosting - GameHost Pro" },
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
  },
  
  // Page Sections Visibility - Controls what appears on each page
  sections: {
    // Homepage sections
    home: {
      hero: { enabled: true },
      features: { enabled: true },
      stats: { enabled: true },
      testimonials: { enabled: true },
      cta: { enabled: true },
      discordCta: {
        hero: { enabled: true },
        features: { enabled: true },
        cta: { enabled: true }
      }
    },
    
    // About page sections
    about: {
      hero: { enabled: true },
      story: { enabled: true },
      values: { enabled: true },
      contact: { enabled: true },
      discordCta: {
        hero: { enabled: true },
        story: { enabled: true },
        contact: { enabled: true }
      }
    },
    
    // Games page sections
    games: {
      hero: { enabled: true },
      gamesList: { enabled: true },
      features: { enabled: true },
      testimonials: { enabled: true },
      cta: { enabled: true },
      discordCta: {
        features: { enabled: true }
      }
    },
    
    // Individual game page sections
    gamePages: {
      hero: { enabled: true },
      plans: { enabled: true },
      features: { enabled: true },
      testimonials: { enabled: true },
      cta: { enabled: true },
      discordCta: {
        features: { enabled: true }
      }
    },
    
    // VPS page sections
    vps: {
      hero: { enabled: true },
      plans: { enabled: true },
      features: { enabled: true },
      testimonials: { enabled: true },
      cta: { enabled: true },
      discordCta: {
        features: { enabled: true }
      }
    },
    
    // Web hosting page sections
    webHosting: {
      hero: { enabled: true },
      plans: { enabled: true },
      features: { enabled: true },
      testimonials: { enabled: true },
      cta: { enabled: true },
      discordCta: {
        features: { enabled: true }
      }
    },
    
    // Support page sections
    support: {
      hero: { enabled: true },
      contactMethods: { enabled: true },
      faq: { enabled: true },
      resources: { enabled: true },
      discordCta: {
        hero: { enabled: true }
      }
    }
  }
};
