import './Cards.css'

function Cards({cardTitle, cardSmallDescription, cardDescription, image}){

    const imageBackground = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
    }
    return(
        <div className="card_container" style={imageBackground}>
            <div className="card_content">
                <h3>{cardTitle}</h3>
                <h5>{cardSmallDescription}</h5>
                <p>{cardDescription}</p>
            </div>
        </div>
    )
}


export default Cards; 