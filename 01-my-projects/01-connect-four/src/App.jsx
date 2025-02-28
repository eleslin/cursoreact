import { useState } from 'react'

function App () {
  const [board, setBoard] = useState(Array(25).fill(null))


  return (
    <>
      <section className='board'>
        <h1>Connect Four</h1>
        <div className='game'>
          {board.map((cell, index) => (
            <div key={index} className='square'>
              {cell}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
