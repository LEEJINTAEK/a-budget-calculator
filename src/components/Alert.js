import React from "react";
import styled from "styled-components";

const Alert = styled.div`
  padding: 0.75rem 1.25rem;
  color: var(--mainWhite);
  text-align: center;
  margin: 2rem auto 0 auto;
  border-raius: 2px;
  background: ${(props) =>
    props.type === "danger" ? "var(--mainRed)" : "var(--mainGreen)"};
`;

const alert = (props) => {
  return <Alert type={props.type}>{props.text}</Alert>;
};

export default alert;
