import styled, { css } from 'styled-components';

const ButtonVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.color.background.primary};
    color: white;
    &:hover {
        background-color: ${({ theme }) => theme.color.background.secondary}; 
    }  
  `,
  secondary: css`
    background-color: white;
    color: ${({ theme }) => theme.color.text.primary};
    border: solid  rgba(0, 0, 0, 0.10) 1px;  
    &:hover {
        background-color: ${({ theme }) => theme.color.background.default};
    }
  `,
  sideBar: css`
    background-color: ${({ isActive, theme }) => isActive ? 'rgba(0, 0, 0, 0.04)' : theme.color.background.paper };
    color: ${({ theme }) => theme.color.text.primary};
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
    justify-content: left;
  `,
};

interface ButtonProps {
  variant?: keyof typeof ButtonVariants;
  width?: string | number;
  padding?: string;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
}

export const Button = styled.button<ButtonProps>`
    width: ${({ width }) => width ? `${width}px` : '100%'};
    ${({ padding, paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    !padding && `
      padding-top: ${paddingTop ?
    (typeof paddingTop === 'number' ? `${paddingTop}px` : paddingTop)
    : '10px'};
      padding-right: ${paddingRight ?
    (typeof paddingRight === 'number' ? `${paddingRight}px` : paddingRight)
    : '10px'};
      padding-bottom: ${paddingBottom ?
    (typeof paddingBottom === 'number' ? `${paddingBottom}px` : paddingBottom)
    : '10px'};
      padding-left: ${paddingLeft ?
    (typeof paddingLeft === 'number' ? `${paddingLeft}px` : paddingLeft)
    : '10px'};
    `}
    border-radius: 20px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: background-color 0.3s ease;
    ${({ variant = 'primary' }) => ButtonVariants[variant]};
`;
