import './card.scss';

const Card = props => {

    return(
        <div className="card text-center shadow">
        <div className="overflow">
          <img src = {props.img} alt="spinevision logo" className="card-img-top"></img> 
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">
            Card Title
          </h4>
          <p className="card-text text-secondary">
            fjiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            codddddddddddddddddddddddddddddddddddddddddddddddddddd
          </p>
          <a href="#" className="btn btn-outline-success">Go Home</a>
        </div>
    </div>
    )
}

export default Card;