// components/Header.js
import Link from "next/link";

import "./Header.scss";
import NavBar from './NavBar'

// const Header = props => (
//   <Link href="/">
//     <div classNameNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div classNameNameName="navbar-nav">
//       <a classNameNameName="nav-item nav-link active" href="#">Home <span classNameNameName="sr-only">(current)</span></a>
//       <a classNameNameName="nav-item nav-link" href="#">Features</a>
//       <a classNameNameName="nav-item nav-link" href="#">Pricing</a>
//       <a classNameNameName="nav-item nav-link disabled" href="#">Disabled</a>
//     </div>
//   </div>
    
//   </Link>
  
// );
function Header (){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><img src = '/img/logo.png' style ={{height : 50, width  : 60}}></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    
    
  </button>
  <div className="collapse navbar-collapse" id="navbarNav"  >
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/explore">Blog</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link active" href="/nearme">Nearme</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="/mycart">My card</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="/profile">Profile</a>
      </li>
    </ul>
  </div>
</nav>
  )
}
export default Header;