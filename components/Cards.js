
import Card from './Card';
//import img1 from ""; 

const Cards = props => {
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <Card img="/img/IMG_0950.jpg" imgAvatar="/img/avatar.jpg"/>
                </div>
                <div className="col-md-4 col-sm-12">
                    <Card img="/img/IMG_0914.jpg" imgAvatar="/img/avatar.jpg"/>
                </div>
                <div className="col-md-4 col-sm-12">
                    <Card img="/img/IMG_1088.jpg" imgAvatar="/img/avatar.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Cards;