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
                <a className='categoryBox'  href=''>
                  <h4 className='categoryTitle'>Carboidratos</h4>
                  <div className='categoryButton'></div>
                </a>
                <div className="invisibleBorder"></div>
                <div className='dropdownMenu'>
                  <a href='' className='categoryDropdown'>Naturais</a>
                  <a href='' className='categoryDropdown'>Processados</a>
                  <a href='' className='categoryDropdown'>Ultraprocessados</a>
                </div>
              </li>
              <li className='navCategory'>
                <a className='categoryBox' href=''>
                  <h4 className='categoryTitle'>Proteínas</h4>
                  <div className='categoryButton'></div>
                </a>
                <div className="invisibleBorder"></div>
                <div className='dropdownMenu'>
                  <a href='' className='categoryDropdown'>Carnes vermelhas</a>
                  <a href='' className='categoryDropdown'>Carnes brancas</a>
                  <a href='' className='categoryDropdown'>Peixes</a>
                  <a href='' className='categoryDropdown'>Outros</a>
                </div>
              </li>
              <li className='navCategory'>
                <a className='categoryBox' href=''>
                  <h4 className='categoryTitle'>Gorduras</h4>
                  <div className='categoryButton'></div>
                </a>
                <div className="invisibleBorder"></div>
                <div className='dropdownMenu'>
                  <a href='' className='categoryDropdown'>Naturais</a>
                  <a href='' className='categoryDropdown'>Suplementos</a>
                  <a href='' className='categoryDropdown'>Caseiras</a>
                </div>
              </li>
              <li className='navCategory'>
                <a className='categoryBox' href=''>
                  <h4 className='categoryTitle'>Bebidas</h4>
                  <div className='categoryButton'></div>
                </a>
                <div className="invisibleBorder"></div>
                <div className='dropdownMenu'>
                  <a href='' className='categoryDropdown'>Naturais</a>
                  <a href='' className='categoryDropdown'>Alcólicas</a>
                  <a href='' className='categoryDropdown'>Estimulantes</a>
                  <a href='' className='categoryDropdown'>Processadas</a>
                  <a href='' className='categoryDropdown'>Ultrarocessadas</a>
                </div>
              </li>
            </ul>
          </div>
          <div className='userBar'>
              <ul>
                <li className='userCategory'>
                  <div href='' className='navIcon'>
                    <FontAwesomeIcon icon={faCircleUser} onClick={openUserOptions}/>
                  </div>
                  { showUserOptions ? 
                  <div>
                  </div>
                  :
                  <div className='dropdownUser'>
                    <a href='' className='categoryDropdown'>Opções</a> 
                    <a href='' className='categoryDropdown'>Favoritos</a>
                    <a href='' className='categoryDropdown'>Notificações</a> 
                    <a href='' className='categoryDropdown'>Sair</a> 
                  </div>}
                </li>
              </ul>
            </div>
        </header>
        </nav>
    )
}

export default Header;