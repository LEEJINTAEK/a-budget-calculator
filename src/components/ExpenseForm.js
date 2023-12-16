import React from "react";
import styled from "styled-components";

const FormCenter = styled.div`
  display: flex;
`;
const FormGroup = styled.div`
  padding: 1rem 0.75rem;
  flex: 1;
`;
const Label = styled.label`
  display: block;
  color: var(--secondColor);
  font-size: 1rem;
  text-transform: capitalize;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--secondColor);
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
`;

function ExpenseForm() {
  return (
    <form>
      <FormCenter>
        <FormGroup>
          <Label>지출 항목</Label>
          <Input type="text" placeholder="예) 렌트비" />
        </FormGroup>
        <FormGroup>
          <Label>비용</Label>
          <Input type="number" placeholder="예) 100" />
        </FormGroup>
      </FormCenter>
      <button type="submit">제출</button>
    </form>
  );
}

export default ExpenseForm;
