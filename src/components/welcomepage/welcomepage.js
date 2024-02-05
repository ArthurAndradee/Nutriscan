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
          <nav className='navBar'>
            <ul className='navBarList'>
              <li className='navCategory'>
                <div className='categoryBox' href=''>
                  <h4 className='categoryTitle'>Carboidratos</h4>
                  <button className='categoryButton'></button>
                </div>
                <div className='dropdownMenu'>
                  <a href='' className='categoryDropdown'>Naturais</a>
                  <a href='' className='categoryDropdown'>Processados</a>
                  <a href='' className='categoryDropdown'>Ultraprocessados</a>
                </div>
              </li>
              <li className='navCategory'>
                <a className='categoryBox' href=''>
                  <h4 className='categoryTitle'>Proteínas</h4>
                  <button className='categoryButton'></button>
                </a>
                <div className='dropdownMenu'>
                  <a href='' className='categoryDropdown'>Naturais</a>
                  <a href='' className='categoryDropdown'>Processadas</a>
                  <a href='' className='categoryDropdown'>Ultraprocessadas</a>
                </div>
              </li>
              <li className='navCategory'>
                <a className='categoryBox' href=''>
                  <h4 className='categoryTitle'>Gorduras</h4>
                  <button className='categoryButton'></button>
                </a>
                <div className='dropdownMenu'>
                  <a href='' className='categoryDropdown'>Naturais</a>
                  <a href='' className='categoryDropdown'>Processadas</a>
                  <a href='' className='categoryDropdown'>Ultraprocessadas</a>
                </div>
              </li>
              <li className='navCategory'>
                <a className='categoryBox' href=''>
                  <h4 className='categoryTitle'>Proteínas</h4>
                  <button className='categoryButton'></button>
                </a>
                <div className='dropdownMenu'>
                  <a href='' className='categoryDropdown'>Naturais</a>
                  <a href='' className='categoryDropdown'>Processadas</a>
                  <a href='' className='categoryDropdown'>Ultraprocessadas</a>
                </div>
              </li>
            </ul>
          </nav>
            <div className='userNav'>
              <a href='' className='navIcon'>
                <FontAwesomeIcon icon={faCircleUser} />
              </a>
            </div>
            </header>
          </nav>
        <section className='mainSection'>
          <h1 className='mainSectionTitle'>
            Pesquise seu alimento
          </h1>
          <div className='inputDiv'>
            <a className='submitButton'>
              <FontAwesomeIcon style={{fontSize:'22px', marginTop:'10px', color:'#6e6e6e'}} icon={faMagnifyingGlass} />
            </a>
            <input className='mainSectionInput' type='text' 
            placeholder='Sua pesquisa aqui'
            />
          </div>
          <div style={{height:'10%'}}></div>
          <div className='mainSectionButtons'>
            <a href=''>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faPepperHot}/>
              </button>
              <p className='foodName'>Legumes</p>
            </a>
            <a href=''>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faAppleWhole}/>
              </button>
              <p className='foodName'>Frutos</p>
            </a>
            <a href=''>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faWheatAwn}/>
              </button>
              <p className='foodName'>Carboidratos</p>
            </a>
            <a href=''>              
              <button className='foodButton'>
                <FontAwesomeIcon icon={faBacon}/>
              </button>
              <p className='foodName'>Carnes</p>
            </a>
            <a href=''>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faShrimp}/>
              </button>
              <p className='foodName'>Pescados</p>
            </a>
            <a href=''>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faCheese}/>
              </button>
              <p className='foodName'>Laticínios</p>
            </a>
            <a href=''>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faBurger}/>
              </button>
              <p className='foodName'>Fast Food</p>
            </a>
            <a href=''>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faCakeCandles}/>
              </button>
              <p className='foodName'>Açucarados</p>
            </a>
            <a href=''>
              <button className='foodButton'>
                <FontAwesomeIcon icon={faQuestion}/>
              </button>
              <p className='foodName'>Em Dúvida</p>
            </a>
          </div>
        </section>
        <div>
          <h2 className='foodSectionTitle'>
            Ultraprocessados
          </h2>
          <div className='foodContainer'>
            <div className='foodSection'>
              <div className='foodBar' id='foodBar-1'>
                <div>AAA</div>
                <div>AAA</div>
                <div>AAA</div>
                <div>AAA</div>
                <div>AAA</div>
                <div>AAA</div>
                <a className='nextArrow' href='#foodBar-2'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
              <div className='foodBar' id='foodBar-2'>
                <a className='previousArrow' href='#foodBar-1'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div>BBB</div>
                <div>BBB</div>
                <div>BBB</div>
                <div>BBB</div>
                <div>BBB</div>
                <div>BBB</div>
                <a className='nextArrow' href='#foodBar-3'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
              <div className='foodBar' id='foodBar-3'>
                <a className='previousArrow' href='#foodBar-2'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div>CCC</div>
                <div>CCC</div>
                <div>CCC</div>
                <div>CCC</div>
                <div>CCC</div>
                <div>CCC</div>
                <a className='nextArrow' href='#foodBar-4'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight}/>
                </a>
              </div>
              <div className='foodBar' id='foodBar-4'>
                <a className='previousArrow' href='#foodBar-3'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div>DDD</div>
                <div>DDD</div>
                <div>DDD</div>
                <div>DDD</div>
                <div>DDD</div>
                <div>DDD</div>
                <a className='nextArrow' href='#foodBar-1'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 
          className='foodSectionTitle' 
          >
            Naturais
          </h2>
          <div className='foodContainer'>
            <div className='foodSection'>
              <div className='foodBar' id='foodBar-5'>
                <div>AAA</div>
                <div>AAA</div>
                <div>AAA</div>
                <div>AAA</div>
                <div>AAA</div>
                <div>AAA</div>
                <a className='nextArrow' href='#foodBar-6'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
              <div className='foodBar' id='foodBar-6'>
                <a className='previousArrow' href='#foodBar-5'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div>BBB</div>
                <div>BBB</div>
                <div>BBB</div>
                <div>BBB</div>
                <div>BBB</div>
                <div>BBB</div>
                <a className='nextArrow' href='#foodBar-7'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                </a>
              </div>
              <div className='foodBar' id='foodBar-7'>
                <a className='previousArrow' href='#foodBar-6'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div>CCC</div>
                <div>CCC</div>
                <div>CCC</div>
                <div>CCC</div>
                <div>CCC</div>
                <div>CCC</div>
                <a className='nextArrow' href='#foodBar-8'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronRight}/>
                </a>
              </div>
              <div className='foodBar' id='foodBar-8'>
                <a className='previousArrow' href='#foodBar-7'>
                  <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                </a>
                <div>DDD</div>
                <div>DDD</div>
                <div>DDD</div>
                <div>DDD</div>
                <div>DDD</div>
                <div>DDD</div>
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