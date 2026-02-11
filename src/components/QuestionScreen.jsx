import { useState } from 'react'
import './QuestionScreen.css'

function QuestionScreen({ onYes }) {
  const [noPosition, setNoPosition] = useState({ top: '60%', left: '35%' })
  const [noAttempts, setNoAttempts] = useState(0)

  const handleNoHover = () => {
    // Generate random position
    const newTop = Math.random() * 70 + 10 // 10% to 80%
    const newLeft = Math.random() * 70 + 10 // 10% to 80%

    setNoPosition({
      top: `${newTop}%`,
      left: `${newLeft}%`
    })

    setNoAttempts(prev => prev + 1)
  }

  const messages = [
    "Will You Be My Valentine?",
    "Are you sure? 🥺",
    "Really? Think again 💕",
    "Come on, you know you want to 😊",
    "Aww, Omoge baby🥺🥺🥺",
    "Just say yes already! 💗",
    "I'll keep asking until you say yes 😄"
  ]

  // Cycle through the 7 messages repeatedly
  const currentMessage = messages[noAttempts % messages.length]

  return (
    <div className="question-screen">
      <div className="question-content">
        <div className="hearts-decoration">
          <span className="floating-heart">💕</span>
          <span className="floating-heart">💖</span>
          <span className="floating-heart">💗</span>
          <span className="floating-heart">💝</span>
        </div>

        <h1 className="question-title">{currentMessage}</h1>

        <div className="buttons-container">
          <button className="yes-button" onClick={onYes}>
            Yes! 💕
          </button>

          <button
            className="no-button"
            style={{
              position: 'fixed',
              top: noPosition.top,
              left: noPosition.left,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionScreen
