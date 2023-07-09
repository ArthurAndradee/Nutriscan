/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import "./welcomepage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleUser, faBookmark, faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'

function WelcomePage() {
    return (
      <div>
        <nav className='headerNav'>
          <header className='mainHeader'>
          <nav className='companyTitle'>
            <img className='companyIcon'
            src='https://i.imgur.com/v52Jw20.png'
            />
          </nav>
            <div className='navBar'>
              <div className='navCategory'>
                <h4 className='categoryTitle'>Carboidratos</h4>
                <button className='categoryButton'></button>
              </div>
              <div className='navCategory'>
                <h4 className='categoryTitle'>Proteínas</h4>
                <button className='categoryButton'></button>
              </div>
              <div className='navCategory'>
                <h4 className='categoryTitle'>Gorduras</h4>
                <button className='categoryButton'></button>
              </div>
              <div className='navCategory'>
                <h4 className='categoryTitle'>Frutas</h4>
                <button className='categoryButton'></button>
              </div>
            </div>
            <div className='userNav'>
              <button className='navIcon'>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
              <button className='navIcon'>
                <FontAwesomeIcon icon={faBell} />
              </button>
              <button className='navIcon'>
                <FontAwesomeIcon icon={faCircleUser} />
              </button>
            </div>
            </header>
          </nav>
        <section className='mainSection'>
          <h1 className='mainSectionTitle'>
            Pesquisará o que hoje?
          </h1>
          <div>
            <div className='faIconDiv'>
              <FontAwesomeIcon style={{fontSize:'22px', marginTop:'10px', color:'#6e6e6e'}} icon={faMagnifyingGlass} />
            </div>
            <input className='mainSectionInput' type='text' 
            placeholder='Sua pesquisa aqui'
            />
          </div>
          <div style={{height:'10px'}}></div>
          <div className='mainSectionButtons'>
            <button className='foodButton'>Vegetais</button>
            <button className='foodButton'>Frutas</button>
            <button className='foodButton'>Carboidratos</button>
            <button className='foodButton'>Carnes</button>
            <button className='foodButton'>Frutos do Mar</button>
            <button className='foodButton'>Leite e Derivados</button>
            <button className='foodButton'>Fast Food</button>
            <button className='foodButton'>Açucarados</button>
            <button className='foodButton'>Em Dúvida</button>
          </div>
        </section>
        <main className='foodSection'>
          <h2 className='foodSectionTitle'>Carnes Vermelhas</h2>
          <div className='foodBar'>
            <article></article>
            <article></article>
            <article></article>
            <article></article>
            <article></article>
            <article></article>
          </div>
        </main>
        <main className='foodSection'>
          <h2 className='foodSectionTitle'>Carnes Brancas</h2>
          <div className='foodBar'>
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