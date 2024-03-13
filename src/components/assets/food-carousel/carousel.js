import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import "./carousel.css"

function Carousel() {
    return (
        <div>
        <h2 className='foodSectionTitle'>
          Relacionados
        </h2>
        <div className='foodContainer'>
          <div className='foodSection'>
            <div className='foodBar' id='foodBar-1'>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <a className='nextArrow' href='#foodBar-2'>
                <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
              </a>
            </div>
            <div className='foodBar' id='foodBar-2'>
              <a className='previousArrow' href='#foodBar-1'>
                <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
              </a>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <a className='nextArrow' href='#foodBar-3'>
                <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
              </a>
            </div>
            <div className='foodBar' id='foodBar-3'>
              <a className='previousArrow' href='#foodBar-2'>
                <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
              </a>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <a className='nextArrow' href='#foodBar-4'>
                <FontAwesomeIcon className='arrowIcon' icon={faChevronRight}/>
              </a>
            </div>
            <div className='foodBar' id='foodBar-4'>
              <a className='previousArrow' href='#foodBar-3'>
                <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
              </a>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <div>Food</div>
              <a className='nextArrow' href='#foodBar-1'>
                <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
              </a>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Carousel;