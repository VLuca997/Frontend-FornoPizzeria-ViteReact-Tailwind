import React from 'react'
import PizzaList from '../../Components/Pizza/PizzaList'

const Pizza = () => {
  return (
    <div>
      <div>
      <h1 className="text-4xl font-bold text-center my-8 text-purple-700">La mia Pizzeria</h1>
      <PizzaList />
    </div>
    </div>
  )
}

export default Pizza