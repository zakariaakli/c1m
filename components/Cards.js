import './card.scss';
import Link from "next/link";
import content from '../content/content.json'; 
import Card from './Card'; 

var data = content.content.slice(0, 3); 

const Cards = data.map((data) => {

    return(
       
        <div className="col-md-4 col-sm-12">
            <Card 
                img= {data.img}
                imgAvatar= {data.imgAvatar}
                title= {data.title}
                id= {data.id}
                resume= {data.resume} 
                author = {data.author}
                />
        </div>
    
    )
})

export default Cards;