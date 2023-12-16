import React from "react";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";

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
      <button>목록 지우기</button>
    </>
  );
}

export default ExpenseList;
