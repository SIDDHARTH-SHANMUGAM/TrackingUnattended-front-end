import React from 'react'
import './Home.css'
import Card from './Card';
import Navbar from './Navbar';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <Router >
        <Navbar />
            <Routes>
            <Route path='/' exact />
            </Routes>
        </Router>
        
      <div className='card-dec'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </>
  )
}

export default Home
