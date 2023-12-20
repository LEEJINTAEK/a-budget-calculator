import React from "react";
import styled, { css } from "styled-components";
import { MdEdit, MdDelete } from "react-icons/md";

const Li = styled.li`
  background-color: var(--mainWhite);
  line-height: 1.5rem;
  padding: 10px 20px;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s linear;

  &:hover {
    width: 100%;
    transform: scale(1.02);
  }
`;

const Info = styled.div`
  flex: 0 0 60%;
  display: flex;
  justify-content: space-between;
`;
const Expense = styled.span`
  margin-right: 2rem;
`;
const Amout = styled.span`
  font-weight: 300;
  font-size: 1rem;
  padding: 1px 3px;
`;
const Btn = css`
  background: none;
  border: none;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
`;
const ClearBtn = styled.button`
  color: var(--mainRed);
  ${Btn}
`;
const EditBtn = styled.button`
  color: var(--mainGreen);
  ${Btn}
`;

function ExpenseItem(props) {
  return (
    <Li>
      <Info>
        <Expense>{props.expense.charge}</Expense>
        <Amout>{props.expense.amount}원</Amout>
      </Info>
      <div>
        <EditBtn onClick={() => console.log(props.expense.id)}>
          <MdEdit />
        </EditBtn>
        <ClearBtn onClick={() => props.handleDelete(props.expense.id)}>
          <MdDelete />
        </ClearBtn>
      </div>
    </Li>
  );
}

export default ExpenseItem;
