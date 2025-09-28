import { useState } from "react";
import { Link } from "react-router-dom";
import { H4, H5, H6, P } from "../../../AbstractElements";
import { SocialLoginLinks } from "../../../_core/Other/SocialLoginLinks";

export default function LoginForm() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("checkbox1").checked = "";
  };

  return (
    <div className='container-fluid p-0'>
      <div className='row'>
        <div className='col-12'>
          <div className='login-card'>
            <form className='theme-form login-form' onSubmit={handleSubmit}>
              <div className='login-header text-center'>
                <H4>Login</H4>
                <H6>Selamat Datang, Silahkan Login.</H6>
              </div>
              {/* <div className='form-group'>
                <SocialLoginLinks />
              </div> */}
              <div className='login-social-title'>
                <H5>Sign in with Email</H5>
              </div>
              <div className='form-group'>
                <label>Email Address</label>
                <div className='input-group'>
                  <span className='input-group-text'>
                    <i className='icon-email' />
                  </span>
                  <input className='form-control' type='email' required placeholder='Test@gmail.com' />
                </div>
              </div>
              <div className='form-group'>
                <label>Password</label>
                <div className='input-group'>
                  <span className='input-group-text'>
                    <i className='icon-lock' />
                  </span>
                  <input className='form-control' type={isPasswordVisible ? "text" : "password"} required placeholder='*********' />
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
                  Lupa password?
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
