import { useState, useRef, useEffect } from 'react'
import './MusicPlayer.css'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="music-player">
      <audio
        ref={audioRef}        
        preload="auto"
      >
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button className="music-toggle" onClick={togglePlay} title={isPlaying ? 'Pause music' : 'Play music'}>
        {isPlaying ? '⏸️' : '▶️'}
      </button>

      <button className="mute-toggle" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted ? '🔇' : '🔊'}
      </button>

      <div className="music-note">
        {isPlaying && <span className="note-icon">🎵</span>}
      </div>
    </div>
  )
}

export default MusicPlayer
