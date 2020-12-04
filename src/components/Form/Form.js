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
        <>
            <p>Enter a keyword to search daily news articles!</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a keyword"
                    value={keyword}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>

        </>
    )
}

export default Form
