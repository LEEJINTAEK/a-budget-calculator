import React, { useState } from "react";
import styled from "styled-components";
import ExpenseForm from "./components/ExpenseForm.js";
import ExpenseList from "./components/ExpenseList.js";
import Alert from "./components/Alert.js";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
`;

function App() {
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [data, newData] = useState([]);
  const [alert, setAlert] = useState({ show: false });

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const newChargeData = { id: crypto.randomUUID(), charge, amount };
      newData([...data, newChargeData]);
      setCharge("");
      setAmount(0);
      handleAlert({ type: "success", text: "목록이 추가되었습니다" });
    } else {
      handleAlert({
        type: "danger",
        text: "지출 항목의 값이 존재하거나 비용이 0보다 커야합니다.",
      });
    }
  };

  const handleAlert = (state) => {
    setAlert({ show: true, type: state.type, text: state.text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };
  const handleDelete = (Id) => {
    const newFakeData = data.filter((data) => data.id !== Id);
    newData(newFakeData);
    handleAlert({ type: "danger", text: "목록이 삭제되었습니다." });
  };

  return (
    <Main>
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h1>예산 계산기</h1>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
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
