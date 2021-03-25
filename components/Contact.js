
function Contact(){
    return(
        <div class="container-fluid" style = {{backgroundColor : '#494D5f'}}>
        <h2 class="text-center" style = {{color : 'white'}}>CONTACT</h2>
        <div class="row">
          <div class="col-sm-5">
            <p style = {{color : 'white'}} >Contact us and we'll get back to you within 24 hours.</p>
            <p style = {{color : 'white'}}><span class="fa fa-map-marker" style = {{color : 'white'}}></span> Chicago, US</p>
            <p style = {{color : 'white'}}><span class="fa fa-phone" style = {{color : 'white'}}></span> +00 1515151515</p>
            <p style = {{color : 'white'}}><span class="fa fa-envelope"style = {{color : 'white'}}></span> myemail@something.com</p>
          </div>
          <div class="col-sm-7">
            <div class="row">
              <div class="col-sm-6 form-group">
                <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
              </div>
              <div class="col-sm-6 form-group">
                <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
              </div>
            </div>
            <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br></br>
            <div class="row">
              <div class="col-sm-12 form-group">
                <button class="btn btn-default pull-right bg-light" type="submit">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div> 
      
    )
}

export default Contact;