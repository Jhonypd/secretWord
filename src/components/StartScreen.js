import './StartScreen.css'

const StartScreen = ({ startGame }) => {
  return (
    <div className='start'>
      <div className='box_title'>
        <p className='one'>
          <span>S</span>
          <span>e</span>
          <span>c</span>
          <span>r</span>
          <span>e</span>
          <span className='div_letter'>t</span>
        </p>
        <p className='two'>
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>d</span>
        </p>
      </div>
      <p>Clique no botão para começar a jogar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen