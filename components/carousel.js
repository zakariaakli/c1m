import './carousel.scss';

const Carousel = props => {

    return(
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="/img/Every child is an artist. The problem is how to remain an artist once we grow up.png" alt="First slide"/>
          <div class="carousel-caption">
            
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/DAFT PUNK.gif" alt="Second slide"/>
          <div class="carousel-caption bg-13">
            
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/FRENCH MONTANA.gif" alt="Third slide"/>
          <div class="carousel-caption">
            
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    
    )
}

export default Carousel;