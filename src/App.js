import React, { useState } from "react";
import styled from "styled-components";
import ExpenseForm from "./components/ExpenseForm.js";
import ExpenseList from "./components/ExpenseList.js";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
`;

function App() {
  const fakeData = [
    { id: 1, charge: "렌트비", amount: 160000 },
    { id: 2, charge: "교통비", amount: 1400 },
    { id: 3, charge: "식비", amount: 12000 },
  ];
  const [data, newData] = useState(fakeData);

  const handleDelete = (Id) => {
    const newFakeData = data.filter((data) => data.id !== Id);
    return newData(newFakeData);
  };

  return (
    <Main>
      <h1>예산 계산기</h1>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm />
      </div>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList expenses={data} handleDelete={handleDelete} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <p style={{ fontSize: "2rem" }}>
          총 지출:
          <span>원</span>
        </p>
      </div>
    </Main>
  );
}

export default App;
