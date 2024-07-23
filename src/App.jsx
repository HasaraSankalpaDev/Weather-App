import React from 'react'
import WeatherCard from './Components/WeatherCard/WeatherCard'

function App() {
  return (
    <div className='container'>
      <div className="row d-flex align-content-center justify-content-center w-100 h-100">
        <div className="col-8 mt-5"><WeatherCard/></div>
      </div>
      
    </div>
  )
}

export default App