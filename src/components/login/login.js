/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./login.css"

function Login() {
    return (
      <div>
        <section className='signupPage'>
          <section className='companyTitle'>
            <img src='https://img.freepik.com/free-icon/leaf_318-677961.jpg'
            className='companyLogo'/>
            <p className='companyName'>Nutriscan</p>
          </section>
          <section className='login'>
            <h1 className='welcomeTitle'>Bem vindo de volta</h1>
            <h4 className='description'>Entre na sua conta</h4>
            <input placeholder='Email' type='text'/>
            <br />
            <input placeholder='Senha' type='text'/>
            <br />
            <button className='signInButton'>Entrar</button>
          </section>
        </section>
        <section className='signup'>
          <h1 className='newTitle'>Novo aqui?</h1>
          <p className='aboutText'>
            Crie uma conta e informe-se de 
            <br />
            maneira clara sobre sua alimentação
          </p>
          <button className='signUpButton'>Cadastre-se</button>
        </section>
      </div>
    );
  }
  
  export default Login;