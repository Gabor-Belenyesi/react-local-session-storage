import React from 'react'

function Beer({name, id, favorites, setFavorites}) {
  return (
    <div>
        <h1>{name}</h1>
        <h3>{id}</h3>
        <button onClick={() => {
            setFavorites([...favorites, id])
        }}>Favorite</button>
    </div>
  )
}

export default Beer