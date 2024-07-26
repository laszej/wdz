import React from 'react'

export const Experiment1 = ({setTitle}) => {
  return (
    <div>
      <h1>Child component</h1>
        <button onClick={()=> setTitle("Zupełnie inny tytuł" )}>Zmień tytuł</button>
        <button onClick={()=> setTitle("tytuł" )}>Przywróć</button>
    </div>
  )
}
