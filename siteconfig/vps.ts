
export const vpsConfig = {
  // VPS Page Content
  hero: {
    enabled: true,
    title: "VPS Hosting Solutions",
    subtitle: "Powerful Virtual Private Servers for Gaming & Development",
    description: "Get dedicated resources, root access, and enterprise-grade performance with our VPS solutions. Perfect for game servers, web applications, and development environments.",
    ctaText: "Explore VPS Plans",
    ctaTarget: "/vps",
    secondaryCtaText: "Contact Sales",
    secondaryCtaTarget: "/support"
  },

  // VPS Plans
  plans: [
    {
      id: "vps-starter",
      name: "Starter VPS",
      price: "$19.99",
      period: "month",
      description: "Perfect for small projects and development",
      popular: false,
      enabled: true,
      specs: {
        cpu: "2 vCPU",
        ram: "4GB RAM",
        storage: "80GB SSD",
        bandwidth: "Unlimited"
      },
      features: [
        "Root Access",
        "99.9% Uptime SLA",
        "DDoS Protection",
        "24/7 Support",
        "Free SSL Certificate",
        "Daily Backups"
      ],
      buttonText: "Get Started",
      buttonAction: "purchase",
      buttonTarget: "/checkout/vps-starter"
    },
    {
      id: "vps-pro",
      name: "Pro VPS",
      price: "$39.99",
      period: "month",
      description: "Ideal for production applications",
      popular: true,
      enabled: true,
      specs: {
        cpu: "4 vCPU",
        ram: "8GB RAM",
        storage: "160GB SSD",
        bandwidth: "Unlimited"
      },
      features: [
        "Root Access",
        "99.9% Uptime SLA",
        "Enhanced DDoS Protection",
        "Priority Support",
        "Free SSL Certificate",
        "Daily Backups",
        "Load Balancer Ready"
      ],
      buttonText: "Most Popular",
      buttonAction: "purchase",
      buttonTarget: "/checkout/vps-pro"
    },
    {
      id: "vps-enterprise",
      name: "Enterprise VPS",
      price: "$79.99",
      period: "month",
      description: "Maximum performance for demanding workloads",
      popular: false,
      enabled: true,
      specs: {
        cpu: "8 vCPU",
        ram: "16GB RAM",
        storage: "320GB SSD",
        bandwidth: "Unlimited"
      },
      features: [
        "Root Access",
        "99.99% Uptime SLA",
        "Advanced DDoS Protection",
        "Dedicated Support",
        "Free SSL Certificate",
        "Hourly Backups",
        "Load Balancer Ready",
        "Custom OS Images"
      ],
      buttonText: "Get Enterprise",
      buttonAction: "purchase",
      buttonTarget: "/checkout/vps-enterprise"
    }
  ],

  // VPS Features
  features: [
    {
      id: "root-access",
      icon: "Shield",
      title: "Full Root Access",
      description: "Complete control over your server environment with sudo privileges",
      enabled: true
    },
    {
      id: "ssd-storage",
      icon: "HardDrive",
      title: "SSD Storage",
      description: "Lightning-fast NVMe SSD storage for optimal performance",
      enabled: true
    },
    {
      id: "ddos-protection",
      icon: "Shield",
      title: "DDoS Protection",
      description: "Enterprise-grade protection against DDoS attacks",
      enabled: true
    },
    {
      id: "instant-setup",
      icon: "Zap",
      title: "Instant Deployment",
      description: "Your VPS is ready in under 60 seconds",
      enabled: true
    },
    {
      id: "multiple-os",
      icon: "Monitor",
      title: "Multiple OS Options",
      description: "Choose from Ubuntu, CentOS, Debian, Windows Server, and more",
      enabled: true
    },
    {
      id: "scalable",
      icon: "TrendingUp",
      title: "Easily Scalable",
      description: "Upgrade your resources instantly without downtime",
      enabled: true
    }
  ],

  // Stats
  stats: [
    { number: "99.99%", label: "Uptime Guarantee", icon: "Shield", enabled: true },
    { number: "<60s", label: "Setup Time", icon: "Zap", enabled: true },
    { number: "15+", label: "Data Centers", icon: "Globe", enabled: true },
    { number: "24/7", label: "Expert Support", icon: "HeadphonesIcon", enabled: true }
  ],

  // Use Cases
  useCases: [
    {
      title: "Game Server Hosting",
      description: "Host multiple game servers with dedicated resources",
      icon: "Gamepad2"
    },
    {
      title: "Web Applications",
      description: "Deploy and scale your web applications with ease",
      icon: "Globe"
    },
    {
      title: "Development Environment",
      description: "Create isolated development and testing environments",
      icon: "Code"
    },
    {
      title: "Database Servers",
      description: "Run high-performance database instances",
      icon: "Database"
    }
  ]
};
