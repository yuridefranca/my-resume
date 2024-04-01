import styled from 'styled-components';

export const StyledButton = styled.button<{
  outlined: string;
  size: string;
  theme: string;
}>`
  background: ${props => props.theme === 'colorful' ? '-webkit-linear-gradient(var(--primary-button-background))' : 'transparent'};
  background: ${props => props.theme === 'colorful' ? 'linear-gradient(var(--primary-button-background))' : 'transparent'};
  backdrop-filter: ${props => props.theme === 'blur' ? 'blur(10px)' : 'none'};

  border-radius: ${props => props.size === 'small' ? '1.2rem' : '0.7rem'};
  border: ${props => props.outlined === 'true' ? '1px solid rgba(var(--primary-color), 0.5)' : 'none'};

  padding: 0.5rem 1rem;

  cursor: pointer;
`;