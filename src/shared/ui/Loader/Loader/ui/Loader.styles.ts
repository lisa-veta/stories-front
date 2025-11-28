import styled, { keyframes } from 'styled-components';

export const Loader = styled.div`
    width: 65px;
    aspect-ratio: 1;
    --g: radial-gradient(
            farthest-side,
            #0000 calc(95% - 3px),
            ${({ theme }) => theme.color.background.primary} calc(100% - 3px) 98%,
            #0000 101%
    ) no-repeat;
    background: var(--g), var(--g), var(--g);
    background-size: 30px 30px;
    animation: ${() => keyframes`
        0% {
            background-position: 0 0, 0 100%, 100% 100%;
        }
        25% {
            background-position: 100% 0, 0 100%, 100% 100%;
        }
        50% {
            background-position: 100% 0, 0 0, 100% 100%;
        }
        75% {
            background-position: 100% 0, 0 0, 0 100%;
        }
        100% {
            background-position: 100% 100%, 0 0, 0 100%;
        }
    `} 1.5s infinite;
`;