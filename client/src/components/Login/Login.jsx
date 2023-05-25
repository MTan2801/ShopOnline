import { useContext, useState } from "react";
import "./Login.scss";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { storeUser } from "../../helpers";

const initialUser = { password: "", identifier: "" };

const Login = () => {

  const [user, setUser] = useState(initialUser);


  const navigate = useNavigate();


  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="login">
      <div><h2>Login</h2></div>
      <form onSubmit={handleLogin}>
        <label>Nhập Email:</label>
        <input
          type="email"
          name="identifier"
          value={user.identifier}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <label>Nhập Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <button type="submit"> 
        <a href="/" className="log">Login</a>
        </button>
        <h6>
            Click <Link to="/registration">Here</Link> to sign up
          </h6>
      </form>
    </div>
  );
};

export default Login;