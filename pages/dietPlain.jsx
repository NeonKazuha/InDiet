import React from 'react'
import { useState } from 'react'
import DietPlainerForm from '../components/DietPlainerForm'

function dietPlain() {
  const [formData, setFormData] = useState({
    weigth: 0,
    target_calories: 0,
  });
  return (
    <>
      <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold text-center">Diet Planner</h1>
      </header>
      <main>
        <DietPlainerForm />
      </main>
    </div>
    </>
  )
}

export default dietPlain
