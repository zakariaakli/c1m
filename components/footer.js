import "./footer.scss"
function Footer (){
    return(
        <footer class="container-fluid text-center bg-6">
            <p class = "followus">Follow us on :</p>
            <a href = "https://www.facebook.com"><button type="button" class="btn btn-social-icon btn-outline-facebook"><i class="fa fa-facebook"></i></button></a>
            <a href = "https://www.instagram.com"><button type="button" class="btn btn-social-icon btn-outline-instagram"><i class="fa fa-instagram"></i></button></a>
            <a href = "https://www.linkedin.com"><button type="button" class="btn btn-social-icon btn-outline-linkedin"><i class="fa fa-linkedin"></i></button></a>
            <a href = "https://www.twitter.com"><button type="button" class="btn btn-social-icon btn-outline-twitter"><i class="fa fa-twitter"></i></button></a>
            <p class = "copyright">© 2020 Copyright: C-1m Team</p>
            
        </footer>
    )
}

export default Footer;