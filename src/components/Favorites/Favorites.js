import React from "react"
import './Favorites.css';

const Favorites = (props) => {

    console.log("testing props in favorites", props.favorites)

    const faves = props.favorites

    let showFavorites = faves.map( (fave, index) => { 
    return (
        <div className="fav-article">
                {fave.urlToImage ?
                    <img src={fave.urlToImage} /> : ""}
    
                <h3 className="fav-title">{fave.title}</h3>
                <ul>
                    <li className="fav-news-source">{fave.source}</li>
                    <li className="fav-description">{fave.description}  <a href={fave.url} target=
                        "_blank">Read Full Article</a></li>

                </ul>
            <button onClick={() => props.removeFromFaves(index)}>Remove from Favorites</button>

        </div>
    )
    })
    return (
    <div>
        <h1>My Favorites</h1>
         <div className="favorites">
            
            {showFavorites}
        </div>
     </div>
    )
  
}
export default Favorites