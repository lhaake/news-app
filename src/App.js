import React, {useState} from 'react';
import './App.css';
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Favorites from "./components/Favorites/Favorites"
import { Route, Switch } from "react-router-dom"


function App() {

    const [favorites, setFavorites] = useState([])

      const handleFavoritesClick = favarticle => {
        console.log("Add favorites button clicked!")
        setFavorites([...favorites, {
            title: favarticle.title,
            source: favarticle.source.name,
            description: favarticle.description,
            url: favarticle.url,
            urlToImage: favarticle.urlToImage
        }])
         console.log(`Adding ${favarticle.title} to favorites`); 
          console.log("favorites list",favorites); 
      }

    const removeFromFaves = index => {
        console.log("Remove from favorites button clicked!")
        const favesArray = favorites.filter((article, i) => i !== index)
        setFavorites(favesArray)
        console.log("this is removing favorites", favorites)
    }

  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/"
           render={(routerProps) => 
          <Home
            handleFavoritesClick={handleFavoritesClick}
            {...routerProps} 
          /> } 
        />


        <Route exact path="/about" component={About} />
        
        <Route exact path="/favorites" 
           render={(routerProps) => 
          <Favorites 
            favorites={favorites}
            {...routerProps} 
           removeFromFaves={removeFromFaves}
          /> } 
        />
        
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
