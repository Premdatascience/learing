import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const req = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: await JSON.stringify({
        email,
        password,
      }),
    });

    const data = await req.json();

    if (data.status == "ok") {
      localStorage.setItem("token", data.token);
      alert('Login successful')

      navigate("/");
    } else {
      alert("Please check your username and password");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
      <a className="nav-link active" aria-current="page" href="#"> <Link to="/register" >
          Register
                  </Link></a>
    </div>
  );
};

export default Login;
