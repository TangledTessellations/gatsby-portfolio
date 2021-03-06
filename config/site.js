module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: "Alex McEvoy", // Navigation and Site Title
  siteTitleAlt: "Alex McEvoy - Portfolio", // Alternative Site title for SEO
  siteUrl: "https://alexander-the-blog.netlify.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logos/logo-1024.png", // Used for SEO and manifest
  siteDescription:
    "Dark One-Page portfolio with cards & detailed project views",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: "@emilia", // Twitter Username
  // ogSiteName: "emilia", // Facebook Site Name
  ogLanguage: "en_US", // og:language
  googleAnalyticsID: "UA-12345689-1",

  // Manifest and Progress color
  themeColor: "#3498DB",
  backgroundColor: "#2b2e3c",

  // Settings for typography.js
  headerFontFamily: "Fira Sans",
  bodyFontFamily: "Montserrat",
  baseFontSize: "16px",

  // Your information
  avatar: "/logos/headshot-min.jpg",
  name: "Alex McEvoy",
  location: "Seattle, WA",
  socialMedia: [
    {
      url: "https://github.com/TangledTessellations",
      name: "GitHub"
    },
    {
      url: "https://www.linkedin.com/in/alex-mcevoy/",
      name: "LinkedIn"
    }
  ]
};
