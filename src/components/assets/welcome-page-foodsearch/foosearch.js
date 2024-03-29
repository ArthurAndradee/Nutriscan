import "./foodsearch.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
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
} from '@fortawesome/free-solid-svg-icons'

function FoodSearch() {
  return (
    <section className='mainSection'>
          <h1 className='mainSectionTitle'>
            Pesquise seu alimento
          </h1>
          <div className='inputDiv'>
            <a href='' className='submitButton'>
              <FontAwesomeIcon style={{fontSize:'20px', marginLeft:'11px', marginTop:'12px', color:'#6e6e6e'}} icon={faMagnifyingGlass} />
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
  )
}

export default FoodSearch;