interface Navigation {
  label: string;
  url: string;
}

export interface SettingsAndSlugs {
  ghostSettings: {
    title: string;
    navigation: Navigation[];
    facebook: string;
    twitter: string;
    logo: string;
  };
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}
