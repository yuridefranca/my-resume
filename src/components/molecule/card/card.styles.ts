import styled from 'styled-components';

export const StyledCard = styled.div`
  background: rgba(var(--secondary-background-color));
  border-radius: 1rem;
  border: 1px solid rgba(var(--primary-color), 0.5);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem 1rem;

  > button {
    margin: 1.4rem auto 0;
  }
`;

export const StyledCardTitle = styled.h2`
  font-size: 2.7rem;
  font-weight: 600;
  margin: 0;
  padding: 1rem;
  text-align: center;
`;

export const StyledCardRow = styled.div`
  > label {
    font-size: 0.7rem;
    font-weight: 500;
  }

  > h4 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
  }
`;