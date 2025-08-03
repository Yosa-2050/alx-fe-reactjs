import React from 'react';
import './App.css';
import Search from "./components/Search";


function App () {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <h1 className='text-2xl font-bold text-center mb-6'>GitHub search application</h1>
      <Search />
    </div>
  )
}

export default App;