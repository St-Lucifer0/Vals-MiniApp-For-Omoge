import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import CardReveal from './components/CardReveal'
import QuestionScreen from './components/QuestionScreen'
import DateOptions from './components/DateOptions'
import MusicPlayer from './components/MusicPlayer'
import './App.css'

function App() {
  const [screen, setScreen] = useState('welcome') // welcome, cards, question, date

  const handleStart = () => {
    setScreen('cards')
  }

  const handleCardsComplete = () => {
    setScreen('question')
  }

  const handleYes = () => {
    setScreen('date')
  }

  return (
    <div className="app">
      <MusicPlayer />

      {screen === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {screen === 'cards' && (
        <CardReveal onComplete={handleCardsComplete} />
      )}

      {screen === 'question' && (
        <QuestionScreen onYes={handleYes} />
      )}

      {screen === 'date' && (
        <DateOptions />
      )}
    </div>
  )
}

export default App
