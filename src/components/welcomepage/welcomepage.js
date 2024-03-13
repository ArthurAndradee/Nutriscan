import Header from "../assets/header/header";
import Carousel from "../assets/food-carousel/carousel";
import CarouselTwo from "../assets/food-carousel/carouselTwo";
import FoodSearch from "../assets/welcome-page-foodsearch/foosearch";

function WelcomePage() {
    return (
      <div className='page'>
        <Header />
        <FoodSearch />
        <Carousel />
        <CarouselTwo />
      </div>
    ); 
  }
  
  export default WelcomePage;