import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import "./carouselTwo.css"

function CarouselTwo() {
    return (

        <div>
            <h2 className='foodSectionTitle'>
              Naturais
            </h2>
            <div className='foodContainer'>
              <div className='foodSection'>
                <div className='foodBar' id='foodBar-5'>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <a className='nextArrow' href='#foodBar-6'>
                    <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                  </a>
                </div>
                <div className='foodBar' id='foodBar-6'>
                  <a className='previousArrow' href='#foodBar-5'>
                    <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                  </a>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <a className='nextArrow' href='#foodBar-7'>
                    <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                  </a>
                </div>
                <div className='foodBar' id='foodBar-7'>
                  <a className='previousArrow' href='#foodBar-6'>
                    <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                  </a>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <a className='nextArrow' href='#foodBar-8'>
                    <FontAwesomeIcon className='arrowIcon' icon={faChevronRight}/>
                  </a>
                </div>
                <div className='foodBar' id='foodBar-8'>
                  <a className='previousArrow' href='#foodBar-7'>
                    <FontAwesomeIcon className='arrowIcon' icon={faChevronLeft} />
                  </a>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <div>Food</div>
                  <a className='nextArrow' href='#foodBar-5'>
                    <FontAwesomeIcon className='arrowIcon' icon={faChevronRight} />
                  </a>
                </div>
              </div>
            </div>
        </div>
    )
}

export default CarouselTwo;