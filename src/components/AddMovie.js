import React, { useState, useContext } from 'react'

import { MovieContext } from './MovieContext'
function AddMovie() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const [movie, setMovies] = useContext(MovieContext)


  const updateName = (e) => {
    setName(e.target.value)
  }


  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const addMovie = (e) => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }])
  }


  return (
    <div>
      <form onSubmit={addMovie}>
        <label htmlFor="Name">Name</label>
        <input type="text" name='name' value={name} onChange={updateName} /><br /><br />
        <label htmlFor="price">price</label>
        <input type="text" name='price' value={price} onChange={updatePrice} /><br /><br />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default AddMovie
