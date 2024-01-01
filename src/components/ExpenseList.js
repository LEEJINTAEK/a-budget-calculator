import React from "react";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const Lists = styled.ul`
  list-style-type: none;
  border: none;
  padding: 0;
`;

function ExpenseList(props) {
  return (
    <>
      <Lists>
        {props.expenses.map((expense) => (
          <ExpenseItem
            expense={expense}
            key={expense.id}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
          />
        ))}
      </Lists>
      <button className="btn" onClick={() => props.clearData()}>
        목록 삭제
        <MdDelete className="btn-icon" />
      </button>
    </>
  );
}

export default ExpenseList;
