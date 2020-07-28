// pages/profile.js

import Layout from "../components/Layout";
import Table from '../components/table'
import LargeCards from '../components/largeCards'
import Footer from '../components/footer'
const ProfileView = props => <Layout><div class="container">
<h2 style = {{marginLeft :'2%'}}>Travel</h2> 
<hr style = {{marginLeft :'2%'}}></hr>
<div class="row">
   
  <div class="col order-last">
    <div ><Table/></div>
  </div>
  <div class="col">
    <div><LargeCards/></div>
  </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>


<h2 style = {{marginLeft :'2%'}}>Sport</h2> 
<hr style = {{marginLeft :'2%'}}></hr>
<div class="row">
   
  <div class="col order-last">
    <div ><Table/></div>
  </div>
  <div class="col">
    <div><LargeCards/></div>
  </div>
</div>

</div>

</Layout>;

export default ProfileView;