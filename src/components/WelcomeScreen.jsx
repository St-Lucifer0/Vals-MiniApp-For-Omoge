import './WelcomeScreen.css'

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="heart-icon">💖</div>
        <h1 className="welcome-title">Hey Omoge</h1>
        <p className="welcome-text">I have something special for you...</p>
        <button className="start-button" onClick={onStart}>
          Start
          <span className="button-heart">💕</span>
        </button>
      </div>
    </div>
  )
}

export default WelcomeScreen
