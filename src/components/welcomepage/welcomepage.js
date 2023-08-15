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
                <div>
                  <h4 className='categoryTitle'>Proteínas</h4>
                  <button className='categoryButton'></button>
                </div>
                <div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className='navCategory'>
                <div>
                  <h4 className='categoryTitle'>Gorduras</h4>
                  <button className='categoryButton'></button>
                </div>
                <div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className='navCategory'>
                <div>
                  <h4 className='categoryTitle'>Frutas</h4>
                  <button className='categoryButton'></button>
                </div>
                <div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
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
              <p className='foodName'>Legumes</p>
            </div>
            <div>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faAppleWhole} style={{color: "#000000",}} />
              </button>
              <p className='foodName'>Frutos</p>
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
              <p className='foodName'>Ultraprocessados</p>
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
        <div className='foodCarousel'>
          <h2 
          className='foodSectionTitle' 
          >
            Ultraprocessados
          </h2>
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
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
              <div className='foodBar' id='foodBar-2'>
                <a className='previousArrow' href='#foodBar-1'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div className='foodImage'>BBB</div>
                <div className='foodImage'>BBB</div>
                <div className='foodImage'>BBB</div>
                <div className='foodImage'>BBB</div>
                <div className='foodImage'>BBB</div>
                <div className='foodImage'>BBB</div>
                <a className='nextArrow' href='#foodBar-3'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
              <div className='foodBar' id='foodBar-3'>
                <a className='previousArrow' href='#foodBar-2'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div className='foodImage'>CCC</div>
                <div className='foodImage'>CCC</div>
                <div className='foodImage'>CCC</div>
                <div className='foodImage'>CCC</div>
                <div className='foodImage'>CCC</div>
                <div className='foodImage'>CCC</div>
                <a className='nextArrow' href='#foodBar-4'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight}/>
                </a>
              </div>
              <div className='foodBar' id='foodBar-4'>
                <a className='previousArrow' href='#foodBar-3'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div className='foodImage'>DDD</div>
                <div className='foodImage'>DDD</div>
                <div className='foodImage'>DDD</div>
                <div className='foodImage'>DDD</div>
                <div className='foodImage'>DDD</div>
                <div className='foodImage'>DDD</div>
                <a className='nextArrow' href='#foodBar-1'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='foodCarousel'>
          <h2 
          className='foodSectionTitle' 
          >
            Naturais
          </h2>
          <div className='foodContainer'>
            <div className='foodSection'>
              <div className='foodBar' id='foodBar-5'>
                <div className='foodImage'>AAA</div>
                <div className='foodImage'>AAA</div>
                <div className='foodImage'>AAA</div>
                <div className='foodImage'>AAA</div>
                <div className='foodImage'>AAA</div>
                <div className='foodImage'>AAA</div>
                <a className='nextArrow' href='#foodBar-6'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
              <div className='foodBar' id='foodBar-6'>
                <a className='previousArrow' href='#foodBar-5'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div className='foodImage'>BBB</div>
                <div className='foodImage'>BBB</div>
                <div className='foodImage'>BBB</div>
                <div className='foodImage'>BBB</div>
                <div className='foodImage'>BBB</div>
                <div className='foodImage'>BBB</div>
                <a className='nextArrow' href='#foodBar-7'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
              <div className='foodBar' id='foodBar-7'>
                <a className='previousArrow' href='#foodBar-6'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div className='foodImage'>CCC</div>
                <div className='foodImage'>CCC</div>
                <div className='foodImage'>CCC</div>
                <div className='foodImage'>CCC</div>
                <div className='foodImage'>CCC</div>
                <div className='foodImage'>CCC</div>
                <a className='nextArrow' href='#foodBar-8'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight}/>
                </a>
              </div>
              <div className='foodBar' id='foodBar-8'>
                <a className='previousArrow' href='#foodBar-7'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div className='foodImage'>DDD</div>
                <div className='foodImage'>DDD</div>
                <div className='foodImage'>DDD</div>
                <div className='foodImage'>DDD</div>
                <div className='foodImage'>DDD</div>
                <div className='foodImage'>DDD</div>
                <a className='nextArrow' href='#foodBar-5'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
  
  export default WelcomePage;