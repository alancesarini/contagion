import React from 'react'
import classes from './Map.module.css'

const Map = props => {
  return (
    <div className={classes.Map}>
      {props.data.map(item => {
        const city = props.cities.find(city => city.id === item.id)
        const level = Math.floor(item.infected / 100)
        const top = city.y - Math.floor(level / 2)
        const left = city.x - Math.floor(level / 2)
        const styles = { top: top, left: left, width: level, height: level }
        return <div key={item.id} className={classes.Dot} style={styles} />
      })}
    </div>
  )
}

export default Map
