import React, { useState } from "react";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn login-btn">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
