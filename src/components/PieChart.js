import React from 'react'
import CanvasJSReact from './CanvasJS/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const PieChart = props => {
  const infectionData = []
  let totalInfected = 0

  props.data.map(item => {
    totalInfected += item.infected
  })

  props.data.map(item => {
    const city = props.cities.find(city => city.id === item.id)
    infectionData.push({ y: Math.round((item.infected / totalInfected) * 100), label: city.city })
  })

  console.log(props.data)

  const options = {
    animationEnabled: true,
    exportEnabled: false,
    theme: 'light2', // "light1", "dark1", "dark2"
    title: {
      text: 'Infected by city'
    },
    data: [{
      type: 'pie',
      startAngle: 25,
      toolTipContent: '<b>{label}</b>: {y}%',
      showInLegend: 'true',
      legendText: '{label}',
      indexLabelFontSize: 16,
      indexLabel: '{label} - {y}%',
      dataPoints: infectionData
    }]
  }

  return <CanvasJSChart options={options} />
}

export default PieChart
