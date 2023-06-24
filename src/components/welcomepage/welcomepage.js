/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import "./welcomepage.css"

function WelcomePage() {
    return (
      <div>
        <header>
          <div>
            <img />
            <h3 />
          </div>
          <div>
            <div>
              <h4>Carboidratos</h4>
              <button></button>
            </div>
            <div>
              <h4>Proteínas</h4>
              <button></button>
            </div>
            <div>
              <h4>Gorduras</h4>
              <button></button>
            </div>
            <div>
              <h4>Frutas</h4>
              <button></button>
            </div>
          </div>
          <div>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </header>
        <section>
          <h1>Pesquisará o que hoje?</h1>
          <div>
            <input type='text'/>
          </div>
          <div>
            <button>Vegetais</button>
            <button>Frutas</button>
            <button>Carboidratos</button>
            <button>Carnes</button>
            <button>Frutos do Mar</button>
            <button>Leite e Derivados</button>
            <button>Fast Food</button>
            <button>Açucarados</button>
            <button>Em Dúvida</button>
          </div>
        </section>
        <main>
          <h2>Carnes Vermelhas</h2>
          <div>
            <article></article>
            <article></article>
            <article></article>
            <article></article>
            <article></article>
            <article></article>
          </div>
        </main>
        <main>
          <h2>Carnes Brancas</h2>
          <div>
            <article></article>
            <article></article>
            <article></article>
            <article></article>
            <article></article>
            <article></article>
          </div>
        </main>
      </div>
    );
  }
  
  export default WelcomePage;