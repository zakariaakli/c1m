// pages/profile.js

import Layout from "../components/Layout";
import ArticleCards from "../components/ArticleCard"
import Table from '../components/table'

const ProfileView = props => <Layout><div class="container"> 
  <div class="row">
    <h2>About Us</h2> 
    <div className = "container">
      <div className = "row">
        <div className = "col">
        <ArticleCards img = "/img/French_Montana.png"
                    
                    title= "Histoire"
                    id= 'histoire-french-montana'
                    resume= 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    update = "Updated at 3pm">

        </ArticleCards>
        </div>
        <div className="col">
        <ArticleCards img = "/img/fm4.jpg"
                    
                    title= "Echec"
                    id= 'histoire-french-montana'
                    resume= 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    update = "Updated at 3pm" >
                    

        </ArticleCards>
        </div>
      </div>
      <div className = "row">
        <div className = "col" >
        <ArticleCards img = "/img/fm2.jpg"
                    
                    title= "Affrontements"
                    id= 'histoire-french-montana'
                    resume= 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    update = "Updated at 3pm">

        </ArticleCards>
        </div>
        <div className="col">
        <ArticleCards img = "/img/fm3.jpg"
                    
                    title= "Résultats"
                    id= 'histoire-french-montana'
                    resume= 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    update = "Updated at 3pm">

        </ArticleCards>
        </div>
      </div>
    </div>
    
    
  </div>
    
  </div>
</Layout>;

export default ProfileView;