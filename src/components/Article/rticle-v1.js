import React from "react"
import './Article.css';
// import Favorites from "../Favorites/Favorites"

const Article = (props) => {

    // const [favorites, setFavorites] = useState([])
  
    console.log("testing props from Article", props.newsData.articles)

    // const handleFavoritesClick = favarticle => {
    //     console.log("Add favorites button clicked!")
    //     setFavorites([...favorites, {
    //         title: favarticle.title,
    //         source: favarticle.source.name,
    //         description: favarticle.description,
    //         url: favarticle.url,
    //         urlToImage: favarticle.urlToImage
    //     }])
    // }

    // const removeFromFaves = index => {
    //     console.log("Remove from favorites button clicked!")
    //     const favesArray = favorites.filter((article, i) => i !== index)
    //     setFavorites(favesArray)
    // }

    const data = props.newsData.articles

    let displayNews = data.map((article, index) => {
        return (
            <div className="article">
                { article.urlToImage ?
                    <img src={article.urlToImage} /> : ""}
            
                <h3 className="title">{article.title}</h3>
                <ul>
                    <li className="news-source">{article.source.name}</li>
                    <li className="description">{article.description}  <a href={article.url} target=
                        "_blank">Read Full Article</a></li>
        
                </ul>
                <button onClick={() => props.handleFavoritesClick(article)}>Add to Favorites</button>

            </div>
        )
    })
    return (
        <>
            {displayNews}
            {/* <Favorites favorites={favorites} handleClick={removeFromFaves} /> */}
        </>
    )
}

export default Article