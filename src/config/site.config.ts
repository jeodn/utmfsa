export interface NavItem {
  label: string;
  href: string;
  title?: string;
  header?: boolean;
  footer?: boolean;
}

export const siteConfig = {
  name: "UTM Filipino Student Association",
  shortName: "UTMFSA",
  description: "Celebrating Filipino culture, student community, signature events, and exclusive member perks at the University of Toronto Mississauga.",
  location: "University of Toronto Mississauga (UTM)",
  
  // Centralized Navigation Links & Routes
  navLinks: [
    { label: "About Us", href: "/about-us", title: "About Us | UTMFSA", header: true, footer: true },
    { label: "Membership Card", href: "/membership", title: "Membership Card | UTMFSA", header: true, footer: true },
    { label: "Past Events", href: "/events", title: "Events | UTMFSA", header: true, footer: true },
    { label: "Why Join?", href: "/join", title: "Why Join? | UTMFSA", header: true, footer: true },
    { label: "Contact", href: "/contact-us", title: "Contact Us | UTMFSA", header: true, footer: true }
  ] as NavItem[],

  // Centralized Contact Information
  contact: {
    studentEmail: "utmfsa@utmsu.ca",
    sponsorEmail: "utmfsa@utmsu.ca",
    instagramHandle: "@utmfsa",
    instagramUrl: "https://instagram.com/utmfsa",
    discordUrl: "https://discord.gg/utmfsa",
  },

  // Centralized Google Form & Application Links
  links: {
    generalMemberForm: "https://forms.google.com/your-general-member-form",
    execApplicationForm: "https://forms.google.com/your-exec-application-form",
    sponsorDeckUrl: "/contact-us?type=sponsor",
  }
};

export const headerNavLinks = siteConfig.navLinks.filter((link) => link.header !== false);
export const footerNavLinks = siteConfig.navLinks.filter((link) => link.footer !== false);

export type SiteConfig = typeof siteConfig;

