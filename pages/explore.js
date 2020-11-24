import Layout from "../components/Layout";
import Cards from '../components/Cards';
import CardsSecondPart from '../components/CardsSecondPart';
import Hr from '../components/separator'; 
import SocialmediaBar from '../components/socialmediaBar'; 
import Head from 'next/head'; 

export default function explore() {
    return (
        <Layout>
            <Head>
        <title>Découvrir les experiences de vos artistes préférés </title>
        <meta name="description" content="découvrir les talents des artistes célèbres, des jeunes talents, et des nouveaux artistes"></meta>
      </Head>
            <div className="row">
                <SocialmediaBar />
                <h2 style={{ marginLeft: '11%', marginTop: 70, fontWeight: "bold" }}>Découvrir les experiences de vos artistes préférés</h2>
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