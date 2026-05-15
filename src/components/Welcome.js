// write code for Welcome component here
import React from 'react'
import { useState } from 'react'

const Welcome = ({name}) => {
  
  return (
    <div>
      <h1><p>Hey! {name}</p></h1>
      <h2>Welcome to School.</h2>
    </div>
  )
}

export default Welcome

