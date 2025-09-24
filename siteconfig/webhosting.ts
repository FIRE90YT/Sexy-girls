
export const webHostingConfig = {
  // Web Hosting Page Content
  hero: {
    enabled: true,
    title: "Web Hosting Solutions",
    subtitle: "Fast, Reliable, and Secure Web Hosting",
    description: "Power your websites with our premium web hosting services. From personal blogs to enterprise applications, we have the perfect hosting solution for you.",
    ctaText: "Explore Hosting Plans",
    ctaTarget: "/web-hosting",
    secondaryCtaText: "Free Migration",
    secondaryCtaTarget: "/support"
  },

  // Web Hosting Plans
  plans: [
    {
      id: "shared-starter",
      name: "Starter",
      price: "$4.99",
      period: "month",
      description: "Perfect for personal websites and blogs",
      popular: false,
      enabled: true,
      specs: {
        websites: "1 Website",
        storage: "10GB SSD",
        bandwidth: "100GB",
        email: "5 Email Accounts"
      },
      features: [
        "Free SSL Certificate",
        "Daily Backups",
        "24/7 Support",
        "99.9% Uptime",
        "Free Domain for 1st Year",
        "WordPress Optimized"
      ],
      buttonText: "Get Started",
      buttonAction: "purchase",
      buttonTarget: "/checkout/shared-starter"
    },
    {
      id: "shared-pro",
      name: "Professional",
      price: "$9.99",
      period: "month",
      description: "Great for growing businesses",
      popular: true,
      enabled: true,
      specs: {
        websites: "5 Websites",
        storage: "50GB SSD",
        bandwidth: "Unlimited",
        email: "25 Email Accounts"
      },
      features: [
        "Free SSL Certificate",
        "Daily Backups",
        "Priority Support",
        "99.9% Uptime",
        "Free Domain for 1st Year",
        "WordPress Optimized",
        "Free CDN",
        "Advanced Security"
      ],
      buttonText: "Most Popular",
      buttonAction: "purchase",
      buttonTarget: "/checkout/shared-pro"
    },
    {
      id: "shared-business",
      name: "Business",
      price: "$19.99",
      period: "month",
      description: "Perfect for e-commerce and business sites",
      popular: false,
      enabled: true,
      specs: {
        websites: "Unlimited",
        storage: "100GB SSD",
        bandwidth: "Unlimited",
        email: "Unlimited"
      },
      features: [
        "Free SSL Certificate",
        "Daily Backups",
        "Priority Support",
        "99.99% Uptime",
        "Free Domain for 1st Year",
        "WordPress Optimized",
        "Free CDN",
        "Advanced Security",
        "E-commerce Ready",
        "Free Site Migration"
      ],
      buttonText: "Get Business",
      buttonAction: "purchase",
      buttonTarget: "/checkout/shared-business"
    }
  ],

  // Web Hosting Features
  features: [
    {
      id: "ssd-storage",
      icon: "HardDrive",
      title: "SSD Storage",
      description: "Lightning-fast SSD storage for optimal website performance",
      enabled: true
    },
    {
      id: "free-ssl",
      icon: "Shield",
      title: "Free SSL Certificates",
      description: "Secure your website with free SSL certificates included",
      enabled: true
    },
    {
      id: "wordpress-optimized",
      icon: "Wordpress",
      title: "WordPress Optimized",
      description: "Specially optimized servers for WordPress websites",
      enabled: true
    },
    {
      id: "daily-backups",
      icon: "Database",
      title: "Daily Backups",
      description: "Automatic daily backups to keep your data safe",
      enabled: true
    },
    {
      id: "cdn",
      icon: "Globe",
      title: "Free CDN",
      description: "Global content delivery network for faster loading",
      enabled: true
    },
    {
      id: "email-hosting",
      icon: "Mail",
      title: "Professional Email",
      description: "Professional email accounts with your domain name",
      enabled: true
    }
  ],

  // Stats
  stats: [
    { number: "99.9%", label: "Uptime Guarantee", icon: "Shield", enabled: true },
    { number: "24/7", label: "Expert Support", icon: "HeadphonesIcon", enabled: true },
    { number: "Free", label: "SSL Certificates", icon: "Lock", enabled: true },
    { number: "Global", label: "CDN Network", icon: "Globe", enabled: true }
  ],

  // Website Types
  websiteTypes: [
    {
      title: "Personal Blogs",
      description: "Share your thoughts and stories with the world",
      icon: "PenTool"
    },
    {
      title: "Business Websites",
      description: "Professional websites that convert visitors to customers",
      icon: "Building"
    },
    {
      title: "E-commerce Stores",
      description: "Sell products online with our e-commerce ready hosting",
      icon: "ShoppingCart"
    },
    {
      title: "Portfolio Sites",
      description: "Showcase your work and attract new clients",
      icon: "Image"
    }
  ]
};
