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
  width?: string;
}

export const Button = styled.button<ButtonProps>`
    width: ${({ width }) => width || '100%'};
    padding: 10px;
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
