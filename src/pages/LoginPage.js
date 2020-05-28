import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">
        Login
        <input type="text" />
      </label>
      <label htmlFor="">
        Hasło
        <input type="password" />
      </label>
      <button>Zaloguj sie</button>
    </div>
  );
};

export default LoginPage;
