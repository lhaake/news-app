import React from "react"
import './Article.css';

const Article = (props) => {

    console.log("testing props from Article", props.newsData.articles)

    const data = props.newsData.articles


    const trusteddomains = [
        "techcrunch.com", "wired.com", "news.vice.com", "usatoday.com/news", "time.com", "washingtonpost.com", "wsj.com", "npr.org", "politico.com", "theatlantic.com", "nytimes.com", "latimes.com", "bostonglobe.com", "nymag.com", "newsweek.com", "nbcnews.com", "news.nationalgeographic.com", "msnbc.com", "fortune.com", "espn.go.com", "us.cnn.com", "cbsnews.com", "buzzfeed.com", "pbs.org/newshour", "bloomberg.com", "bbc.co.uk/news", "axios.com", "apnews.com", "aljazeera.com", "abcnews.go.com", "reuters.com", "cnbc.com", "thehill.com", "forbes.com", "vox.com", "mercurynews.com", "nbcboston.com", "wbur.org"
    ]

    const domainCheck = (article) => {
        for(let i = 0; i < trusteddomains.length; i += 1) {
            if(article.url.includes(trusteddomains[i])) {
                return true
            }      
        }
        return false
    }
  
    
    let displayNews = data.map((article, index) => {
        
        return (
            <>
            {  domainCheck(article) ? 
         
            <div className="article">
                
                { article.image ?
                    <img src={article.image} /> : "" }
            
                <h3 className="title">{article.title}</h3>
                <ul>
                    <li className="news-source">{article.source.name}</li>
                    <li className="description">{article.description}  <a href={article.url} target=
                        "_blank">Read Full Article</a></li>
        
                </ul>
                <button onClick={() => props.handleFavoritesClick(article)}>Add to Favorites</button>
              
            </div>
             : null } 
            </>
        )
    })
    return (
        <>
            {displayNews}
        </>
    )
    
}

export default Article
