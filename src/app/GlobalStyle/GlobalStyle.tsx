import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import type { Theme } from '@app/Themes/themes';

export const GlobalStyle = createGlobalStyle<{ theme?: Theme }>`
  ${normalize}

  html, body, #root {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme?.color?.background?.default || '#fff'};
    color: ${({ theme }) => theme?.color?.text?.primary || '#000'};
  }
`;
