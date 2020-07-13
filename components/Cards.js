
import Card from './Card';
//import img1 from ""; 
var img1 = "/img/wash.png";
const Cards = props => {
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card img={{img1}}/>
                </div>
                <div className="col-md-4">
                    <Card img={{img1}}/>
                </div>
                <div className="col-md-4">
                    <Card img={{img1}}/>
                </div>

            </div>
        </div>
    )
}

export default Cards;