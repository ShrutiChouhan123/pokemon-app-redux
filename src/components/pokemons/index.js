import React from 'react'
import PokemonList from './PokemonList'
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import PokemonDetails from './PokemonDetails';

const index = () => {
  return (
    <>
    <PokemonList />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/pokemon/' element={<PokemonList />} />
    <Route path='/pokemon/:id' element={<PokemonDetails />} />
    </Routes>
    </>
  )
}

export default index;