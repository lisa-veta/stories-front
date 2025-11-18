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
        active2?: string;
        modal: string;
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
    eerieBlack: string;
    seasalt: string;
    amber: string;
    harvestGold: string;
    jet: string;
    azure: string;
    aliceBlue: string;
    argentinianBlue: string;
    yellow: string;
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
      active2: 'rgba(28,28,28,0.13)',
      modal: 'rgba(0, 0, 0, 0.9)',
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
    eerieBlack: '#1C1C1C',
    seasalt: '#F7F9FB',
    amber: '#FFBF00',
    harvestGold: '#DA9603',
    jet: '#2E2E2E',
    azure: '#1082FF',
    aliceBlue: '#EEF2F7',
    argentinianBlue: '#63aeff',
    yellow: '#FFF824',
  },
};

export const darkTheme: Theme = {
  color: {
    text: {
      primary: '#FFFFFF',
      secondary: '#1C1C1C',
      subtitle: 'rgba(255, 255, 255, 0.4)',
      body: 'rgba(0, 0, 0, 0.6)',
    },
    background: {
      primary: '#0088FF',
      secondary: '#0067bf',
      default: '#1C1C1C',
      paper: '#2E2E2E',
      active: 'rgba(28, 28, 28, 0.05)',
      modal: 'rgba(0, 0, 0, 0.9)',
    },
    icon: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
    border: {
      primary: 'rgba(28, 28, 28, 0.1)',
    },
    white: '#FFF',
    black: '#000',
    eerieBlack: '#1C1C1C',
    seasalt: '#F7F9FB',
    amber: '#FFBF00',
    harvestGold: '#DA9603',
    jet: '#2E2E2E',
    azure: '#1082FF',
    aliceBlue: '#EEF2F7',
    argentinianBlue: '#63aeff',
    yellow: '#FFF824',
  },
};
