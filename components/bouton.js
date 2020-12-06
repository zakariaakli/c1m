

function boutton(props){
    return(
        <div class = "container">
            <button type="button" class="btn btn-outline-warning btn-lg btn-block">
            <a href={props.link}> Cliquez ici pour voir l'article </a>
            </button>
        </div>
    )
}

export default boutton;