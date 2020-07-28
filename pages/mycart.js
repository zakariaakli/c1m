// pages/mycart.js

import Layout from "../components/Layout";
import Cards from "../components/Cards"; 
import Carousel from "../components/carousel";
import Hr from '../components/separator'
const MyCartView = props => <Layout>
    <div className="row">
        
        <div className="col-md-12"><Carousel/></div>
        <h2 style = {{marginLeft :'11%' , marginTop : 20, fontWeight : "bold"}}>Our blog</h2>
        <Hr/>
        <div className="col-md-12"><Cards/>
        <a href ="/explore" style = {{marginLeft :'15%', fontSize : 15, color : "#d95179", fontWeight : "bold"}}> SEE MORE ...</a>
        </div>
        <h2 style ={{marginLeft :'11%', fontWeight : "bold", marginTop : "5%"}}>Worldwide news</h2> 
        <Hr/>
        <div className="col-md-12"><Cards/></div>
        <a href ="/explore" style = {{marginLeft :'15%', fontSize : 15, color : "#d95179", fontWeight : "bold"}}> SEE MORE ...</a>

    </div>
</Layout> 


export default MyCartView;