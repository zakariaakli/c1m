// pages/mycart.js

import Layout from "../components/Layout";
import Card from "../components/Card"; 
import Carousel from "../components/carousel";
import Hr from '../components/separator'
import SocialmediaBar from '../components/socialmediaBar'
const MyCartView = props => <Layout>
    <div className="row">
    
        <div className="col-md-12"><Carousel/></div>
        <SocialmediaBar/>
        <h2 style = {{marginLeft :'11%' , marginTop : 70, fontWeight : "bold"}}>Our blog</h2>
        <Hr/>
        <div className="col-md-12">
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
            <a href ="/explore" style = {{marginLeft :'15%', fontSize : 15, color : "#d95179", fontWeight : "bold"}}> SEE MORE ...</a>
        </div>
        <SocialmediaBar/>
        <h2 style ={{marginLeft :'11%', fontWeight : "bold", marginTop : "5%"}}>Worldwide news</h2> 
        <Hr/>
        <div className="col-md-12">
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <Card 
                        img="/img/IMG_0980.jpg" 
                        imgAvatar="/img/avatar.jpg"
                        title="premier voyage à vélo | ep04"
                        id='premier-voyage-a-velo-ep04'
                        resume="Possessive mais genreuse au même temps, elle est prête à tout donner pour gagner un peu de vot ..." />
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
        
        </div>
            <a href ="/explore" style = {{marginLeft :'15%', fontSize : 15, color : "#d95179", fontWeight : "bold"}}> SEE MORE ...</a>
            <SocialmediaBar/>
        </div>
       
</Layout> 


export default MyCartView;