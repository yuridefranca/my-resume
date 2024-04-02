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

  margin: 0 auto;
  padding:  ${props => props.size === 'large' ? '0.7rem 2rem' : '0.5rem 1rem'};
  width: fit-content;

  cursor: pointer;

  font-size: ${props => props.size === 'large' ? '1.2rem' : '1rem'};
  font-weight: ${props => props.size === 'large' ? '700' : '500'};
`;