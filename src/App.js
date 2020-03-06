import React, { useState, useEffect } from 'react'
import './App.css'

import Map from './components/Map'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'

import { data, data2, data3, data4, data5, data6, cities } from './data/data'

const App = () => {
  const allData = [data2, data3, data4, data5, data6]
  const [increment, setIncrement] = useState([data])
  const [infection, setInfection] = useState(data)
  const [mostRecent, setMostRecent] = useState(data)
  const [week, setWeek] = useState(data[0].week)

  useEffect(() => {
    let i = 0
    setInterval(() => {
      if (i < allData.length) {
        setInfection(allData[i])
        setIncrement(prevState => [...prevState, allData[i]])
        setMostRecent(allData[i])
        setWeek(allData[i][0].week)
        i++
      }
    }, 5000)
  }, [])

  return (
    <>
      <Map data={infection} cities={cities} />

      <div className='week'>
        <h1>Week {week}</h1>
      </div>

      <div className='line-chart'>
        <LineChart data={increment} city={1} />
      </div>

      <div className='pie-chart'>
        <PieChart data={mostRecent} cities={cities} />
      </div>
    </>
  )
}

export default App
