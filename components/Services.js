"./aboutUs.scss"
function Services(){
    return(
    <div class="container-fluid text-center bg-light">
            <h2 style = {{fontFamily : "'Permanent Marker', cursive", fontSize : 70}}>SERVICES</h2>
            <br></br>
            <br></br>
            <h4>What we offer</h4>
        <br></br>
        <div class="row">
            <div class="col-sm-4">
                <span class="fa fa-power-off" style = {{color : "#494D5f", fontSize : 50}}></span>
                <br></br>
                <h4>POWER</h4>
                <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div class="col-sm-4">
                <span class="fa fa-heart" style = {{color : "#494D5f", fontSize : 50}}></span>
                <br></br>
                <h4>LOVE</h4>
                <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div class="col-sm-4">
                <span class="fa fa-info" style = {{color : "#494D5f", fontSize : 50}}></span>
                <br></br>
                <h4>JOB DONE</h4>
                <p>Lorem ipsum dolor sit amet..</p>
            </div>
        </div>
  
    </div>
    
    )
}
export default Services;
