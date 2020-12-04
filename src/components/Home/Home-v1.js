import React, { useState, useEffect } from "react"
import Form from "../Form/Form"
import Article from "../Article/Article"
import './Home.css';

const Home = (props) => {
    //state to keep track of news data from API
    const [newsData, setNewsData] = useState([])

    // const [favorites, setFavorites] = useState([])

    //   const handleFavoritesClick = favarticle => {
    //     console.log("Add favorites button clicked!")
    //     setFavorites([...favorites, {
    //         title: favarticle.title,
    //         source: favarticle.source.name,
    //         description: favarticle.description,
    //         url: favarticle.url,
    //         urlToImage: favarticle.urlToImage
    //     }])
    //      console.log(`Adding ${favarticle.title} to favorites`); 
    //       console.log("favorites list",favorites); 

        // const newFaves = [...favorites] 
        // const articleIndex = newFaves.indexOf(favarticle);

        // if (articleIndex > -1) {    //if the article is in the array
        //     console.log(`Removing ${favarticle.title} from faves`);
        //     newFaves.splice(articleIndex, 1);  // remove 1 element from the position of article Index
        // } else  {
        //     console.log(`Adding ${favarticle.title} from faves`); 
        //     newFaves.push(favarticle);  
        // }
        // setFavorites(newFaves);
        // console.log("this is the favorites", favorites)
        // }

    // const removeFromFaves = index => {
    //     console.log("Remove from favorites button clicked!")
    //     const favesArray = favorites.filter((article, i) => i !== index)
    //     setFavorites(favesArray)
    //     console.log("this is removing favorites", favorites)
    // }

    //JS Date 
    const dateString = new Date().toDateString();
    const date = new Date().toISOString().slice(0, 10);

    const trusteddomains = [
        "techcrunch.com", "wired.com", "news.vice.com", "usatoday.com/news", "time.com", "washingtonpost.com", "wsj.com", "npr.org", "politico.com", "theatlantic.com", "nytimes.com", "latimes.com", "bostonglobe.com", "nymag.com", "newsweek.com", "nbcnews.com", "news.nationalgeographic.com", "msnbc.com", "fortune.com", "espn.go.com", "us.cnn.com", "cbsnews.com", "buzzfeed.com", "pbs.org/newshour", "bloomberg.com", "bbc.co.uk/news", "axios.com", "apnews.com", "aljazeera.com", "abcnews.go.com"
    ]


    // Make API Call
    const getNews = async (input) => {

        let newsUrl = `http://newsapi.org/v2/everything?q=${input}&from=${date}&sortBy=relevancy&language=en&domains=${trusteddomains}&pageSize=10&apiKey=7967fe7ec6e44428a417b6bc133b26f4`

        const response = await fetch(newsUrl)
        const json = await response.json()
        setNewsData(json)
        console.log(json)
    }
    
    useEffect(() => {
        getNews("covid-19")

    }, []);

    return (
        <div className="home">

            <h1>Today's Top Headlines</h1>
            <Form getNews={getNews} />
            
            {/* Conditional rendering   */}
            { newsData.articles ? <Article newsData={newsData} handleFavoritesClick={props.handleFavoritesClick} /> : null}

    
          {/* <Favorites
          removeFromFaves={removeFromFaves}
            favorites={favorites} 
          />  */}
     
        </div>
    )
}

export default Home