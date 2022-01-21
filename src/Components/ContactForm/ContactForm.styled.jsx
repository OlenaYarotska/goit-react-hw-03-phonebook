import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  width: 500px;
  border: 1px solid #000000;
  padding: 15px;
  margin-bottom: 20px;
`;

export const Form = styled.form``;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 200px;
`;

export const Button = styled.button`
  &:hover {
    cursor: pointer;
    background-color: #1a6624;
  }
`;
