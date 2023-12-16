import React from "react";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const Lists = styled.ul`
  list-style-type: none;
  border: none;
  padding: 0;
`;

function ExpenseList() {
  return (
    <>
      <ul>
        <ExpenseItem></ExpenseItem>
      </ul>
      <button className="btn">
        목록 삭제
        <MdDelete className="btn-icon" />
      </button>
    </>
  );
}

export default ExpenseList;
