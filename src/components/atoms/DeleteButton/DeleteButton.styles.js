import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
