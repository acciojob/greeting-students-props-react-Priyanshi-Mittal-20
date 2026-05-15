// write code for Welcome component here
import React from 'react'
import { useState } from 'react'

const Welcome = ({name}) => {
  
  return (
    <div>
      <h1><p>Hey! {name}</p></h1>
      <p>Welcome to School.</p>
    </div>
  )
}

export default Welcome

