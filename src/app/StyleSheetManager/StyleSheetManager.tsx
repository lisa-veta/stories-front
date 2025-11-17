import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager as StyleSheetManagerLibrary } from 'styled-components';
import type { ReactNode } from 'react';

interface StyleSheetManagerProps {
    children: ReactNode;
}

const shouldForwardProp = (propName: string, target?: unknown): boolean => {
  if (typeof target === 'string') {
    return isPropValid(propName);
  }

  return true;
};

export const StyleSheetManager = ({ children }: StyleSheetManagerProps) => {
  return (
    <StyleSheetManagerLibrary shouldForwardProp={shouldForwardProp}>
      {children}
    </StyleSheetManagerLibrary>
  );
};
