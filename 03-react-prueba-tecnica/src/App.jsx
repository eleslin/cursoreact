import './App.css'
import { useCatImage } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'

export default function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Nuevo facto</button>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={imgUrl} alt={`cat that says ${fact}`} height={200} />}
    </main>
  )
}
