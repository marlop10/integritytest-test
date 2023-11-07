
import React, { useState } from "react";
import './../css/generalStyles.css';
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      console.log("Login successful!");
      navigate('/DataTable')
   
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <>
    <span className="container">
    <h1 className="h1">Bienvenido</h1>
    <div className="containerSecond">
       <form onSubmit={handleLogin}>
      <label className="label">
        Username:
        <input className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label className="label">
        Password:
        <input className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button className="btn" type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
    </div>
      
    </span>
    
    </>
   
  );
}

export default Login;
