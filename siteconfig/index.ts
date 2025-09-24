
// Main configuration export file
export { siteConfig } from './general';
export { navigationConfig } from './navigation';
export { gamesConfig } from './games';
export { featuresConfig } from './features';
export { pricingConfig } from './pricing';
export { vpsConfig } from './vps';
export { webHostingConfig } from './webhosting';
export { supportConfig } from './support';
export { partnersConfig } from './partners';
export { testimonialsConfig } from './testimonials';
export { pagesConfig } from './pages';
export { contentConfig } from './content';
export { contactConfig } from './contact';
export { legalConfig } from './legal';
export { themeConfig } from './theme';

// Import configs for use in helper functions
import { pagesConfig } from './pages';
import { gamesConfig } from './games';
import { pricingConfig } from './pricing';
import { vpsConfig } from './vps';
import { webHostingConfig } from './webhosting';

// Helper function to get enabled items from arrays
export const getEnabledItems = <T extends { enabled: boolean }>(items: T[]): T[] => {
  return items.filter(item => item.enabled);
};

// Helper function to check if a page is enabled
export const isPageEnabled = (pageName: string): boolean => {
  const pageKey = pageName as keyof typeof pagesConfig.pages;
  return pagesConfig.pages[pageKey]?.enabled || false;
};

// Helper function to check if a section is enabled for a specific page
export const isSectionEnabled = (pageName: string, sectionName: string): boolean => {
  const pageKey = pageName as keyof typeof pagesConfig.sections;
  const pageConfig = pagesConfig.sections[pageKey];
  
  if (!pageConfig) return false;
  
  // Handle nested discord CTA sections
  if (sectionName.includes('discordCta.')) {
    const [, ctaType] = sectionName.split('.');
    return (pageConfig as any).discordCta?.[ctaType]?.enabled || false;
  }
  
  // Handle sections that are objects with enabled property
  const section = (pageConfig as any)[sectionName];
  if (typeof section === 'object' && section !== null && 'enabled' in section) {
    return section.enabled || false;
  }
  
  return false;
};

// Helper function to check if a game is enabled
export const isGameEnabled = (gameId: string): boolean => {
  const game = gamesConfig.games.find(g => g.id === gameId);
  return game?.enabled || false;
};

// Helper function to get enabled games
export const getEnabledGames = () => {
  return getEnabledItems(gamesConfig.games);
};

// Helper function to get game by ID
export const getGameById = (gameId: string) => {
  return gamesConfig.games.find(game => game.id === gameId);
};

// Helper function to get all plans for a game
export const getPlansForGame = (gameId: string) => {
  const game = getGameById(gameId);
  return game?.plans || [];
};

// Helper function to get enabled plans for a game (plans don't have enabled property by default)
export const getEnabledPlansForGame = (gameId: string) => {
  const game = getGameById(gameId);
  if (!game?.plans) return [];
  return game.plans; // Return all plans since they don't have enabled property
};

// Helper function to get VPS plans
export const getVpsPlans = () => {
  return getEnabledItems(vpsConfig.plans);
};

// Helper function to get Web Hosting plans
export const getWebHostingPlans = () => {
  return getEnabledItems(webHostingConfig.plans);
};

// Helper function to get general pricing plans
export const getPricingPlans = () => {
  return getEnabledItems(pricingConfig.plans);
};

// Helper function to get plan by ID from any category
export const getPlanById = (planId: string) => {
  // Check game plans
  for (const game of gamesConfig.games) {
    const plan = game.plans?.find(p => p.id === planId);
    if (plan) return { ...plan, category: 'game', gameId: game.id };
  }
  
  // Check VPS plans
  const vpsplan = vpsConfig.plans.find(p => p.id === planId);
  if (vpsplan) return { ...vpsplan, category: 'vps' };
  
  // Check Web Hosting plans
  const webPlan = webHostingConfig.plans.find(p => p.id === planId);
  if (webPlan) return { ...webPlan, category: 'webhosting' };
  
  // Check general plans
  const generalPlan = pricingConfig.plans.find(p => p.id === planId);
  if (generalPlan) return { ...generalPlan, category: 'general' };
  
  return null;
};

// Helper function to check if Discord CTA should show
export const shouldShowDiscordCta = (pageName: string, ctaType: string): boolean => {
  return isSectionEnabled(pageName, `discordCta.${ctaType}`);
};
