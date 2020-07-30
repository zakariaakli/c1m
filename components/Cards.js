
import Card from './Card';
//import img1 from ""; 

const Cards = props => {
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <Card 
                        img="/img/IMG_0980.jpg" 
                        imgAvatar="/img/avatar.jpg"
                        title="premier voyage à vélo | ep01"
                        id='premier-voyage-a-velo-ep01'
                        resume="Mon nouveau moyen de transport qui m’a couté 50 Euros, est vite devenu mon préféré. Ce vélo m’a ..." />
                </div>
                <div className="col-md-4 col-sm-12">
                    <Card 
                        img="/img/IMG_0914.jpg" 
                        imgAvatar="/img/avatar.jpg"
                        title="premier voyage à vélo | ep02"
                        id='premier-voyage-a-velo-ep02'
                        resume="Je décide tout simplement d’offrir une semaine de congés à tous les sujets qui occupent mon cer ..."/>
                </div>
                <div className="col-md-4 col-sm-12">
                        <Card img="/img/IMG_1088.jpg" imgAvatar="/img/avatar.jpg"
                        title="premier voyage à vélo | ep03"
                        id='premier-voyage-a-velo-ep03'
                        resume="on a l’impression que le grand monde présent est là pour nous, pour nous accueillir ..."/>
                </div>

            </div>
        </div>
    )
}

export default Cards;