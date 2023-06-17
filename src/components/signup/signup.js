import React from 'react';
import './signup.css'

function Signup() {
    return (
      <div>
        <section className='adPage'>
          <section className='adTextContainer'>
            <h1 className='adTitle'>NutriScan</h1>
            <h1 className='adSubTitle'>Crie uma conta</h1>
            <article className='adAbout'>Faça parte da primeira plataforma aberta 
              <br /> de informações nutricionais do Brasil.
            </article>
          </section>
        </section>
        <section className='formContainer'>
          <h1 className='formTitle'>Sign Up</h1>
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
            <input placeholder='sua senha' type='password' pattern=".{8,}"
            title="Insira no mínimo 8 caracteres" required
            />
            <input type='submit' value='Criar conta'/>
          </form>
          <p className='alreadyAccountMember'>Já é um membro?
            <p className='alreadyAccountMemberClick'>Entre aqui</p>
          </p>
        </section>
      </div>
    );
  }
  
  export default Signup;