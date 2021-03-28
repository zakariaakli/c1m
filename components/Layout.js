// components/Layout.js

import Head from "next/head";

import Header from "./Header";
import Footer from "./footer"
//import NavBar from "./NavBar";

import "./Layout.scss";
import "./index.scss";
import navButtons from "../config/buttons";

import SocialmediaBar from '../components/socialmediaBar'

const Layout = props => {
  //const appTitle = `C-1m | Blog`;


  return (
    <div className="Layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv='content-language' content='fr-fr' />
        <meta name="keywords" content="arts, art, motivation pour artistes, jeunes talents, experiences artistiques, echecs artistes ,reussites artistes" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Permanent+Marker&family=Staatliches&display=swap');
</style>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="preload" as="style" onload="this.rel='stylesheet'" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="preload" as="style" onload="this.rel='stylesheet'" ></link>
        <link href="css/addons-pro/cards-extended.min.css" rel="stylesheet"></link>
        <script async src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script async src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="https://cdn.rawgit.com/download/glyphicons/0.1.0/glyphicons.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <link href="css/bootstrap.min.css" rel="stylesheet"></link>
      </Head>
      <div>
      <Header />
      </div>
      
      
      <div
        className="Content">{props.children}

      </div>
      <div>
      <Footer />
      </div>

    </div>



  );
};

export default Layout;