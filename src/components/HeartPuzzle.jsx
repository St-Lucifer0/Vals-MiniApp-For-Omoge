import { useState, useEffect } from 'react'
import './HeartPuzzle.css'

const COLORS = {
  red: '#ff0000',
  pink: '#ff69b4',
  purple: '#9370db'
}

// Each level has a pattern of colored hearts to match
const patterns = [
  // Level 1: 3 hearts (Red, Pink, Red)
  [
    { id: 1, color: 'red', pos: 0 },
    { id: 2, color: 'pink', pos: 1 },
    { id: 3, color: 'red', pos: 2 }
  ],
  // Level 2: 4 hearts (Pink, Purple, Pink, Purple)
  [
    { id: 1, color: 'pink', pos: 0 },
    { id: 2, color: 'purple', pos: 1 },
    { id: 3, color: 'pink', pos: 2 },
    { id: 4, color: 'purple', pos: 3 }
  ],
  // Level 3: 5 hearts (Red, Pink, Purple, Pink, Red)
  [
    { id: 1, color: 'red', pos: 0 },
    { id: 2, color: 'pink', pos: 1 },
    { id: 3, color: 'purple', pos: 2 },
    { id: 4, color: 'pink', pos: 3 },
    { id: 5, color: 'red', pos: 4 }
  ],
  // Level 4: 4 hearts (Purple, Red, Purple, Red)
  [
    { id: 1, color: 'purple', pos: 0 },
    { id: 2, color: 'red', pos: 1 },
    { id: 3, color: 'purple', pos: 2 },
    { id: 4, color: 'red', pos: 3 }
  ],
  // Level 5: 5 hearts (Red, Purple, Pink, Purple, Red)
  [
    { id: 1, color: 'red', pos: 0 },
    { id: 2, color: 'purple', pos: 1 },
    { id: 3, color: 'pink', pos: 2 },
    { id: 4, color: 'purple', pos: 3 },
    { id: 5, color: 'red', pos: 4 }
  ]
]

function HeartPuzzle({ level, onComplete, revealedMessage }) {
  const [placedHearts, setPlacedHearts] = useState([])
  const [selectedColor, setSelectedColor] = useState(null)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    // Reset placed hearts for new level
    setPlacedHearts([])
    setCompleted(false)
    setSelectedColor(null)
  }, [level])

  const handleColorSelect = (color) => {
    setSelectedColor(color)
  }

  const handleSlotClick = (position, requiredColor) => {
    if (!selectedColor) return

    // Check if position is already filled
    const alreadyPlaced = placedHearts.find(h => h.pos === position)
    if (alreadyPlaced) return

    // Check if color matches
    if (selectedColor !== requiredColor) {
      // Wrong color - could add a shake animation here
      return
    }

    // Correct color! Place the heart
    const newHeart = { pos: position, color: selectedColor }
    const updatedHearts = [...placedHearts, newHeart]
    setPlacedHearts(updatedHearts)
    setSelectedColor(null)

    // Check if puzzle is complete
    const currentPattern = patterns[level]
    if (updatedHearts.length === currentPattern.length) {
      const isComplete = currentPattern.every(pattern =>
        updatedHearts.some(placed =>
          placed.pos === pattern.pos && placed.color === pattern.color
        )
      )

      if (isComplete) {
        setCompleted(true)
        setTimeout(() => onComplete(), 1500)
      }
    }
  }

  const handlePlacedHeartClick = (heart) => {
    // Remove the heart from grid, send it back to pool
    setPlacedHearts(placedHearts.filter(h => h.pos !== heart.pos))
    setSelectedColor(null)
  }

  const currentPattern = patterns[level]
  const gridSize = currentPattern.length

  return (
    <div className="heart-puzzle">
      <div className="puzzle-header">
        <h2 className="puzzle-title">Level {level + 1} of 5</h2>
        <div className="revealed-message">
          {revealedMessage.map((word, i) => (
            <span key={i} className="revealed-word">{word}</span>
          ))}
        </div>
      </div>

      <div className="puzzle-container">
        <p className="puzzle-instruction">
          {selectedColor ? 'Click an empty spot to place your heart' : 'Pick a heart color below'}
        </p>

        {/* Pattern Grid */}
        <div className={`target-grid grid-${gridSize}`}>
          {currentPattern.map((pattern, i) => {
            const placedHeart = placedHearts.find(h => h.pos === pattern.pos)
            const isCorrect = placedHeart && placedHeart.color === pattern.color

            return (
              <div
                key={i}
                className={`grid-slot target-slot ${
                  isCorrect ? 'correct' : ''
                } ${selectedColor && !placedHeart ? 'clickable' : ''}`}
                onClick={() => !placedHeart && handleSlotClick(pattern.pos, pattern.color)}
              >
                {!placedHeart && (
                  <div className="target-outline" style={{ filter: 'grayscale(0.8) opacity(0.3)' }}>
                    ❤️
                  </div>
                )}
                {placedHeart && (
                  <div
                    className="heart placed-heart"
                    style={{ color: COLORS[placedHeart.color] }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePlacedHeartClick(placedHeart)
                    }}
                  >
                    ❤️
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Color Picker */}
        <div className="color-picker">
          <p className="picker-label">Choose a color:</p>
          <div className="color-options">
            {Object.keys(COLORS).map(color => (
              <div
                key={color}
                className={`color-heart ${selectedColor === color ? 'selected' : ''}`}
                style={{ color: COLORS[color] }}
                onClick={() => handleColorSelect(color)}
              >
                ❤️
              </div>
            ))}
          </div>
        </div>
      </div>

      {completed && (
        <div className="completion-message">
          <div className="sparkle">✨</div>
          Perfect!
          <div className="sparkle">✨</div>
        </div>
      )}
    </div>
  )
}

export default HeartPuzzle
