import styled from 'styled-components';

export const ViewWrapper = styled.div`
  margin: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 600px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
