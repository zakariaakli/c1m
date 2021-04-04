// pages/index.js
import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";
import AboutUs from "../components/aboutUs"
import Card from "../components/Card";
import Carousel from "../components/carousel";
import Hr from '../components/separator';
import SocialmediaBar from '../components/socialmediaBar';
import Cards from '../components/Cards';
import CardsSecondPart from '../components/CardsSecondPart';
import Boutton from '../components/bouton';
import Services from '../components/Services';
import Contact from '../components/Contact'
import Header from "../components/Header";

export default function Index() {
    return (

        <Layout>

            <Head>
                <title>arts.c-1m | Le Blog des jeunes artistes</title>
                <meta name="description" content="blog pour jeunes artistes, experiences artistiques, reussites et echecs des jeunes artistes, incubateur de talents" />
            </Head>
            <div className="row text-center">
                <div className="col-md-12"><div>
                <Carousel></Carousel>
                    </div><AboutUs></AboutUs>
            </div>




                <div className="col-md-12" >
                <h1 class = 'text-center text-dark' style = {{fontFamily : "'Permanent Marker', cursive", fontSize : 70}}>Tendances <br></br> Artistiques </h1>
                    <div className="container-fluid d-flex justify-content-center">

                        <div className="row">

                            {Cards}
                        </div>
                    </div>



                </div>

                {/* <div className="col-md-12 bg-light">
                <h1 class = 'text-center text-dark' style = {{fontFamily : "'Permanent Marker', cursive", fontSize : 70}}>Nos <br></br> Articles</h1>
                <div className="container-fluid d-flex justify-content-center" >
                        <div className="row">
                            {CardsSecondPart}
                        </div>
                    </div>
                    </div> */}
                {/* <Contact></Contact> */}
                {/* <SocialmediaBar />
                <h2 style={{ marginLeft: '11%', fontWeight: "bold", marginTop: "5%" , color : "#465c8b" }}>Nouvelles des célébrités  | <a href="/explore" style={{  fontSize: 12, color: "#ebc106", textShadow:"grey 1px 1px 1px" }}> SEE MORE ...</a></h2>

                <Hr />
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
                                    resume="Je décide tout simplement d’offrir une semaine de congés à tous les sujets qui occupent mon cer ..." />
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <Card img="/img/IMG_1088.jpg" imgAvatar="/img/avatar.jpg"
                                    title="premier voyage à vélo | ep03"
                                    id='premier-voyage-a-velo-ep03'
                                    resume="on a l’impression que le grand monde présent est là pour nous, pour nous accueillir ..." />
                            </div>

                        </div>
                    </div>

                </div> */}


                {/* <h2 style={{ marginLeft: '11%', fontWeight: "bold", marginTop: "5%" , color : "#465c8b" }}>BEST VIEWED</h2> */}
            </div>

        </Layout>
    )

}

