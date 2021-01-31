export * from "./Container";
export * from "./Footer";
export * from "./Page";
export * from "./Text";

const size = {
  mobile: "768px",
  tablet: "992px",
  desktop: "1199px",
};

const theme = {
  breakpoints: {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(max-width: ${size.desktop})`,
  },
  transition: "all 0.2s ease",
  color: {
    text: {
      body: "#2c2c2c",
      primary: "#3c7a89",
      header: "#2E4756",
    },
    background: "#f1f2f6",
  },
};

export interface ITheme {
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  transition: string;
  color: {
    text: {
      body: string;
      primary: string;
      header: string;
    };
    background: string;
  };
}

export const LightTheme: ITheme = {
  ...theme,
};
