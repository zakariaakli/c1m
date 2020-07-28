// components/Layout.js

import Head from "next/head";

import Header from "./Header";
import Footer from "./footer"
//import NavBar from "./NavBar";

import "./Layout.scss";
import "./index.scss";
import navButtons from "../config/buttons";

const Layout = props => {
  //const appTitle = `C-1m | Blog`;


  return (
    <div className="Layout">
      <Head>
        <title>C-1M | Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
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