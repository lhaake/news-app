import React, { useState, useEffect } from "react"
import Form from "../Form/Form"
import Article from "../Article/Article"
import './Home.css';

const Home = (props) => {
    //state to keep track of news data from API
    const [newsData, setNewsData] = useState([])

    // JS Date 
    const dateString = new Date().toDateString();
    const date = new Date().toISOString().slice(0, 10);
    
   
    // Make API Call
    const getNews = async (input) => {

        let newsUrl = `https://gnews.io/api/v4/search?q=${input}&sortby=relevance&lang=en&country=us&token=f7817f300562e02b6594a4319ca4d9fd`

        const response = await fetch(newsUrl)
        const json = await response.json()
        setNewsData(json)
        console.log(json)
    }
    
    // Articles related to covid-19 on page load
    useEffect(() => {
        getNews("covid19")

    }, []);

    return (
        <div className="home">

            <h1>Today's Top Headlines</h1>
            <Form getNews={getNews} />
            
            {/* Conditional rendering   */}
            { newsData.articles ? <Article newsData={newsData} handleFavoritesClick={props.handleFavoritesClick} /> : null}
     
        </div>
    )
}

export default Home