import './aboutUs.scss'

function aboutUs (){
    return(
    <div>
        <div class="container-fluid bg-light" >
            <div class="row">
                <div class="col-sm-8">
                    <h2>About Company Page</h2>
                    <h4>Lorem ipsum..</h4>
                    <p>Lorem ipsum..</p>
                    <br></br>
                    <button class="btn text-light" style = {{backgroundColor : "#494D5f"}}>Get in Touch</button>
                </div>
    <div class="col-sm-4">
        <span class="fa fa-rss logo" style ={{fontSize : 200, color : "#494D5f"}}></span>
    </div>
  </div>
</div>

<div class="container-fluid bg-light" >
  <div class="row">
    <div class="col-sm-4">
        <span class="fa fa-globe logo" style ={{fontSize : 200 , color : "#494D5f"}}></span>
    </div>
    <div class="col-sm-8" >
      <h2>Our Values</h2>
      <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>
      <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
    </div>
  </div>
</div>
</div>
    )
}

export default aboutUs;