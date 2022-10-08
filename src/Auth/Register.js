import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const req = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:  JSON.stringify({
        name,
        email,
        role,
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
        <select name="role" type="role"value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">role</option>
          <option value="0">admin</option>
          <option value="1">user</option>
        
        </select>
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

      <a className="nav-link active" aria-current="page" href="#">
        {" "}
        <Link to="/">Login</Link>
      </a>
    </div>
  );
};

export default Register;
