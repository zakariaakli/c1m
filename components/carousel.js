import './carousel.scss';

const Carousel = props => {

    return(
        <div id="carouselExampleControls" className="carousel slide mobileSlider" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 responsive" src="/img/Welcome.gif" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 responsive" src="/img/Best destinations in 2020.gif" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 responsive" src="/img/zaks trip.gif" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    
    )
}

export default Carousel;