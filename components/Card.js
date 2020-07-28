import './card.scss';
import Link from "next/link";

const Card = props => {
var id = {id: 'premier-voyage-a-velo-ep01'}; 
    return(
        <div className="card text-center shadow ml-3 mb-3 mr-3 mt-3" >
        <div className="overflow">
          <img src = {props.img} alt="spinevision logo" className="card-img-top "></img> 
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">
                <Link href="/posts/[id]" as={`/posts/${id.id}`}>
                <a>premier-voyage-a-velo-ep01</a>
                </Link>
            </h4>
            <p className="card-text text-secondary">
            Mon nouveau moyen de transport qui m’a couté 50 Euros, est vite devenu mon préféré. Ce vélo m’a ...

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