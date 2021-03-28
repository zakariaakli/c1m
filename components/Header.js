// components/Header.js
import Link from "next/link";

import "./Header.scss";
import NavBar from './NavBar'

function Header() {
  return (
    
    <nav class="navbar fixed-top navbar-expand-lg ">
  <a class="navbar-brand" href="#" style = {{fontFamily:"'Permanent Marker', cursive", fontSize : 20}}>C-1m</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    </div></nav>
    
    
  )
}
export default Header;