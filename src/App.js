// In App.js
import { useState, useEffect, useRef } from 'react';
import './output.css';
import './App.css'
import Button from './Button.js';
import { gsap } from 'gsap';

function App() {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [showButtons, setShowButtons] = useState(true)
  const [playSound, setPlaySound] = useState(false)
  const audioRef = useRef(null); // Initialize the ref

  useEffect(() => {
    // Ensure GSAP animations target elements that have been rendered
    gsap.to("#poster", { duration: 2, y: -350, opacity: 1 });
    gsap.to("#tickets", { duration: 3, y: +450, opacity: 1 });

    // Replace "#flower" with the actual ID or class of the elements you're animating
  }, [showTickets]); // Empty dependency array means this effect runs once after initial render

  useEffect(() => {
    // This effect toggles the playback based on playSound state
    if (playSound) {
      audioRef.current.play();
    } else {
      //audioRef.current.pause();
    }
    //hej
  }, [playSound]); 
  return (
    <div className="App bg-pink-300 relative">
      <div className='flex flex-col justify-center items-center w-screen h-screen'>
        {showButtons && (
          <>
          <h3 className='font-sans text-3xl z-10 text-white'>Will you be my valentine?</h3>
          </>
        )}
        {!showButtons && (
          <>
          <h3 className='font-sans text-3xl z-10 text-white'>SEE YOU ON FEBRUARY 14</h3>
          <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/onelove.mp3`} type="audio/mpeg"></audio>
          </>
        )}
        <div className='flex gap-x-10 pt-5'>
        {showButtons && (
          <>
          <Button name="yes" setPlaySound={setPlaySound} setShowButtons={setShowButtons} setShowVideo1={setShowVideo1} setShowVideo2={setShowVideo2} setShowTickets={setShowTickets}></Button>
          <Button name="no" setPlaySound={setPlaySound} setShowButtons={setShowButtons} setShowVideo1={setShowVideo1} setShowVideo2={setShowVideo2} setShowTickets={setShowTickets}></Button>
          </>
        )}
        </div>
        {showVideo1 && (
          <>
            <video
              className="absolute z-0 w-screen h-screen top-0 left-0 object-cover"
              src="saddog.mp4"
              autoPlay
              loop
              muted
            ></video>
            {/* Include other video here if needed */}
          </>
        )}
        {showVideo2 && (
          <>
            <video
              className="absolute z-0 w-screen h-screen top-0 left-0 object-cover"
              src="awkwarddog.mp4"
              autoPlay
              loop
              muted
            ></video>
            {/* Include other video here if needed */}
          </>
        )}
        {showTickets && (
          <>

          <img id="tickets" className="shadow-xl rotate-[-12deg] w-[55vw]" src="tickets.png"></img>
          <img id="poster" className="shadow-xl rotate-12  w-[55vw]" src="onelove.jpg"></img>

</>
      )}
      </div>
    </div>
  );
}

export default App;
