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
        <ArticleCards img = "/img/testdaft.png"
                    
                    title= "La rencontre"
                    id= 'histoire-french-montana'
                    resume= 'Thomas et Guy-Manuel se sont rencontrés au lycée Carnot à Paris et devenus rapidement de très proches amis. Ayant les mêmes gouts pour la musique et le cinéma, ils forment à 17 ans leur premier groupe dont le nom était un hommage à une chanson du groupe de pop-rock « The Beach Boys » Darlin’. Selon nos recherches, le premier but de cette première collaboration était de gagner une popularité auprès des demoiselles. « On avait 17 ans et on voulait avoir un groupe de rock comme tout le monde, c’est comme ça que Darlin’ est arrivé » déclare Thomas dans une radio aux USA. Ce même groupe leur vaudra quelques années plus tard le nom Daft Punk que nous connaissons tous.'
                    >

        </ArticleCards>
        </div>
        <div className="col">
        <ArticleCards img = "/img/daftpunk2.png"
                    
                    title= "Changement de Cap"
                    id= 'histoire-french-montana'
                    resume= 'Alors que tout semblait bien partir pour le jeune groupe, l’un des premiers morceaux a provoqué un virage important de leur carrière. « Les deux morceaux de Darlin’ sont un punk débile nommé Cindy So Loud, ceci est le titre et les seules paroles » critique avancée par Dave JENNINS journaliste au magazine Melody Maker. Daniel DAUXERRE manager de Dalrin’ déclare que cette critique a provoqué un temps d’arrêt pour le groupe. Cette critique a même changé l’optimisme des jeunes envers leur musique. Daniel déclare dans une interview « J’ai dû attendre 6 à 7 mois pour avoir deux morceaux, pas par fénéantise mais parce qu’ils ne voulaient pas aller là, une manière polie de dire on est en train de penser à autre chose »'
                    >
                    

        </ArticleCards>
        </div>
      </div>
      <div className = "row">
        <div className = "col" >
        <ArticleCards img = "/img/daftpunk4.png"
                    
                    title= "Casques pour se cacher ?"
                    id= 'histoire-french-montana'
                    resume= 'Oui mais pas que ... « Nous nous intéressons à la frontière entre la fiction et la réalité, en créant ces personnages fictifs qui existent dans la vraie vie » déclare Thomas dans une interview. En s’intéressant à leurs uniformes, on s’aperçoit que les casques ne sont finalement qu’un complément pour la forme du robot. En effet Thomas et Guy-Manuel sont avant tous fascinés par la technologie et en particulier les robots, ils essayent à travers leur musique et aussi leur long métrage de mettre en avant la place de la technologie dans la vie de nos sociétés. Thomas cite « La technologie possède un caractère à la fois séduisant et effrayant. Le robot est pareil : il peut être cool comme terrifiant. On est stimulés par ce paradoxe. »'
                    >

        </ArticleCards>
        </div>
        <div className="col">
        <ArticleCards img = "/img/daftpunk3.png"
                    
                    title= "Résultats"
                    id= 'histoire-french-montana'
                    resume= 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    >

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