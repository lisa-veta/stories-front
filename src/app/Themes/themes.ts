export interface ThemeColors {
    text: {
        primary: string;
        secondary: string;
        subtitle: string;
        body: string;
    };
    background: {
        primary: string;
        secondary: string;
        default: string;
        paper: string;
        active: string;
        gray25: string;
        gray50: string;
        gray90: string;
        gray05: string;
        banner: string;
    };
    icon: {
        primary: string;
        secondary: string;
    };
    border: {
        primary: string;
    };
    white: string;
    black: string;
    red: string;
    green: string;
    orange: string;
    purple: string;
}

export interface Theme {
    color: ThemeColors;
}

export const lightTheme: Theme = {
  color: {
    text: {
      primary: '#1C1C1C',
      secondary: '#FFFFFF',
      subtitle: 'rgba(28, 28, 28, 0.4)',
      body: 'rgba(0, 0, 0, 0.6)',
    },
    background: {
      primary: '#0088FF',
      secondary: '#0067bf',
      default: '#F7F9FB',
      paper: '#FFFFFF',
      active: '#333333',
      gray25: 'rgba(0,0,0,0.25)',
      gray50: 'rgba(0,0,0,0.50)',
      gray90: 'rgba(0,0,0,0.9)',
      gray05: 'rgba(0,0,0,0.5)',
      banner: 'rgba(219, 213, 255, 0.5)',
    },
    icon: {
      primary: '#1C1C1C',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    border: {
      primary: 'rgba(28, 28, 28, 0.1)',
    },
    white: '#FFF',
    black: '#000',
    red: '#FF4A4A',
    green: '#89FF57',
    orange: '#FFAA48',
    purple: '#BAA6FF',
  },
};
