import { useState } from 'react'
import './CardReveal.css'

const reasons = [
  {
    id: 1,
    title: "1",
    text: "I really look good when I'm yours😏",
    media: "card1.jpg" // You'll replace this with your image/video
  },
  {
    id: 2,
    title: "2",
    text: "I like the way you make me loose my cool🥰",
    media: "card2.jpg"
  },
  {
    id: 3,
    title: "3",
    text: "I pay attention to you in a way that feels personal💦",
    media: "card3.jpg"
  },
  {
    id: 4,
    title: "4",
    text: "I want you feeling wanted, chosen, and irresistible💖",
    media: "card4.jpg"
  },
  {
    id: 5,
    title: "5",
    text: "I will put you in 9 positions in 90 minutes above cloud 9🍑",
    media: "card5.jpg"
  },
  {
    id: 6,
    title: "6",
    text: "I'd rather be close to you than anywhere else🤗",
    media: "card6.jpg"
  },
  {
    id: 7,
    title: "7",
    text: "I am your second to none baby❤️",
    media: "card7.jpg"
  }
]

function CardReveal({ onComplete }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentReason = reasons[currentCardIndex]
  const isLastCard = currentCardIndex === reasons.length - 1
  const isVideo = currentReason.media.endsWith('.mp4') || currentReason.media.endsWith('.webm')

  const handleCardClick = () => {
    if (!isFlipped) {
      setIsFlipped(true)
    }
  }

  const handleNext = () => {
    if (currentCardIndex < reasons.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false) // Reset flip for next card
    }
  }

  return (
    <div className="card-reveal">
      <div className="card-reveal-header">
        <h2 className="card-title">Why you should be my valentine🤭❤️</h2>
        <p className="card-subtitle">
          {isFlipped ? 'Read and click Next 💕' : 'Tap the card to reveal 💕'}
        </p>
        <div className="progress-indicator">
          {currentCardIndex + 1} of {reasons.length}
        </div>
      </div>

      <div className="single-card-container">
        <div
          className={`card ${isFlipped ? 'flipped' : ''}`}
          onClick={handleCardClick}
        >
          <div className="card-inner">
            {/* Front of card */}
            <div className="card-front">
              <div className="card-number">{currentReason.id}</div>
              <div className="heart-icon">💕</div>
              <p className="tap-hint">Tap to reveal</p>
            </div>

            {/* Back of card */}
            <div className="card-back">
              <div className="card-media">
                {isVideo ? (
                  <video
                    src={`/media/${currentReason.media}`}
                    controls
                    className="card-video"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Your browser does not support video.
                  </video>
                ) : (
                  <img
                    src={`/media/${currentReason.media}`}
                    alt={currentReason.title}
                    className="card-image"
                  />
                )}
              </div>
              <div className="card-content">
                <h3 className="reason-title">{currentReason.title}</h3>
                <p className="reason-text">{currentReason.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="navigation-section">
          {!isLastCard ? (
            <button className="next-button" onClick={handleNext}>
              Next Reason
              <span className="arrow">→</span>
            </button>
          ) : (
            <div className="final-section">
              <div className="celebration-text">
                <span className="sparkle">✨</span>
                All reasons revealed!
                <span className="sparkle">✨</span>
              </div>
              <button className="continue-button" onClick={onComplete}>
                Continue to my question 💕
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CardReveal
