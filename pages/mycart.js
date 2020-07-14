// pages/mycart.js

import Layout from "../components/Layout";
import Cards from "../components/Cards"; 
import Carousel from "../components/carousel";

import Table from "../components/table"

const MyCartView = props => <Layout>
    <div className="row">
        <div className="col-md-12"><Carousel/></div>
        <div className="col-md-12"><Cards/></div>
        <div className="col-md-12"><Cards/></div>
        <hr></hr><br></br>
        <div className="col-md-12"><Cards/></div>
        <br/>
    </div>
</Layout>;

export default MyCartView;