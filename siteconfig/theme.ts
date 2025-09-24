
export const themeConfig = {
  // Color Schemes
  colors: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe", 
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      900: "#1e3a8a"
    },
    secondary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      500: "#64748b", 
      600: "#475569",
      800: "#1e293b",
      900: "#0f172a"
    },
    accent: {
      purple: "#8b5cf6",
      cyan: "#06b6d4",
      green: "#10b981",
      red: "#ef4444",
      yellow: "#f59e0b",
      orange: "#f97316"
    }
  },
  
  // Typography
  fonts: {
    sans: ["Inter", "system-ui", "sans-serif"],
    mono: ["JetBrains Mono", "Fira Code", "monospace"],
    display: ["Inter", "system-ui", "sans-serif"]
  },
  
  // Layout Configuration
  layout: {
    maxWidth: "7xl",
    headerHeight: "16",
    footerEnabled: true,
    sidebarEnabled: false,
    breadcrumbsEnabled: true
  },
  
  // Animation Settings
  animations: {
    enabled: true,
    duration: {
      fast: "200ms",
      normal: "300ms",
      slow: "500ms"
    },
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    }
  },
  
  // Component Variants
  components: {
    button: {
      defaultVariant: "default",
      sizes: ["sm", "md", "lg", "xl"]
    },
    card: {
      defaultShadow: "lg",
      borderRadius: "lg"
    },
    badge: {
      defaultVariant: "default"
    }
  },
  
  // Responsive Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  }
};
