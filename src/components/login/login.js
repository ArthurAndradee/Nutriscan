import React from 'react';

function Login() {
    return (
      <div>
        <section className='login'>
          <h1 className='welcomeTitle'>Bem vindo de volta</h1>
          <h4>Entre na sua conta</h4>
          <input placeholder='Email' type='text'/>
          <input placeholder='Senha' type='text'/>
          <button>Entrar</button>
        </section>
        <section className='signup'>
          <h1 className='newTitle'>Novo aqui?</h1>
          <p className='aboutText'>
            Crie uma conta e informe-se de maneira 
            clara sobre sua alimentação
          </p>
          <button>Cadastre-se</button>
        </section>
      </div>
    );
  }
  
  export default Login;