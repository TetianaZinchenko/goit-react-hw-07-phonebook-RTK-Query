import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  margin: 5px;
  font-size: 20px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  align-items: center;
`;

export const Input = styled(Field)`
  margin: 0;
  outline: none;
  border: 1px solid #333340;
  border-radius: 5px;
  padding: 10px;
  width: 70%;
`;
