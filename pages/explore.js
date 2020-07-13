// pages/explore.js

import Layout from "../components/Layout";
import { useAmp } from 'next/amp'; 
import Card from "../components/Card"; 

export const config = { amp: 'hybrid' }

const ExploreView = props => <Layout>
      
      <div>
          
      <h1 style = {{textAlign : 'center'}}>How to avoid contamination ?</h1>
      
      <div><p style = {{marginLeft : 50}}><strong>1 -</strong> Keep a distance of at least 1.5 meters from other workers. The ideal distance, especially in places where air conditioning <br></br> can help spread aerosolised particles, is between 3 to 4 meters. If you find it necessary, contact the person in charge the <br></br> day before to remind them that the area should be clear or unoccupied.</p>
          <p style = {{marginLeft : 50}}><strong>2 -</strong> To avoid contamination and being infected, wear nitrile gloves while performing repairs. Never wear gloves larger than <br></br>your own size, as the looseness in the wrist area will compromise your safety. </p>
          <p style = {{marginLeft : 50}}><strong>3 -</strong> When you leave, always disinfect your hands before you drive again. Repeat these precautions throughout all day’s work. </p>
          <p style = {{marginLeft : 50}}><strong>4 -</strong> dismiss all greetings and handshakes </p>
          <p style = {{marginLeft : 50}}><strong>5 -</strong> Avoid touching your eyes, nose and mouth. </p>
          <p style = {{marginLeft : 50}}><strong>7 -</strong> Avoid touching your eyes, nose and mouth. </p>
          <p style = {{marginLeft : 50}}><strong>8 -</strong> If you use public transportation to work, avoid touching the support handles. Whenever possible, try to maintain a safe<br></br> distance of 1.5 meters from other passengers. </p>
          <p style = {{marginLeft : 50, marginTop : 40}}><strong>Together against the Coronavirus. </strong> </p>
          </div>
      
      <div>
          < img  style={
        {
         width : 200,
         height : 200,
         
         
        }
      } src = "/img/wash.png" alt="spinevision logo"></img> 
      
      
          < img  style={
        {
         width : 150,
         height : 200,
         marginLeft : 200

         
        }
      } src = "/img/mask.png" alt="spinevision logo"></img> 
      </div>
 
  <Card/>
</div>
      
      
  
</Layout>

export default ExploreView;