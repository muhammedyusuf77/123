import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [openRegister, setOpenRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputAdd = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const parolAdd = () => {
    setPasswordVisible((prev) => !prev); 
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-item">
            <div className="header-logo">
              <li>
                <Link to="/">
                  <img src="/public/logo.svg" alt="" />
                </Link>
              </li>
              <h2>GREENSHOP</h2>
            </div>
            <div className="header-navigation">
              <li>
                <Link to="/Home">
                  <h2>Home</h2>
                </Link>
              </li>
              <li>
                <Link to="/Shop">
                  <h2>Shop</h2>
                </Link>
              </li>
              <li>
                <Link to="/Plant Care">
                  <h2>Plant Care</h2>
                </Link>
              </li>
              <li>
                <Link to="/Blogs">
                  <h2>Blogs</h2>
                </Link>
              </li>
            </div>
            <div className="header-menu">
              <img src="/public/seorch.svg" alt="" />
              <img src="/public/cart.svg" alt="" />
              <div className="btn">
                <button onClick={() => setOpenRegister(true)}>
                  <img src="/public/login.svg" alt="" />
                  <p>Login</p>
                </button>
              </div>
            </div>
          </div>

          {openRegister && (
            <>
              <div className="backdrop"></div>

              <div className="eel">
                <div className="registrs">
                  <div className="modal">
                    <div className="modal-content">
                      <img
                        onClick={() => setOpenRegister(false)}
                        src="/public/close.svg"
                        alt=""
                      />
                    </div>
                    <div className="textt">
                      <h2 className="gg">Login</h2>
                      <h2>|</h2>
                      <h2>Register</h2>
                    </div>
                    <div className="opis">
                      <p>Enter your username and password to login.</p>
                      <input
                        className="email"
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={inputAdd}
                      />
                      <div className="password-container">
                        <input
                          className="password"
                          type={passwordVisible ? "text" : "password"}
                          name="password"
                          placeholder="***********"
                          value={formData.password}
                          onChange={inputAdd}
                        />
                        <img
                          src={
                            passwordVisible
                              ? "/public/glazOtkput.svg"
                              : "/public/glazZakrut.svg"
                          }
                          alt="toggle visibility"
                          className="eye-icon"
                          onClick={parolAdd}
                        />
                      </div>
                      <p className="zab">Forgot Password?</p>
                    </div>
                    <button className="login-btn">Login</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
