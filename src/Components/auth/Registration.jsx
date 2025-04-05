import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");
  const reg = (e) => {
    e.preventDefault();

    if (password !== copyPassword) {
      setError("Пароли не совпадают");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        setCopyPassword("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={reg}>
        <h3>Регистрация</h3>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Введите email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Придумайте пароль"
        />
        <input
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
          type="password"
          placeholder="Повторите пароль"
        />
        <button>Создать аккаунт</button>
        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
      </form>
    </div>
  );
};

export default Registration;
