// pages/nearme.js
import Layout from "../components/Layout";
import Hr from "../components/separator"
import Cards from "../components/Cards"

const NearMeView = props => <Layout>
        <h2 style ={{marginLeft :'11%', fontWeight : "bold", marginTop : "5%"}}>Worldwide news</h2> 
        <Hr/>
        <div className="col-md-12"><Cards/></div>
        <div className="col-md-12"><Cards/></div>
        <div className="col-md-12"><Cards/></div>
        
</Layout>;

export default NearMeView;