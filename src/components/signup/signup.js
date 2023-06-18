import React from 'react';
import './signup.css'

function Signup() {
    return (
      <div>
        <section className='adPage'>
          <section className='adTextContainer'>
            <i className='adTitle'>NutriScan</i>
            <h1 className='adSubTitle'>Crie sua conta já!</h1>
            <article className='adAbout'>Entre na maior plataforma 
             de informações nutricionais do Brasil.
            </article>
          </section>
        </section>
        <section className='formContainer'>
          <section className='formBox'>
            <h1 className='formTitle'>Criar conta</h1>
            <form>
              <p className='inputTitle'>Nome completo</p>
              <input placeholder='Seu nome aqui' type='password' pattern=".{8,}"
              title="Insira no mínimo 8 caracteres" required
              />
              <p className='inputTitle'>Email</p>
              <input placeholder='Seu email' type='email' 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required
              />
              <p className='inputTitle'>Senha</p>
              <input placeholder='Sua senha' type='password' pattern=".{8,}"
              title="Insira no mínimo 8 caracteres" required
              />
              <br />
              <input className='signUpButton' type='submit' value='Criar conta'/>
            </form>
            <p className='alreadyAccountMember'>Já tem uma conta?
              <p className='alreadyAccountMemberClick'>Entre aqui</p>
            </p>
          </section>
        </section>
      </div>
    );
  }
  
  export default Signup;