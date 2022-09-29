import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const req = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: await JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await req.json();

    if (data.status == "ok") {
      navigate("/");
    } else {
      alert("Duplicate Email");
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
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

	  <a className="nav-link active" aria-current="page" href="#"> <Link to="/" >
          Login
                  </Link></a>
    </div>
  );
};

export default Register;
