import './card.scss';
import Link from "next/link";
function myFunction() {
    document.getElementById("demo").style.color = "red";
}

const Card = props => {
    return (

        <div className="card text-center shadow ml-3 mb-3 mr-3 mt-3 border-right-0 bg-16" >
            <div className="overflow">
                <Link className="link" href="/arts/[id]" as={`/arts/${props.id}`}>
                    <a> <img src={props.img} alt=  {"c1m Arts" + " " + props.title} className="card-img-top "></img> </a>
                </Link>
            </div>
            <div className="card-body text-dark bg-5">
                <h4 className="card-title">
                    <Link className="link" href="/arts/[id]" as={`/arts/${props.id}`}>
                        <a>{props.title}</a>
                    </Link>
                </h4>
                <p className="card-text text-secondary">
                    <Link className="link" href="/arts/[id]" as={`/arts/${props.id}`}>
                        <a>{props.resume}</a>
                    </Link>

                </p>
                <hr></hr>
                <div className="d-flex flex-row cardAavatar">
                    <img className="rounded-circle avatar" alt="Z.AKLI" src={props.imgAvatar}
                        data-holder-rendered="true" />
                    <p className="center" style={{ color: "#465c8b" }}>BY</p> <p className="centerName"><a href="#" >Zack</a></p>

                    {/* <i class="fa fa-heart bg-16" style={{fontSize:18}} ></i> */}
                </div>
            </div>
        </div>


    )
}

export default Card;