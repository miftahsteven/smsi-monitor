import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { H4, H5, H6, P } from "../AbstractElements";
import { SocialLoginLinks } from "../_core/Other/SocialLoginLinks";

export default function SignInForm() {
  const navigate = useNavigate();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("test123@gmail.com");
  const [password, setPassword] = useState("Test@123");

  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test123@gmail.com" && password === "Test@123") {
      toast.success("Login Success...!");
      navigate(`${process.env.PUBLIC_URL}/dashboard`);
      localStorage.setItem("login", JSON.stringify(true));
    } else {
      toast.error("Masukan username dan password yang benar...!");
    }
  };

  return (
    <div className='container-fluid p-0'>
      <div className='row'>
        <div className='col-12'>
          <div className='login-card'>
            <form className='theme-form login-form' onSubmit={handleSubmit}>
              <div className='login-header text-center'>
                <H4>Login</H4>
                <H6>Selamat Datang, Silahkan Login dulu.</H6>
              </div>
              {/* <div className='form-group'>
                <SocialLoginLinks />
              </div>
              <div className='login-social-title'>
                <H5>Sign in with Email</H5>
              </div> */}
              <div className='form-group'>
                <label>Email Address</label>
                <div className='input-group'>
                  <span className='input-group-text'>
                    <i className='icon-email' />
                  </span>
                  <input className='form-control' type='email' required placeholder='Test@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className='form-group'>
                <label>Password</label>
                <div className='input-group'>
                  <span className='input-group-text'>
                    <i className='icon-lock' />
                  </span>
                  <input className='form-control' type={isPasswordVisible ? "text" : "password"} required placeholder='*********' value={password} onChange={(e) => setPassword(e.target.value)} />
                  <div className='show-hide' onClick={togglePasswordVisibility}>
                    <span className='show'> </span>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <div className='checkbox'>
                  <input id='checkbox1' type='checkbox' />
                  <label htmlFor='checkbox1'>Remember password</label>
                </div>
                <Link className='link' to='/forget-password'>
                  Forgot password?
                </Link>
              </div>
              <div className='form-group'>
                <button className='btn btn-primary btn-block' type='submit'>
                  Sign in
                </button>
              </div>
              {/* <P>
                Don't have an account?
                <Link className='ms-2' to='/register'>
                  Create Account
                </Link>
              </P> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
