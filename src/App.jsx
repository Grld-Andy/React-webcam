import { useRef, useState } from 'react'

function App() {
  const videoRef = useRef(null)
  const photoRef = useRef(null)
  const [hasPhoto, setHasPhoto] = useState(false)

  return (
    <div className="App">
      <div className="camera">
        <video ref={videoRef}></video>
        <button>SNAP</button>
      </div>
      <div className={"result" + (hasPhoto ? "hasPhoto" : "")}>
        <canvas ref={photoRef}></canvas>
        <button>CLOSE</button>
      </div>
    </div>
  )
}

export default App
