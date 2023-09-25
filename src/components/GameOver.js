import './GameOver.css'

const GmaeOver = ({ retry, score }) => {
  return (
    <div className='box_gameOver'>
      <h1>Fim de jogo</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GmaeOver