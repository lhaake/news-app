import React from "react"
import './Article.css';

const Article = (props) => {

    console.log("testing props from Article", props.newsData.articles)

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
        </>
    )
}

export default Article
