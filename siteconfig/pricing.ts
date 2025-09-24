
export const pricingConfig = {
  // Pricing Section
  section: {
    enabled: true,
    title: "Choose Your Plan",
    subtitle: "Flexible pricing options for every gaming community"
  },
  
  // VPS Plans
  vpsPlans: [
    {
      id: "vps-starter",
      name: "VPS Starter",
      price: "$15.99",
      period: "month",
      description: "Perfect for small applications",
      popular: false,
      enabled: true,
      specs: {
        cpu: "1 vCPU",
        ram: "2GB RAM",
        storage: "25GB SSD",
        bandwidth: "1TB Transfer"
      },
      features: [
        "Full Root Access",
        "99.9% Uptime SLA",
        "24/7 Support",
        "DDoS Protection",
        "Weekly Backups"
      ],
      buttonText: "Choose Starter",
      buttonAction: "redirect",
      buttonTarget: "/checkout?plan=vps-starter"
    },
    {
      id: "vps-professional",
      name: "VPS Professional",
      price: "$29.99",
      period: "month",
      description: "Great for growing businesses",
      popular: true,
      enabled: true,
      specs: {
        cpu: "2 vCPU",
        ram: "4GB RAM",
        storage: "50GB SSD",
        bandwidth: "2TB Transfer"
      },
      features: [
        "Everything in Starter",
        "Priority Support",
        "Daily Backups",
        "Advanced Monitoring",
        "Custom OS Support"
      ],
      buttonText: "Choose Professional",
      buttonAction: "redirect",
      buttonTarget: "/checkout?plan=vps-professional"
    },
    {
      id: "vps-enterprise",
      name: "VPS Enterprise",
      price: "$59.99",
      period: "month",
      description: "For demanding applications",
      popular: false,
      enabled: true,
      specs: {
        cpu: "4 vCPU",
        ram: "8GB RAM",
        storage: "100GB SSD",
        bandwidth: "5TB Transfer"
      },
      features: [
        "Everything in Professional",
        "Dedicated Support Manager",
        "Hourly Backups",
        "Performance Optimization",
        "Custom Configurations"
      ],
      buttonText: "Choose Enterprise",
      buttonAction: "redirect",
      buttonTarget: "/checkout?plan=vps-enterprise"
    }
  ],
  
  // Web Hosting Plans
  webHostingPlans: [
    {
      id: "web-basic",
      name: "Basic Hosting",
      price: "$4.99",
      period: "month",
      description: "Perfect for personal websites",
      popular: false,
      enabled: true,
      specs: {
        websites: "1 Website",
        storage: "10GB SSD",
        bandwidth: "100GB Transfer",
        email: "5 Email Accounts"
      },
      features: [
        "Free SSL Certificate",
        "99.9% Uptime",
        "24/7 Support",
        "Website Builder",
        "One-Click WordPress"
      ],
      buttonText: "Choose Basic",
      buttonAction: "redirect",
      buttonTarget: "/checkout?plan=web-basic"
    },
    {
      id: "web-premium",
      name: "Premium Hosting",
      price: "$9.99",
      period: "month",
      description: "Great for business websites",
      popular: true,
      enabled: true,
      specs: {
        websites: "5 Websites",
        storage: "50GB SSD",
        bandwidth: "500GB Transfer",
        email: "25 Email Accounts"
      },
      features: [
        "Everything in Basic",
        "Priority Support",
        "Daily Backups",
        "Advanced Security",
        "Performance Cache"
      ],
      buttonText: "Choose Premium",
      buttonAction: "redirect",
      buttonTarget: "/checkout?plan=web-premium"
    },
    {
      id: "web-business",
      name: "Business Hosting",
      price: "$19.99",
      period: "month",
      description: "For high-traffic websites",
      popular: false,
      enabled: true,
      specs: {
        websites: "Unlimited",
        storage: "100GB SSD",
        bandwidth: "Unlimited",
        email: "Unlimited"
      },
      features: [
        "Everything in Premium",
        "Dedicated IP",
        "Advanced Analytics",
        "E-commerce Ready",
        "White-label Options"
      ],
      buttonText: "Choose Business",
      buttonAction: "redirect",
      buttonTarget: "/checkout?plan=web-business"
    }
  ],
  
  // General Pricing Plans (for main pricing page)
  plans: [
    {
      id: "starter",
      name: "Starter",
      price: "$4.99",
      period: "month",
      description: "Perfect for small communities",
      popular: false,
      enabled: true,
      features: [
        "Up to 10 players",
        "2GB RAM",
        "10GB SSD Storage",
        "Basic DDoS Protection",
        "24/7 Support"
      ],
      buttonText: "Get Started",
      buttonAction: "redirect",
      buttonTarget: "/checkout?plan=starter"
    },
    {
      id: "professional",
      name: "Professional",
      price: "$12.99",
      period: "month",
      description: "Most popular for medium communities",
      popular: true,
      enabled: true,
      features: [
        "Up to 50 players",
        "6GB RAM",
        "50GB SSD Storage",
        "Advanced DDoS Protection",
        "Priority Support",
        "Free Backups"
      ],
      buttonText: "Choose Professional",
      buttonAction: "redirect",
      buttonTarget: "/checkout?plan=professional"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$29.99",
      period: "month",
      description: "For large gaming communities",
      popular: false,
      enabled: true,
      features: [
        "Up to 200 players",
        "16GB RAM",
        "200GB SSD Storage",
        "Premium DDoS Protection",
        "Dedicated Support Manager",
        "Daily Backups",
        "Custom Configurations"
      ],
      buttonText: "Go Enterprise",
      buttonAction: "redirect",
      buttonTarget: "/checkout?plan=enterprise"
    }
  ]
};
