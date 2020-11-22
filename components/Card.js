import './card.scss';
import Link from "next/link";

const Card = props => {
    return(
        <div className="card text-center shadow ml-3 mb-3 mr-3 mt-3 rounded" >
        <div className="overflow">
          <img src = {props.img} alt={props.title} className="card-img-top "></img> 
        </div>
        <div className="card-body text-dark bg-5">
            <h4 className="card-title">
                <Link href="/posts/[id]" as={`/posts/${props.id}`}>
                <a>{props.title}</a>
                </Link>
            </h4>
            <p className="card-text text-secondary">
            {props.resume}
            </p>
            <div className="d-flex flex-row cardAavatar">
                    <img className="rounded-circle avatar" alt="Z.AKLI" src={props.imgAvatar}
                    data-holder-rendered="true"/>
                    <p className="center" style ={{color : "#d95179"}}>BY</p> <p className="centerName"><a href="#" >Z.AKLI</a></p>
            </div>
            
        </div>
    </div>
    
    )
}

export default Card;