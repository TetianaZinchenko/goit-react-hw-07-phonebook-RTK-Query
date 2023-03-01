import styled from '@emotion/styled';

export const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 5px 20px;
  border: 1px solid #400080;
  border-radius: 5px;
  background-color: #400080;
  color: #ffffff;
  font-size: 16px;
  margin-top: 20px;
  box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.8),
    inset rgba(0, 0, 0, 0.3) -5px -5px 8px 5px,
    inset rgba(255, 255, 255, 0.5) 5px 5px 8px 5px,
    1px 1px 1px rgba(255, 255, 255, 0.1), -2px -2px 5px rgba(0, 0, 0, 0.5);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #5218fa;
    border: 2px solid #ffffff;
    outline-color: #5218fa;
  }

  &:active {
    background-color: #5218fa;
    outline-color: #5218fa;
  }
`;
