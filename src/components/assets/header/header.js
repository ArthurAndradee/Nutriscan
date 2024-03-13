import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import "./header.css"

function Header() {
    const [showUserOptions, SetshowUserOptions] = useState([]);

    function openUserOptions() {
      SetshowUserOptions (current => !current)
    }

    return (
        <nav className='headerNav'>
          <header className='mainHeader'>
          <div className='companyTitle'>
            {<img alt="Company logo" className='companyIcon'
            src='https://i.imgur.com/v52Jw20.png'
            />}
          </div>
          <div className='navBar'>
            <ul>
              <li className='navCategory'>
                <a className='categoryBox'  href='../foodPage/food.js'>
                  <h4 className='categoryTitle'>Carboidratos</h4>
                  <div className='categoryButton'></div>
                </a>
                <div className="invisibleBorder"></div>
                <div className='dropdownMenu'>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Naturais</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Processados</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Ultraprocessados</a>
                </div>
              </li>
              <li className='navCategory'>
                <a className='categoryBox' href='../foodPage/food.js'>
                  <h4 className='categoryTitle'>Proteínas</h4>
                  <div className='categoryButton'></div>
                </a>
                <div className="invisibleBorder"></div>
                <div className='dropdownMenu'>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Carnes vermelhas</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Carnes brancas</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Peixes</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Outros</a>
                </div>
              </li>
              <li className='navCategory'>
                <a className='categoryBox' href='../foodPage/food.js'>
                  <h4 className='categoryTitle'>Gorduras</h4>
                  <div className='categoryButton'></div>
                </a>
                <div className="invisibleBorder"></div>
                <div className='dropdownMenu'>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Naturais</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Suplementos</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Caseiras</a>
                </div>
              </li>
              <li className='navCategory'>
                <a className='categoryBox' href='../foodPage/food.js'>
                  <h4 className='categoryTitle'>Bebidas</h4>
                  <div className='categoryButton'></div>
                </a>
                <div className="invisibleBorder"></div>
                <div className='dropdownMenu'>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Naturais</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Alcólicas</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Estimulantes</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Processadas</a>
                  <a href='../foodPage/food.js' className='categoryDropdown'>Ultrarocessadas</a>
                </div>
              </li>
            </ul>
          </div>
          <div className='userBar'>
              <ul>
                <li className='userCategory'>
                  <div href='../foodPage/food.js' className='navIcon'>
                    <FontAwesomeIcon icon={faCircleUser} onClick={openUserOptions}/>
                  </div>
                  { showUserOptions ? 
                  <div>
                  </div>
                  :
                  <div className='dropdownUser'>
                    <a href='../foodPage/food.js' className='categoryDropdown'>Opções</a> 
                    <a href='../foodPage/food.js' className='categoryDropdown'>Favoritos</a>
                    <a href='../foodPage/food.js' className='categoryDropdown'>Notificações</a> 
                    <a href='../foodPage/food.js' className='categoryDropdown'>Sair</a> 
                  </div>}
                </li>
              </ul>
            </div>
        </header>
        </nav>
    )
}

export default Header;