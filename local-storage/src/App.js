import './App.css';
import React, {useState, useEffect} from 'react'
import Beer from './components/Beer'

function App() {

  const [beers, setBeers] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem(favorites))
    if(favoritesItem) {
      setFavorites(favoritesItem)
    } 
  },[])

  useEffect(() => {
    setBeers([
      {
        name: 'Kőbányai',
        id: 23
      },
      {
        name: 'Nagybányai',
        id: 47
      },
      {
        name: 'Kisbányai',
        id: 52
      },
      {
        name: 'Pécsi',
        id: 19
      },
      {
        name: 'Kanizsai',
        id: 39
      }
    ])
  },[])

  useEffect(() => {
    if(favorites.length > 0) {
    localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  },[favorites])

  return (
    <div className="App">
     {beers.length > 0 ? beers.map((beer, i) => <Beer name={beer.name} id={beer.id} key={i} favorites={favorites} setFavorites={setFavorites}/>) : null }
    </div>
  );
}

export default App;
