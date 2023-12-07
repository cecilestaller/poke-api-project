import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Type from './pages/Type'
import Detail from './pages/Detail'
import { FetchContextProvider } from './context/Context'
import PokeFetch from './data/PokeFetch'

function App() {

  return (
    <>
    <FetchContextProvider>
      <PokeFetch />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/type' element={<Type />}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
    </FetchContextProvider>
    </>
  )
}

export default App
