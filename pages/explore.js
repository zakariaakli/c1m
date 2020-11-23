import Layout from "../components/Layout";
import Cards from '../components/Cards';
import CardsSecondPart from '../components/CardsSecondPart';
import Hr from '../components/separator'; 
import SocialmediaBar from '../components/socialmediaBar'; 

export default function explore() {
    return (
        <Layout>
            <div className="row">
                <SocialmediaBar />
                <h2 style={{ marginLeft: '11%', marginTop: 70, fontWeight: "bold" }}>Explore all posts</h2>
                <Hr />
                <div className="col-md-12">
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            {Cards}
                        </div>
                    </div>
                    <div></div>
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            {CardsSecondPart}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}