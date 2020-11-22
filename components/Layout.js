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
        <title>C-1M | Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content="arts, art, motivation pour artistes, jeunes talents, experiences artistiques, echecs artistes ,reussites artistes" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="preload" as="style" onload="this.rel='stylesheet'"  />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="preload" as="style" onload="this.rel='stylesheet'" ></link>
        <script async src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script async src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      </Head>

      <Header />
      <div 
        className="Content">{props.children}
        
      </div>
      <Footer/>
      
      
    </div>
    


  );
};

export default Layout;