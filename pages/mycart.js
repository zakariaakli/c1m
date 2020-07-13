// pages/mycart.js

import Layout from "../components/Layout";
import Cards from "../components/Cards"; 
import Carousel from "../components/carousel"; 

const MyCartView = props => <Layout>
    <div className="row">
        <div className="col-md-12"><Carousel/></div>
        <div className="col-md-12"><Cards/></div>
        <div className="col-md-12"><Cards/></div>
    </div>
</Layout>;

export default MyCartView;