import React, { useState } from "react";
import { Container } from "./styles";
import MainRightSide from "../../components/MainRightSide";
import ForgotPassword from "../../components/ForgotPassword";
import CreateUser from "../../components/CreateUser";
import Login from "../../components/Login";
import Welcome from "../../components/Welcome";

export function Main() {
  const [showLogin, setShowLogin] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false);

  const handleCreateUser = () => {
    setShowCreateUser(true);
    setShowForgotPassword(false);
    setShowLogin(false);
  };

  const handleWelcome = () => {
    setShowWelcome(true);
    setShowForgotPassword(false);
    setShowLogin(false);
    setShowCreateUser(false);
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    setShowLogin(false);
    setShowCreateUser(false);
  };

  const handleBack = () => {
    setShowLogin(true);
    setShowForgotPassword(false);
    setShowCreateUser(false);
  };

  return (
    <Container>
      {showWelcome && <Welcome />}
      {showLogin && (
        <Login
          createUser={handleCreateUser}
          forgotPassword={handleForgotPassword}
          welcome={handleWelcome}
        />
      )}
      {showForgotPassword && <ForgotPassword goBack={handleBack} />}
      {showCreateUser && <CreateUser goBack={handleBack} />}
      <MainRightSide />
    </Container>
  );
}
