import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='realtive w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
      {/* 
      
      * When there is no card the big plus icon should be displayed: when there are some (or one) card on the dispaly the small plus at the bottom should be dispalyed.
      * Form displaying when plus icon clicked.
      * Adding Cards.
      * Done and Delete function for card. 
      *When 'Done' button is clicked: the color should change.
      *When 'Delete' button is clicked : the card should be removed.
      
            
       */}
    </div>
  )
}

export default App