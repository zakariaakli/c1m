import "./footer.scss"
function Footer (){
    return(
        <footer className="footer container-fluid text-center bg-6">
            <p className = "followus">Follow us on :</p>
            <a href = "https://www.facebook.com"><button type="button" className="btn btn-social-icon btn-outline-facebook"><i className="fa fa-facebook"></i></button></a>
            <a href = "https://www.instagram.com"><button type="button" className="btn btn-social-icon btn-outline-instagram"><i className="fa fa-instagram"></i></button></a>
            <a href = "https://www.linkedin.com"><button type="button" className="btn btn-social-icon btn-outline-linkedin"><i className="fa fa-linkedin"></i></button></a>
            <a href = "https://www.twitter.com"><button type="button" className="btn btn-social-icon btn-outline-twitter"><i className="fa fa-twitter"></i></button></a>
            <a href = "https://www.youtube.com"><button type="button" className="btn btn-social-icon btn-outline-youtube"><i className="fa fa-youtube"></i></button></a>
            <p className = "copyright">© 2020 Copyright: C-1m Team</p>
            
        </footer>
    )
}

export default Footer;