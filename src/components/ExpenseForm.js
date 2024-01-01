import React from "react";
import styled from "styled-components";
import { MdSend } from "react-icons/md";

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

function ExpenseForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <FormCenter>
        <FormGroup>
          <Label>지출 항목</Label>
          <Input
            type="text"
            placeholder="예) 렌트비"
            onChange={props.handleCharge}
            value={props.charge}
          />
        </FormGroup>
        <FormGroup>
          <Label>비용</Label>
          <Input
            type="number"
            placeholder="예) 100"
            onChange={props.handleAmount}
            value={props.amount}
          />
        </FormGroup>
      </FormCenter>
      <button type="submit" className="btn">
        {props.edit ? "수정" : "제출"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
}

export default ExpenseForm;
