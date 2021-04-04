import './ArticleCard.scss';
const ArticleCard = props => {
return(

  <div class="card bg-dark text-white bg-10"  >
    <img class="card-img" src={props.img} alt={props.imgAlt}></img>
    <div class="card-img-overlay">
<h5 class="card-title1">{props.title}</h5>
      <p class="card-text1">{props.resume}</p>

    </div>

  </div>






)
}

export default ArticleCard;