export const Square = ({ children, updateBoard, index, isSelected }) => {
  const handleClick = () => {
    updateBoard()
  }

  return (
    <div
      className={`square ${isSelected ? 'is-selected' : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
