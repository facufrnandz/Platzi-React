/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { loginRequest } from "../actions";
import Header from "../components/Header";

import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";


const Login = ({loginRequest, history}) => {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = event => {

    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
    loginRequest(form);
    history.push('/');
  }

  return (
    <>
      <Header isLogin/>
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input 
              name="email"
              className="input" 
              type="text" 
              placeholder="Correo" 
              onChange={handleInput}
            />
            
            <input 
              name="password"
              className="input" 
              type="password" 
              placeholder="Contraseña"
              onChange={handleInput}

            />
            
            <button className="button" type="submit">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>

                <input 
                  type="checkbox" 
                  id="cbox1" 
                  value="first_checkbox"
                />
                Recuérdame

              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img alt="" src={googleIcon} /> Inicia sesión con Google
            </div>
            <div>
              <img alt="" src={twitterIcon} /> Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta {' '}
            <Link to="/register">Registrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {

  loginRequest,
};

export default connect(null,mapDispatchToProps)(Login);
