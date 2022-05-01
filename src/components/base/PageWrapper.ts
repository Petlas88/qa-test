import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  padding: 50px 0;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
  }
`;