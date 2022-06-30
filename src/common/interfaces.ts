export interface IFooterData {
  site: {
    siteMetadata: {
      title: string;
      socials: {
        github: string;
      };
    };
  };
}

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface ISidebarData {
  site: {
    siteMetadata: {
      email: string;
    };
  };
}

export interface IBoxButtonProps {
  text: string;
  scroll: boolean;
  navTo: string;
  classes: string;
}
