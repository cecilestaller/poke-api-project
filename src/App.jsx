import { useContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Type from './pages/type/Type'
import Detail from './pages/detail/Detail'
import { FetchContext, FetchContextProvider } from './context/Context'
import PokeFetch from './data/PokeFetch'

function App() {
  const darkMode = useContext(FetchContext);

  return (
    <>
      <FetchContextProvider>
        <div className="master-wrap">
          <PokeFetch />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/type' element={<Type />}/>
            <Route path='/detail/:id' element={<Detail />}/>
          </Routes>
        </div>
      </FetchContextProvider>
    </>
  )
}

export default App
