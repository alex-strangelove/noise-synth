// App.jsx
import * as Tone from 'tone'
import { useState } from 'react'

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const playSound = async () => {
    await Tone.start()
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease('C4', '8n')
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 500) // Reset button state after sound
  }

  return (
    <div>
      <button onClick={playSound} disabled={isPlaying}>
        {isPlaying ? 'Playing...' : 'Play Tone'}
      </button>
    </div>
  )
}

export default App
