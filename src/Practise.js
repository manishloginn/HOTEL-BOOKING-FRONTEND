import zIndex from '@mui/material/styles/zIndex'
import React from 'react'

const Practise = () => {

  let checkinwindow = 'yes'

const n = () => {
  console.log('n working')
  y();
  console.log('after y working')
}

const y = () => {
  console.log("y")
  z();
}

const z = () => {
  console.log('z')
}



n()


  return (
    <div>
      practise
    </div>
  )
}

export default Practise
