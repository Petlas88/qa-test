import styled from 'styled-components'

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  & > div {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;