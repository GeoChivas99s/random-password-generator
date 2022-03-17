import React, { useState } from "react";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const MainContentWrapper = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-background-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 100px 0px;
  width: 85%;

  .password {
    font-size: 50px;
    color: white;
    padding-bottom: 20px;
  }
  .gerar-senha {
    background: white;
    color: black;
    border: none;
    outline: none;
    padding: 20px 40px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
  }
  @media (max-width: 776px) {
    .password {
      font-size: 25px;
    }
  }
`;

function MainContent(props) {
  const [password, setPassword] = useState("******************");
  const { handeToast } = props;
  const generatePassword = () => {
    const randomPassword =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    setPassword(randomPassword);
    navigator.clipboard.writeText(randomPassword);
    if (navigator.clipboard.writeText(randomPassword)) {
  handeToast();
       
    }
  };

  return (
    <MainContentWrapper>
      <div className="password">{password}</div>
      <button onClick={generatePassword} className="gerar-senha">
        Gerar senha
      </button>

    </MainContentWrapper>
  );
}

export default MainContent;
