import './DateInvite.css'

function DateInvite() {
  return (
    <div className="date-invite">
      <div className="confetti">
        <div className="confetti-piece">🎉</div>
        <div className="confetti-piece">💕</div>
        <div className="confetti-piece">✨</div>
        <div className="confetti-piece">💖</div>
        <div className="confetti-piece">🎊</div>
        <div className="confetti-piece">💗</div>
        <div className="confetti-piece">⭐</div>
        <div className="confetti-piece">💝</div>
      </div>

      <div className="date-content">
        <div className="success-icon">🎉</div>
        <h1 className="date-title">Yay! 💕</h1>
        <p className="date-message">
          You've made me the happiest!
        </p>

        <div className="date-invitation">
          <div className="invitation-icon">🌹</div>
          <h2 className="invitation-title">Now...</h2>
          <p className="invitation-text">
            Will you go on a date with me?
          </p>
          <p className="invitation-details">
            Let's make this Valentine's Day special together 💖
          </p>
        </div>

        <div className="hearts-rain">
          <span className="heart-fall">💕</span>
          <span className="heart-fall">💖</span>
          <span className="heart-fall">💗</span>
          <span className="heart-fall">💝</span>
          <span className="heart-fall">💕</span>
          <span className="heart-fall">💖</span>
        </div>
      </div>
    </div>
  )
}

export default DateInvite
