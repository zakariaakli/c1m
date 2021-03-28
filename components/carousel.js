import './carousel.scss';
import Bouton from './bouton.js'

const Carousel = props => {

    return(
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="/img/Cheers.png" alt="First slide"/>
          <div class="carousel-caption">
          
          </div>
        </div>
        
      </div>
      
    </div>
    
    
    )
}

export default Carousel;