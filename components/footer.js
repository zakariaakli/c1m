import "./footer.scss"
function Footer (){
    return(
        <footer class="container-fluid text-center bg-6">
            <p class = "followus">Follow us on :</p>
            <button type="button" class="btn btn-social-icon btn-outline-facebook"><i class="fa fa-facebook"></i></button>
            <button type="button" class="btn btn-social-icon btn-outline-instagram"><i class="fa fa-instagram"></i></button>
            <button type="button" class="btn btn-social-icon btn-outline-linkedin"><i class="fa fa-linkedin"></i></button>
            <button type="button" class="btn btn-social-icon btn-outline-twitter"><i class="fa fa-twitter"></i></button>
            <p class = "copyright">© 2020 Copyright: C-1m Team</p>
            
        </footer>
    )
}

export default Footer;