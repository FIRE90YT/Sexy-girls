
export const partnersConfig = {
  // Partners Page Content
  hero: {
    enabled: true,
    title: "Our Partners",
    subtitle: "Trusted by Industry Leaders",
    description: "We collaborate with industry leaders and gaming communities to deliver the best possible hosting experience for gamers worldwide.",
    ctaText: "Become a Partner",
    ctaTarget: "/partners/apply",
    secondaryCtaText: "Download Partner Kit",
    secondaryCtaTarget: "/partners/kit"
  },

  // Partnership Benefits
  benefits: [
    {
      icon: "Globe",
      title: "Global Reach",
      description: "Access to our worldwide network of data centers and customers",
      enabled: true
    },
    {
      icon: "Users",
      title: "Community Access",
      description: "Connect with our 500K+ active gaming community members",
      enabled: true
    },
    {
      icon: "Award",
      title: "Technical Excellence",
      description: "Collaborate with industry-leading technical expertise",
      enabled: true
    },
    {
      icon: "Handshake",
      title: "Mutual Growth",
      description: "Grow together through strategic partnerships and collaboration",
      enabled: true
    }
  ],

  // Partner Categories
  categories: [
    {
      title: "Technology Partners",
      description: "Leading tech companies that power our infrastructure",
      partners: [
        { name: "Amazon Web Services", logo: "☁️", description: "Cloud infrastructure and global reach" },
        { name: "Cloudflare", logo: "🛡️", description: "DDoS protection and CDN services" },
        { name: "Intel", logo: "⚡", description: "High-performance server processors" },
        { name: "NVIDIA", logo: "🎮", description: "GPU computing for game servers" }
      ],
      enabled: true
    },
    {
      title: "Game Publishers",
      description: "Official partnerships with major game developers",
      partners: [
        { name: "Mojang Studios", logo: "🟫", description: "Official Minecraft server partner" },
        { name: "Valve Corporation", logo: "🎯", description: "Steam game server integration" },
        { name: "Epic Games", logo: "🎪", description: "Unreal Engine game hosting" },
        { name: "Riot Games", logo: "⚔️", description: "Competitive gaming infrastructure" }
      ],
      enabled: true
    },
    {
      title: "Community Partners",
      description: "Gaming communities and content creators we support",
      partners: [
        { name: "Gaming YouTubers", logo: "📺", description: "Content creator sponsorships" },
        { name: "Esports Teams", logo: "🏆", description: "Professional gaming team support" },
        { name: "Gaming Communities", logo: "👥", description: "Large community server hosting" },
        { name: "Streamers", logo: "📡", description: "Live streaming server infrastructure" }
      ],
      enabled: true
    }
  ],

  // Partnership Types
  partnershipTypes: [
    {
      title: "Technology Integration",
      description: "Integrate your tools and services with our platform",
      features: ["API access", "White-label options", "Technical support", "Joint marketing"],
      enabled: true
    },
    {
      title: "Reseller Program",
      description: "Become an authorized GameHost Pro reseller",
      features: ["Competitive margins", "Sales training", "Marketing materials", "Dedicated support"],
      enabled: true
    },
    {
      title: "Affiliate Program",
      description: "Earn commissions by referring customers to us",
      features: ["Generous commissions", "Real-time tracking", "Marketing resources", "Monthly payouts"],
      enabled: true
    }
  ],

  // Success Stories
  successStories: [
    {
      icon: "📈",
      title: "300% Growth",
      content: "Our partnership with GameHost Pro helped us scale our Minecraft server network from 10,000 to 30,000 active players in just 6 months.",
      source: "Major Gaming Community",
      enabled: true
    },
    {
      icon: "🎯",
      title: "Zero Downtime",
      content: "GameHost Pro's infrastructure partnership ensured our esports tournaments ran flawlessly with zero server issues during critical matches.",
      source: "Professional Esports League",
      enabled: true
    },
    {
      icon: "💰",
      title: "$50K Revenue",
      content: "As a GameHost Pro reseller, we've generated over $50,000 in additional revenue while providing excellent service to our customers.",
      source: "Technology Reseller",
      enabled: true
    }
  ]
};
