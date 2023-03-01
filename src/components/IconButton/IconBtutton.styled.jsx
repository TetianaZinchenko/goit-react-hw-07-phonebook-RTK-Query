import styled from '@emotion/styled';

export const IconButtonStyle = styled.button`
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 10px;
  background-color: #400080;
  color: #ffffff;

  cursor: pointer;

  & svg {
    display: block;
  }

  &:hover {
    background-color: #5218fa;
    outline: 2px solid #ffffff;
  }
`;
