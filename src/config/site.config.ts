export const siteConfig = {
  name: "UTM Filipino Student Association",
  shortName: "UTMFSA",
  description: "Celebrating Filipino culture, student community, signature events, and exclusive member perks at the University of Toronto Mississauga.",
  location: "University of Toronto Mississauga (UTM)",
  
  // Centralized Contact Information
  contact: {
    studentEmail: "utmfsa@utmsu.ca",
    sponsorEmail: "utmfsa.sponsors@gmail.com",
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

export type SiteConfig = typeof siteConfig;
