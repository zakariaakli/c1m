// pages/nearme.js

import Table from '../components/table'
import Layout from "../components/Layout";
import Carousel from "../components/carousel";

const NearMeView = props => <Layout>
        <div className = "container">
            <div className = "row">

                <div className="row justify-content-around custom-line .col-md-4 .offset-md-4" ><Table/></div>
                

            </div>
        </div>
</Layout>;

export default NearMeView;