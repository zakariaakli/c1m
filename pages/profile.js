// pages/profile.js
import Hr from '../components/separator';
import SocialmediaBar from '../components/socialmediaBar';
import Layout from "../components/Layout";
import ArticleCards from "../components/ArticleCard"
import Table from '../components/table'
import { format, addMonths} from 'date-fns'

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
                    update = {"Updated at " + format(addMonths(new Date(), 0), 'hh' + ' aa')}>

        </ArticleCards>
        </div>
        <div className="col">
        <ArticleCards img = "/img/fm4.jpg"
                    
                    title= "Echec"
                    id= 'histoire-french-montana'
                    resume= 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    update = {"Updated at " + format(addMonths(new Date(), 0), 'hh' + ' aa')} >
                    

        </ArticleCards>
        </div>
      </div>
      <div className = "row">
        <div className = "col" >
        <ArticleCards img = "/img/fm2.jpg"
                    
                    title= "Affrontements"
                    id= 'histoire-french-montana'
                    resume= 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    update = {"Updated at " + format(addMonths(new Date(), 0), 'hh' + ' aa')}>

        </ArticleCards>
        </div>
        <div className="col">
        <ArticleCards img = "/img/fm3.jpg"
                    
                    title= "Résultats"
                    id= 'histoire-french-montana'
                    resume= 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    update = {"Updated at " + format(addMonths(new Date(), 0), 'hh' + ' aa')}>

        </ArticleCards>
        </div>
      </div>
    </div>
    
    
  </div>
    
  </div>
</Layout>;


// const ProfileView = props =>
//   <Layout>
//     <div className="container">
//       <div className="row">
//         <SocialmediaBar />
//         <h2 style={{ marginLeft: '11%', marginTop: 70, fontWeight: "bold" }}>About Us</h2>
//         <Hr />
//         <div>
//           <p>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//           </p>
//         </div>
//       </div>
//     </div>
//   </Layout>;


export default ProfileView;