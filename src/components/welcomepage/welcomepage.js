/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import "./welcomepage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBell, 
  faCircleUser, 
  faBookmark, 
  faMagnifyingGlass,
  faPepperHot,
  faAppleWhole,
  faWheatAwn,
  faBacon,
  faShrimp,
  faCheese,
  faBurger,
  faCakeCandles,
  faQuestion,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

function WelcomePage() {
    return (
      <div className='page'>
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
          <div className='inputDiv'>
            <div className='faIconDiv'>
              <FontAwesomeIcon style={{fontSize:'22px', marginTop:'10px', color:'#6e6e6e'}} icon={faMagnifyingGlass} />
            </div>
            <input className='mainSectionInput' type='text' 
            placeholder='Sua pesquisa aqui'
            />
          </div>
          <div style={{height:'10%'}}></div>
          <div className='mainSectionButtons'>
            <div>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faPepperHot} style={{color: "#000000",}} />
              </button>
              <p className='foodName'>Vegetais</p>
            </div>
            <div>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faAppleWhole} style={{color: "#000000",}} />
              </button>
              <p className='foodName'>Frutas</p>
            </div>
            <div>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faWheatAwn} style={{color: "#000000",}} />
              </button>
              <p className='foodName'>Carboidratos</p>
            </div>
            <div>              
              <button className='foodButton'>
                <FontAwesomeIcon icon={faBacon} style={{color: "#000000",}} />
              </button>
              <p className='foodName'>Carnes</p>
            </div>
            <div>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faShrimp} style={{color: "#000000",}} />
              </button>
              <p className='foodName'>Pescados</p>
            </div>
            <div>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faCheese} style={{color: "#000000",}}/>
              </button>
              <p className='foodName'>Laticínios</p>
            </div>
            <div>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faBurger} style={{color: "#000000",}}/>
              </button>
              <p className='foodName'>Fast Food</p>
            </div>
            <div>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faCakeCandles} style={{color: "#000000",}}/>
              </button>
              <p className='foodName'>Açucarados</p>
            </div>
            <div>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faQuestion} style={{color: "#000000",}}/>
              </button>
              <p className='foodName'>Em Dúvida</p>
            </div>
          </div>
        </section>
        <h2 className='foodSectionTitle'>Carnes Vermelhas</h2>
        <div className='foodContainer'>
          <div className='foodSection'>
            <div className='foodBar' id='foodBar-1'>
              <div className='foodImage'>AAA</div>
              <div className='foodImage'>AAA</div>
              <div className='foodImage'>AAA</div>
              <div className='foodImage'>AAA</div>
              <div className='foodImage'>AAA</div>
              <div className='foodImage'>AAA</div>
              <a className='nextArrow' href='#foodBar-2'>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
            <div className='foodBar' id='foodBar-2'>
              <a className='previousArrow' href='#foodBar-1'>
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
              <div className='foodImage'>BBB</div>
              <div className='foodImage'>BBB</div>
              <div className='foodImage'>BBB</div>
              <div className='foodImage'>BBB</div>
              <div className='foodImage'>BBB</div>
              <div className='foodImage'>BBB</div>
              <a className='nextArrow' href='#foodBar-3'>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
            <div className='foodBar' id='foodBar-3'>
              <a className='previousArrow' href='#foodBar-2'>
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
              <div className='foodImage'>CCC</div>
              <div className='foodImage'>CCC</div>
              <div className='foodImage'>CCC</div>
              <div className='foodImage'>CCC</div>
              <div className='foodImage'>CCC</div>
              <div className='foodImage'>CCC</div>
              <a className='nextArrow' href='#foodBar-4'>
                <FontAwesomeIcon icon={faChevronRight} className='nextArrow' />
              </a>
            </div>
            <div className='foodBar' id='foodBar-4'>
              <a className='previousArrow' href='#foodBar-3'>
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
              <div className='foodImage'>DDD</div>
              <div className='foodImage'>DDD</div>
              <div className='foodImage'>DDD</div>
              <div className='foodImage'>DDD</div>
              <div className='foodImage'>DDD</div>
              <div className='foodImage'>DDD</div>
            </div>
          </div>
        </div>
        <svg>
          <symbol id="next" viewBox="0 0 512 1024">
            <path fill="black"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
          </symbol>
          <symbol id="previous" viewBox="0 0 512 1024">
            <path fill="black"
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
          </symbol>
        </svg>
      </div>
    );
  }
  
  export default WelcomePage;