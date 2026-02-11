import { useState } from 'react'
import './DateOptions.css'

const dateOptions = [
  {
    id: 1,
    title: "A weekend getaway",
    icon: "",
    description: "A cozy weekend escape",
    details: "Not a trip far from home but a get away to a hotel where you could be all mine and so I you😍"
  },
  {
    id: 2,
    title: "Movie & Chill",
    icon: "🎬",
    description: "Netflix, popcorn, good massage, and cuddles",
    details: "Your favorite movies and quality time together will be assured babe💖"
  },
  {
    id: 3,
    title: "Fun Day Out",
    icon: "🎡",
    description: "We'd create time to go out",
    details: "We'd have a fun out on dinner or a fufu date just how you like it love. You name it😊"
  }
]

function DateOptions() {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateSelect = (dateId) => {
    setSelectedDate(dateId)
  }

  return (
    <div className="date-options">
      <div className="confetti-bg">
        <div className="confetti-piece">🎉</div>
        <div className="confetti-piece">💕</div>
        <div className="confetti-piece">✨</div>
        <div className="confetti-piece">💖</div>
        <div className="confetti-piece">🎊</div>
        <div className="confetti-piece">💗</div>
      </div>

      <div className="date-content">
        <div className="success-header">
          <div className="success-icon">🎉</div>
          <h1 className="date-title">I Love You Baby Girl!! 💕</h1>
          <p className="date-message">It's a shame on me that I won't make it this weekend💔</p>
        </div>

        <div className="options-container">
          <h2 className="options-title">But Imma surprise you with a visit; just pick all these three for me😊</h2>

          <div className="date-cards">
            {dateOptions.map((option) => (
              <div
                key={option.id}
                className={`date-card ${selectedDate === option.id ? 'selected' : ''}`}
                onClick={() => handleDateSelect(option.id)}
              >
                <div className="date-icon">{option.icon}</div>
                <h3 className="date-card-title">{option.title}</h3>
                <p className="date-description">{option.description}</p>
                <p className="date-details">{option.details}</p>

                {selectedDate === option.id && (
                  <div className="selected-badge">
                    <span className="check-icon">✓</span>
                    Selected
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectedDate && (
            <div className="final-message">
              <p className="final-text">
                I can't wait to spend this special time with you 💖
              </p>
              <div className="hearts-footer">
                <span>💕</span>
                <span>Just be patient love</span>
                <span>💕</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DateOptions
