import './aboutUs.scss'

function aboutUs (){
    return(
    <div>
        <div class="container-fluid bg-light" >
            <div class="row">
                <div class="col-sm-8">
                    <h2 class = "stylefont">Jeune <br></br> artiste ?  </h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4>Rejoins GreenRoom et profite de notre offre d’accompagnement « Yartist ». Joue ta musique dans l’un de nos studios partenaires. Obtiens ton label « Yartist ». Bars, restaurants et entreprises membres de notre plateforme t’inviterons ensuite pour rajouter une touche artistique à leurs évènements.   </h4>
                    <br></br>
                    <p>N’hésite plus pour devenir l’artiste que tu souhaites.</p>
                    <br></br>
                    <button class="btn text-light" style = {{backgroundColor : "#494D5f"}}>Get in Touch</button>
                </div>
    <div class="col-sm-4">
        {/* <span class="fa fa-rss logo" style ={{fontSize : 200, color : "#494D5f"}}></span> */}
        <img src = "img/test3.png" style ={{width : 600, shadowColor: 'black', shadowOpacity: 1.0}}></img>
    </div>
  </div>
</div>

<div class="container-fluid bg-light" >
  <div class="row">
    <div class="col-sm-4">
      <img src = "img/restau.png" style ={{width :600 , shadowColor: 'black', shadowOpacity: 1.0}}></img>
    </div>
    <div class="col-sm-8" >
      <h2 class = "stylefont">Manager de <br></br> restaurant ? </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4>GreenRoom rajoute une touche d’animation à ton établissement. Les repas ne sont-ils pas plus conviviaux en présence d’ambiance originale ?  </h4>
      <br></br>
      <p>GreenRoom te propose un choix complet et très varié de jeunes artistes aux grands talents, formés et labélisés « Yartist » par nos studios partenaires.</p>
      <br></br>
    </div>
  </div>
</div>
</div>
    )
}

export default aboutUs;