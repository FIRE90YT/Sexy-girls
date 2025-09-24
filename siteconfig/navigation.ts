
export const navigationConfig = {
  // Main Navigation Items
  mainNavigation: [
    { name: "Home", path: "/", enabled: true },
    { name: "Games", path: "/games", enabled: true },
    { name: "VPS Solutions", path: "/vps", enabled: true },
    { name: "Web Hosting", path: "/web-hosting", enabled: true },
    { name: "Support", path: "/support", enabled: true },
    { name: "About", path: "/about", enabled: true }
  ],
  
  // Services Dropdown
  servicesDropdown: [
    { name: "Minecraft Hosting", path: "/minecraft", enabled: true },
    { name: "VPS Solutions", path: "/vps", enabled: true },
    { name: "Web Hosting", path: "/web-hosting", enabled: true }
  ],
  
  // Footer Navigation
  footerNavigation: {
    services: [
      { name: "Game Hosting", path: "/games", enabled: true },
      { name: "Minecraft Servers", path: "/minecraft", enabled: true },
      { name: "VPS Solutions", path: "/vps", enabled: true },
      { name: "Web Hosting", path: "/web-hosting", enabled: true }
    ],
    company: [
      { name: "About Us", path: "/about", enabled: true },
      { name: "Partners", path: "/partners", enabled: true },
      { name: "Support Center", path: "/support", enabled: true },
      { name: "Sitemap", path: "/sitemap", enabled: true }
    ],
    legal: [
      { name: "Terms of Service", path: "/terms", enabled: true },
      { name: "Privacy Policy", path: "/privacy", enabled: true },
      { name: "Acceptable Use Policy", path: "/acceptable-use", enabled: true }
    ]
  },
  
  // CTA Buttons
  ctaButtons: {
    primary: {
      text: "Get Started",
      action: "redirect", // "redirect" | "modal" | "function"
      target: "/games",
      enabled: true
    },
    secondary: {
      text: "Contact Support",
      action: "redirect",
      target: "/support",
      enabled: true
    }
  }
};
