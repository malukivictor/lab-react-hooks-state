import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)
  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([])
  // TODO: Implement state for category filtering
  const [category, setCategory] = useState('all')

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }
 
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }
 
  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }
 
  const darkModeStyles = {
    backgroundColor: darkMode ? 'rgb(31, 31, 31)' : 'rgb(255, 255, 255)',
    color: darkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
    minHeight: '100vh',
    padding: '1rem'
  }
  return (
    <div style={darkModeStyles}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle toggleDarkMode={toggleDarkMode} />

      {}
      <label>Filter by Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} onAddToCart={handleAddToCart} />

      <Cart cartItems={cartItems} />

      
    </div>
  )
}

export default App
