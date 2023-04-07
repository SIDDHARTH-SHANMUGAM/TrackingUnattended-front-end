import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className='container'>
      <div className='image'>
        <img  src='/sample1.jpg'  alt='sorry' />
      </div>
      <div className='description'>
        <h3>Name : Sample 1</h3>
        <p>age : 4-5</p>
        <p>gender : Male</p>
        <p>type : Missed</p>
      </div>
    </div>
  )
}

export default Card
