import { useState } from 'react'

const TURNS = { a: '🔵', b: '🟣' }
const GRID_SIZE = 5

function App () {
  const [board, setBoard] = useState(Array(GRID_SIZE * GRID_SIZE).fill(null))
  const [player, setPlayer] = useState(TURNS.a)

  const Square = ({ children, index, isSelected, handleClick }) => {
    const className = isSelected ? 'square is-selected' : 'square'
    return (
      <div
        className={className}
        key={index}
        onClick={handleClick}
      >
        {children}
      </div>
    )
  }

  const updateBoard = (index) => {
    // Update the board but can only if is the bottom row or there is a cell below
    const newBoard = [...board]
    console.log('newBoard index ', newBoard[index])
    if (index < GRID_SIZE * (GRID_SIZE - 1) && !newBoard[index + GRID_SIZE] && newBoard[index]) {
      return
    }
    newBoard[index] = player
    setBoard(newBoard)

    // Check if there is a winner
    for (let i = 0; i < GRID_SIZE; i++) {

    }

    // Change the player
    setPlayer(player === TURNS.a ? TURNS.b : TURNS.a)
  }


  return (
    <>
      <section className='board'>
        <h1>Connect Four</h1>
        <div className='game'>
          {board.map((cell, index) => (
            <Square key={index} handleClick={() => updateBoard(index)} index={index} >{cell} {index}</Square>
          ))}
        </div>
      </section>

      <section className='turn'>
        <Square isSelected={player === TURNS.a}>{TURNS.a}</Square>
        <Square isSelected={player === TURNS.b}>{TURNS.b}</Square>
      </section>
    </>
  )
}

export default App
