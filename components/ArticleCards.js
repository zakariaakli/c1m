import ArticleCard from './ArticleCard'; 

var data = content.content.slice(0, 3); 

const ArticleCards = data.map((data) => {

    return(
       
        <div className="col-md-4 col-sm-12">
            <ArticleCard
                img = {data.img}
                
                title= {data.title}
                id= {data.id}
                resume= {data.resume}
                update ={data.update} />
        </div>
    
    )
})

export default ArticleCards;