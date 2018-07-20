import React from 'react'
import './App.css'

// Components
  import Header from './components/Header'
  import Routes from './routes/index'

export default () => (
    <div className="App">
      <Header/>
      <Routes />
    </div>
);