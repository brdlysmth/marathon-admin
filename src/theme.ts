export const colors = {
  primary: "#226f54",
  primaryDark: "#195C43",
  primaryLight: "#87c38f",
  primaryExtraLight: "#E4EEEA",
  text: "#222222",
  textLight: "#555555",
  textDisabled: "#d1d2d3",
  darkGrey: "#808080",
  grey: "#e6e6e6",
  lightGrey: "#F5F5F5",
  lightestGrey: "#FAFAFA",
  backgroundGrey: "#FDFDFD",
  errorLight: "hsl(0, 100%, 91%)",
  error: "#C00000",
  errorDark: "hsl(0, 100%, 28%)",
  white: "#FFFFFF",
  warning: {
    light: "hsl(50, 100%, 92%)",
    main: "hsl(46, 100%, 78%)",
    dark: "hsl(50, 80%, 13%)",
  },
  success: {
    light: "hsl(136, 100%, 94%)",
    main: "hsl(145, 46%, 51%)",
    dark: "hsl(152, 42%, 18%)",
  },
  moisture: {
    // Colors version are roughly light -> dark
    wet: {
      chartBG: "hsl(199, 42%, 91%)",
      light: "hsl(199, 42%, 87%)",
      map: "#32627A",
      dark: "hsl(199, 42%, 34%)",
    },
    ok: {
      chartBG: "hsl(159, 53%, 96%)",
      light: "hsl(159, 53%, 84%)",
      map: "#226f54",
      dark: "hsl(159, 53%, 28%)",
    },
    dry: {
      chartBG: "hsl(44, 60%, 87%)",
      light: "hsl(44, 60%, 88%)",
      map: "#E0C884",
      dark: "hsl(44, 60%, 29%)",
    },
    unknown: {
      chartBG: "#C0C0C0",
      light: "#C0C0C0",
      map: "#C0C0C0",
      dark: "#C0C0C0",
    },
  },
  rainfall: "#0099D8",
  irrigation: "#326279",
  graph: {
    trace: {
      average: "#282828",
      temperature: "#78909c",
      moistures: [
        "hsl(270, 80%, 50%)",
        "hsl(305, 80%, 50%)",
        "hsl(360, 90%, 28%)",
        "hsl(60, 80%, 23%)",
      ],
    },
  },
  pressure: {
    ok: {
      on: "hsl(199, 42%, 34%)",
      off: "hsl(199, 96%, 96%)",
    },
    notok: {
      on: "hsl(0, 100%, 28%)",
      off: "hsl(0, 100%, 91%)",
    },
    on: "hsl(199, 42%, 34%)",
    off: "hsl(0, 0, 100%)",
  },
};

enum FontWeights {
  light = 300,
  regular = 400,
  bold = 700,
  black = 900,
}

enum FontSizes {
  title = "24px",
  subtitle = "20px",
  body = "16px",
  caption = "13px",
}

export enum FontClasses {
  title = "title",
  subtitle = "subtitle",
  body = "body",
  caption = "caption",
}

enum LineHeight {
  regular = "1.2",
  paragraph = "1.6",
}

export const weights = FontWeights;
export const fontSizes = FontSizes;
export const lineHeight = LineHeight;

// In styled component this will be set dynamically
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const isMobile: boolean = false;

export const stateToColor = (state: number | null | undefined) => {
  if (state === null || state === undefined) return colors.moisture.unknown;
  if (state < 1) {
    return colors.moisture.wet;
  } else if (state < 3) {
    return colors.moisture.ok;
  } else {
    return colors.moisture.dry;
  }
};

export type ThemeType = typeof theme;

export const theme = {
  weights,
  fontSizes,
  lineHeight,
  colors,
  isMobile,
};
