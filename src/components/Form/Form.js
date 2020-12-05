import React, { useState } from "react"
import './Form.css';

const Form = (props) => {
    // state to keep track of input entered in form
    const [keyword, setKeyword] = useState("")


    const handleSubmit = event => {
        event.preventDefault()
        console.log("handleSubmit was clicked!")
        props.getNews(keyword)   //function from App here 
        setKeyword("")          // set search back to empty string after submit
    }

    const handleChange = event => {
        console.log("handleChange was clicked!")
        const keywordValue = event.target.value
        setKeyword(keywordValue)
    }

    return (
        <div className="form-container">
            <h1>Search Top Headlines</h1>
            <h6>Enter a keyword to search for news articles!</h6>
            <p>Note: if your keyword includes non-alphabetical characters, wrap your search keyword in quotes. For example, "covid-19" </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a keyword"
                    value={keyword}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>

        </div>
    )
}

export default Form
