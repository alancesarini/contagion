import React from 'react'
import CanvasJSReact from './CanvasJS/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const LineChart = props => {
  const infectionData = []
  props.data.map(arr => {
    let totalInfected = 0
    arr.map(item => {
      totalInfected += item.infected
    })
    arr.map(item => {
      if (item.id === 1) {
        infectionData.push({ x: item.week, y: totalInfected })
      }
    })
  })

  const options = {
    animationEnabled: true,
    exportEnabled: false,
    theme: 'light2', // "light1", "dark1", "dark2"
    title: {
      text: 'Infected by week'
    },
    axisY: {
      title: 'Infections',
      includeZero: false
    },
    axisX: {
      title: 'Week',
      interval: 5
    },
    data: [{
      type: 'line',
      toolTipContent: 'Week {x}: {y} infected',
      dataPoints: infectionData
    }]
  }

  return <CanvasJSChart options={options} />
}

export default LineChart
