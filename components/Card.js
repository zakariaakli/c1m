import './card.scss';

const Card = props => {

    return(
        <div className="card text-center shadow ml-3 mb-3 mr-3 mt-3">
        <div className="overflow">
          <img src = {props.img} alt="spinevision logo" className="card-img-top "></img> 
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">
            Card Title
            </h4>
            <p className="card-text text-secondary">
            fjiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            codddddddddddddddddddddddddddddddddddddddddddddddddddd
            fjiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii

            </p>
            <div className="d-flex flex-row cardAavatar">
                    <img className="rounded-circle avatar" alt="100x100" src={props.imgAvatar}
                    data-holder-rendered="true"/>
                    <p className="center">BY</p> <p className="centerName"><a href="#">Z.AKLI</a></p>
            </div>
        </div>
    </div>
    
    )
}

export default Card;