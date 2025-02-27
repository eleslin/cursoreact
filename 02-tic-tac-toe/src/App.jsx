import confetti from 'canvas-confetti'
import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    console.log('ejecutando')

    /// Check if the square is already filled
    if (board[index]) return

    /// Set board's index to the value of current turn
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    /// Check if the current turn wins or if the game has ended
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (!newBoard.includes(null)) {
      setWinner(false)
    }

    /// Change current turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {board.map((square, index) => (
          <Square
            key={index}
            index={index}
            updateBoard={() => updateBoard(index)}
          >
            {square}
          </Square>
        ))}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
