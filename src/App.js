// In App.js
import { useState, useEffect } from 'react';
import './output.css';
import './App.css'
import Button from './Button.js';
import { gsap } from 'gsap';

function App() {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [showButtons, setShowButtons] = useState(true)
  useEffect(() => {
    // Ensure GSAP animations target elements that have been rendered
    gsap.to("#flower", { duration: 2, y: -300, opacity: 1 });
    // Replace "#flower" with the actual ID or class of the elements you're animating
  }, [showTickets]); // Empty dependency array means this effect runs once after initial render

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
          <audio src="onelove.mp3" type="audio/mpeg" controls></audio>
          </>
        )}
        <div className='flex gap-x-10 pt-5'>
        {showButtons && (
          <>
          <Button name="yes" setShowButtons={setShowButtons} setShowVideo1={setShowVideo1} setShowVideo2={setShowVideo2} setShowTickets={setShowTickets}></Button>
          <Button name="no" setShowButtons={setShowButtons} setShowVideo1={setShowVideo1} setShowVideo2={setShowVideo2} setShowTickets={setShowTickets}></Button>
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
          <img className="shadow-xl rotate-[-12deg] absolute w-[28vw] top-20 left-20" src="tickets.png"></img>
          <img className="shadow-xl rotate-12 absolute w-[20vw] top-20 right-20" src="onelove.jpg"></img>
        <svg version="1.0" id="flower" xmlns="http://www.w3.org/2000/svg"
        width="300.000000pt" height="175.000000pt" viewBox="0 0 300.000000 175.000000"
        preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,175.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1287 1696 c-4 -9 -14 -12 -26 -9 -15 4 -22 -1 -26 -20 -7 -27 6 -59
37 -93 11 -13 16 -28 12 -38 -6 -15 -8 -14 -18 6 -14 29 -42 31 -38 3 2 -11
13 -36 25 -55 l21 -34 11 42 c9 41 45 81 71 82 16 0 44 34 44 54 0 9 -11 21
-25 26 -13 5 -30 18 -37 30 -15 23 -43 27 -51 6z m47 -28 c14 -20 14 -24 0
-46 -9 -13 -13 -26 -10 -29 3 -3 13 8 23 26 21 35 33 40 33 11 0 -20 -26 -39
-66 -46 -23 -4 -24 -2 -24 44 0 67 16 81 44 40z m-60 -14 c3 -9 6 -28 6 -42
-1 -26 -1 -26 -15 -8 -16 22 -20 66 -6 66 5 0 12 -7 15 -16z"/>
<path d="M1110 1546 c-6 -6 -10 -16 -10 -23 0 -6 -8 -16 -17 -22 -17 -9 -17
-12 -3 -38 13 -24 24 -29 66 -33 l51 -5 13 43 c19 65 4 92 -50 89 -22 -1 -45
-6 -50 -11z m44 -16 c21 -8 26 -16 26 -45 0 -40 -7 -43 -44 -14 -25 19 -34 48
-19 62 8 9 7 9 37 -3z m-15 -88 c-14 -6 -49 18 -49 34 0 12 6 10 28 -8 16 -13
25 -24 21 -26z"/>
<path d="M1855 1486 c-16 -25 -16 -25 -36 -5 -11 11 -28 19 -37 17 -21 -4 -28
-49 -12 -78 14 -26 2 -26 -26 1 -15 14 -29 18 -48 13 -22 -5 -26 -12 -26 -39
0 -26 5 -35 22 -41 20 -6 19 -7 -10 -20 -18 -7 -32 -19 -32 -26 1 -24 27 -48
52 -48 24 0 25 -2 18 -40 -9 -49 6 -67 38 -44 20 14 22 14 22 -3 0 -45 46 -57
56 -16 6 24 8 25 14 7 15 -40 22 -147 14 -241 -6 -80 -9 -92 -16 -67 -9 35
-32 59 -48 49 -19 -12 -10 -63 16 -95 31 -36 32 -57 9 -214 -8 -60 -15 -126
-15 -145 l-1 -36 -13 31 c-17 40 -30 48 -46 29 -14 -17 -6 -50 26 -92 20 -26
24 -44 24 -98 0 -91 20 -258 32 -270 7 -7 8 3 4 30 -13 82 -18 381 -8 454 9
58 17 80 36 100 l26 26 0 -29 c0 -19 12 -42 35 -67 27 -31 35 -47 34 -77 l0
-37 -20 45 c-35 78 -69 100 -69 44 0 -31 13 -57 57 -110 34 -42 43 -92 23
-124 -5 -8 -5 -19 -1 -25 14 -16 22 -89 12 -104 -7 -10 -18 0 -45 40 -20 30
-36 59 -36 66 0 28 19 11 46 -41 33 -64 44 -67 16 -4 -32 71 -82 101 -82 48 0
-18 60 -104 86 -125 17 -13 34 -59 34 -91 0 -13 4 -24 10 -24 9 0 7 76 -6 170
-5 41 -2 49 35 99 40 52 55 111 32 125 -18 12 -72 -79 -71 -121 1 -10 10 4 20
31 23 58 50 92 50 63 0 -34 -51 -117 -72 -117 -4 0 -8 22 -8 50 0 44 5 54 45
100 35 40 45 58 45 86 0 28 -4 35 -17 32 -20 -4 -63 -74 -63 -103 0 -11 11 3
24 31 28 61 46 76 46 40 0 -25 -53 -96 -71 -96 -5 0 -9 20 -9 45 0 41 4 49 50
92 46 43 62 78 44 96 -11 11 -43 -12 -59 -43 -22 -43 -18 -48 8 -10 23 35 47
50 47 30 0 -14 -64 -80 -78 -80 -5 0 -6 15 -2 38 5 27 23 52 63 93 57 56 70
85 42 95 -21 8 -42 -11 -76 -71 -16 -27 -29 -43 -29 -35 0 11 -4 10 -12 -5 -6
-10 -11 -42 -10 -70 l1 -50 -12 43 c-7 24 -20 49 -30 56 -9 7 -17 22 -17 32 1
16 5 14 25 -11 30 -36 32 -28 5 17 -20 34 -27 88 -11 88 5 0 16 -26 25 -57 14
-51 15 -53 11 -16 -6 52 -24 93 -41 93 -17 0 -25 -27 -18 -58 4 -15 3 -24 -1
-20 -9 9 -35 -9 -35 -24 0 -6 7 -5 15 2 12 10 15 9 15 -7 0 -21 -27 -63 -40
-63 -6 0 -5 11 0 26 6 14 8 29 5 34 -3 4 2 54 10 111 8 57 15 127 15 156 0 39
6 58 24 80 31 38 46 67 46 93 0 33 -32 21 -52 -20 -17 -33 -18 -34 -18 -9 0
15 -3 42 -7 60 -6 31 -5 33 10 21 20 -17 37 -8 37 19 0 12 7 19 19 19 50 0 66
27 35 61 -15 16 -14 17 3 13 24 -6 39 6 46 38 8 29 -13 58 -41 58 -13 0 -11 4
6 16 17 12 22 24 20 47 -3 30 -6 32 -40 31 -27 -1 -35 2 -31 13 6 16 -24 42
-49 43 -10 0 -25 -11 -33 -24z m58 -14 c4 -20 -21 -75 -31 -68 -4 2 -8 -4 -8
-14 0 -15 9 -11 43 21 23 21 47 39 53 39 12 0 30 -41 23 -53 -6 -10 -83 -49
-83 -42 0 3 -9 1 -20 -5 -15 -8 -20 -8 -22 2 -2 23 -5 33 -13 51 -8 19 1 65
17 84 12 15 36 6 41 -15z m-73 -79 c0 -55 -21 -57 -43 -5 -38 89 -32 120 14
75 22 -22 29 -37 29 -70z m-74 -10 c35 -35 36 -38 17 -41 -35 -5 -96 30 -98
56 -3 35 36 28 81 -15z m244 -57 c0 -8 -5 -18 -11 -22 -8 -4 -7 -9 2 -15 24
-15 -35 -10 -73 5 -30 13 -35 13 -35 1 0 -8 4 -12 7 -10 10 6 58 -32 71 -57
10 -19 9 -20 -10 -15 -12 3 -21 0 -21 -6 0 -6 -14 4 -30 23 -47 55 -51 64 -34
88 13 18 25 22 75 22 45 0 59 -3 59 -14z m-203 -8 c-2 -7 -11 -12 -20 -12 -9
1 -14 -2 -12 -7 3 -4 -13 -13 -35 -20 -37 -11 -42 -10 -60 9 -19 20 -19 22 -2
31 26 16 135 14 129 -1z m0 -46 c-18 -43 -64 -98 -73 -89 -5 4 -3 17 4 27 10
16 10 20 0 20 -13 1 61 70 74 70 4 0 2 -13 -5 -28z m37 -24 c-3 -24 -10 -58
-16 -77 -10 -32 -12 -33 -24 -16 -18 25 -18 35 6 89 25 59 42 60 34 4z m51
-18 c15 -30 20 -70 8 -70 -19 0 -43 37 -43 67 0 41 15 43 35 3z m38 -147 c-4
-10 -15 -31 -25 -48 -23 -38 -25 -8 -3 35 17 32 39 42 28 13z m-105 -210 c5
-10 12 -31 16 -48 l6 -30 -25 30 c-25 30 -33 65 -15 65 5 0 13 -8 18 -17z
m212 -197 l-43 -41 23 40 c13 22 30 48 39 59 15 17 16 17 19 1 3 -11 -13 -34
-38 -59z m-110 -97 c6 -23 9 -43 6 -46 -6 -7 -36 52 -36 72 0 30 19 14 30 -26z
m-4 -126 c27 -60 28 -67 14 -58 -12 8 -60 99 -60 115 0 24 23 -5 46 -57z
m-141 -13 c8 -16 15 -37 15 -47 -1 -28 -39 26 -40 55 0 30 6 28 25 -8z"/>
<path d="M1286 1458 c-22 -27 -26 -41 -24 -87 1 -51 2 -52 5 -13 3 34 11 47
39 70 34 27 46 62 20 62 -7 0 -25 -14 -40 -32z"/>
<path d="M1210 1435 c-8 -25 -8 -39 0 -55 14 -26 8 -36 -10 -15 -14 17 -50 21
-50 5 0 -5 18 -21 39 -34 22 -14 43 -31 47 -37 7 -12 34 -270 28 -277 -1 -2
-11 12 -23 31 -11 18 -26 34 -33 35 -7 1 -25 4 -40 8 -22 5 -28 3 -28 -9 0
-20 30 -37 64 -37 20 0 30 -9 46 -40 19 -36 54 -189 46 -197 -9 -10 -35 50
-38 87 -3 50 -24 65 -31 23 -2 -17 -5 -8 -6 23 -1 49 -13 74 -36 74 -22 0 -65
-45 -65 -68 0 -13 -6 -22 -15 -22 -8 0 -23 -17 -34 -37 l-20 -38 -1 32 c0 23
11 44 40 78 22 25 40 55 40 66 0 24 -29 37 -41 18 -4 -8 -14 -23 -22 -34 -14
-19 -15 -18 -9 10 3 16 14 43 24 60 20 34 24 100 6 111 -16 10 -38 -24 -38
-60 l0 -31 -18 35 c-19 38 -46 50 -56 25 -7 -18 29 -95 44 -95 5 0 1 15 -10
33 -22 35 -26 57 -10 57 18 0 31 -41 36 -108 l5 -67 -22 38 c-28 46 -49 48
-49 6 0 -23 9 -40 35 -64 34 -31 36 -35 33 -93 l-2 -62 -23 21 c-22 21 -40 75
-29 86 3 3 13 -11 22 -33 9 -21 19 -34 21 -27 6 18 -26 73 -42 73 -11 0 -15
-11 -15 -37 0 -29 7 -43 39 -72 31 -29 39 -45 43 -84 l6 -47 -40 45 c-44 50
-63 56 -73 24 -9 -28 20 -67 75 -99 39 -23 45 -32 56 -80 7 -30 13 -63 14 -73
0 -16 -2 -16 -24 -2 -24 16 -41 44 -31 53 2 3 14 -6 25 -19 l21 -24 -17 33
c-20 35 -44 43 -44 13 0 -33 11 -50 45 -71 47 -29 59 -90 59 -307 1 -95 4
-173 8 -173 17 0 21 61 14 219 -3 91 -3 179 2 196 5 18 25 41 53 60 30 22 45
40 47 58 2 18 -1 27 -11 27 -18 0 -67 -38 -67 -52 0 -7 10 -2 23 10 24 23 47
29 47 13 0 -8 -63 -61 -73 -61 -10 0 1 90 13 105 16 20 22 44 13 59 -4 5 -10
1 -14 -10 -6 -14 -8 -10 -8 17 -1 19 -7 43 -14 53 -12 16 -14 16 -26 2 -13
-15 -11 -53 4 -88 5 -13 3 -18 -8 -18 -8 0 -18 -12 -23 -27 -6 -25 -8 -22 -16
26 -8 50 -6 57 23 102 23 36 30 57 27 86 -5 57 -29 49 -53 -17 l-20 -55 -3 44
c-3 38 1 48 29 77 21 22 32 43 32 62 0 28 2 29 31 19 17 -6 36 -11 43 -13 12
-3 80 -91 103 -134 8 -14 28 -76 46 -139 29 -103 31 -117 19 -145 l-13 -31 -1
46 c-1 52 -20 85 -45 76 -24 -9 -21 -80 5 -125 l22 -38 -27 -103 c-32 -121
-67 -294 -60 -300 9 -9 14 8 33 108 21 109 30 126 64 137 49 14 85 72 57 89
-12 7 -70 -31 -70 -46 0 -5 13 0 30 12 16 13 33 20 36 16 9 -9 -14 -36 -46
-52 l-27 -14 2 38 c2 37 37 153 54 180 19 29 57 -174 68 -364 l7 -120 8 73
c12 116 23 145 65 173 20 13 38 30 41 37 5 16 -30 16 -47 -1 -9 -8 -8 -1 3 20
10 21 26 34 46 38 16 4 37 16 45 28 22 31 44 13 68 -54 19 -54 19 -148 1 -264
-5 -28 -3 -37 4 -30 11 11 32 142 32 204 0 28 7 44 30 66 17 16 30 35 30 42 0
19 -37 16 -44 -3 -5 -14 -4 -15 9 -4 8 7 15 9 15 4 -1 -10 -25 -44 -32 -44 -2
0 -5 39 -6 88 -2 48 -5 95 -8 104 -3 9 8 31 26 51 32 37 40 77 15 77 -8 0 -19
-9 -25 -19 -15 -29 -12 -39 5 -17 8 11 18 17 22 13 3 -4 -2 -16 -12 -27 -29
-32 -34 -9 -37 140 -3 122 -1 134 16 144 54 31 71 73 28 69 -15 -2 -19 2 -15
17 6 23 23 37 23 20 0 -6 10 -10 23 -8 16 2 21 9 20 26 -2 14 3 22 12 22 24 0
17 42 -10 69 -17 16 -30 21 -43 15 -9 -4 -22 -6 -29 -5 -17 2 -27 -19 -30 -62
-2 -28 2 -40 15 -45 16 -7 16 -11 -5 -72 -19 -59 -22 -62 -22 -30 -1 35 -25
175 -37 218 -5 18 -2 22 15 22 18 0 20 5 19 48 -2 55 -13 75 -40 66 -10 -3
-25 0 -33 6 -18 15 -49 -5 -41 -26 3 -7 -4 -16 -15 -19 -25 -8 -25 -45 1 -52
11 -3 20 -13 20 -23 0 -20 26 -34 35 -20 17 28 36 -17 40 -97 1 -30 1 -31 -21
-16 -23 15 -40 43 -25 43 5 0 14 -7 21 -15 7 -9 15 -13 18 -10 8 7 -29 45 -45
45 -24 0 -13 -41 19 -71 18 -16 35 -29 39 -29 4 0 10 -33 13 -72 4 -40 9 -95
12 -123 4 -48 4 -49 -12 -27 -19 26 -54 30 -54 6 0 -9 16 -31 36 -49 l36 -33
4 -158 5 -159 -25 63 c-20 49 -23 68 -16 88 14 37 12 64 -5 64 -9 0 -12 6 -8
16 4 10 -1 17 -14 20 -15 4 -19 12 -15 30 5 30 -25 45 -42 21 -7 -8 -21 -15
-32 -14 -13 1 -19 -4 -19 -19 0 -11 -6 -28 -14 -37 -19 -23 -7 -50 19 -42 11
4 20 2 20 -4 0 -19 29 -12 40 9 13 25 50 27 50 3 0 -15 2 -16 10 -3 8 12 10
11 10 -7 0 -33 -17 -37 -36 -8 -9 14 -19 23 -22 21 -2 -3 2 -16 10 -28 28 -44
28 -55 2 -50 -18 3 -24 0 -24 -14 0 -15 -2 -16 -9 -5 -5 8 -21 16 -35 18 -21
3 -27 -2 -32 -23 -4 -15 -2 -35 5 -46 9 -14 9 -24 -1 -41 -6 -12 -22 -51 -34
-86 l-22 -64 -7 59 c-3 33 -10 77 -14 99 -6 33 -3 48 16 82 14 23 23 50 21 60
-6 30 -32 20 -44 -17 -9 -28 -12 -31 -17 -15 -16 56 -18 89 -7 115 12 29 19
33 76 45 32 6 74 38 74 56 0 20 -31 20 -70 0 -22 -11 -40 -18 -40 -16 0 3 12
23 26 44 25 39 26 39 45 20 23 -23 42 -24 64 -3 10 11 14 25 11 40 -5 18 -2
24 9 24 8 0 21 11 27 25 9 21 8 28 -7 45 -10 11 -27 20 -37 20 -11 0 -26 7
-34 15 -9 8 -29 15 -46 15 -28 0 -30 -2 -26 -29 3 -22 0 -31 -14 -34 -41 -11
-40 -82 2 -89 19 -3 19 -4 -3 -38 l-22 -34 -8 41 c-10 51 -29 70 -48 47 -10
-13 -10 -24 1 -62 22 -72 17 -152 -7 -128 -5 4 -10 62 -12 128 l-3 120 36 30
c20 16 36 36 36 44 0 21 -29 17 -51 -8 l-19 -23 7 30 c4 17 8 44 7 62 -1 35
-30 87 -44 78 -17 -10 -11 -51 10 -78 18 -23 19 -32 10 -94 -5 -37 -10 -88
-11 -113 l-1 -45 -14 50 c-23 84 -54 274 -54 337 0 52 3 62 26 81 48 40 64 57
64 67 0 17 -26 11 -45 -10 -25 -28 -29 -19 -11 23 15 38 9 88 -11 94 -17 6
-26 -34 -12 -58 9 -17 8 -35 -2 -77 -16 -68 -27 -48 -28 50 -1 44 -5 68 -13
71 -9 3 -12 27 -11 80 2 82 -8 98 -27 42z m460 -259 c0 -8 -13 -21 -30 -30
-16 -8 -30 -10 -30 -5 0 5 4 9 9 9 5 0 13 9 16 20 7 23 35 27 35 6z m-580 -23
c-1 -16 -7 -39 -15 -53 -13 -24 -14 -24 -15 -4 0 35 12 84 21 84 5 0 9 -12 9
-27z m506 -4 c9 -16 -12 -33 -31 -25 -14 5 -15 9 -5 21 15 18 26 19 36 4z m79
-29 c0 -22 -29 -18 -33 3 -3 14 1 18 15 15 10 -2 18 -10 18 -18z m-642 -160
c-9 -10 -53 51 -53 73 0 17 6 13 29 -23 16 -25 26 -47 24 -50z m56 24 c-31
-34 -34 -23 -8 28 21 38 24 40 27 20 2 -15 -5 -33 -19 -48z m731 21 c0 -8 -9
-15 -20 -15 -20 0 -26 11 -13 23 12 13 33 7 33 -8z m-618 -44 c-1 -19 -4 -37
-7 -39 -9 -10 -60 16 -63 33 -3 15 2 17 32 13 20 -2 36 0 36 4 0 4 -9 8 -20 8
-11 0 -20 5 -20 11 0 6 10 9 23 7 19 -3 22 -8 19 -37z m548 24 c0 -8 -9 -15
-20 -15 -20 0 -26 11 -13 23 12 13 33 7 33 -8z m-640 -84 c0 -19 -39 -75 -47
-67 -5 5 35 86 42 86 3 0 5 -8 5 -19z m421 -41 c10 -6 19 -20 19 -32 0 -21 1
-21 14 -3 15 20 43 15 52 -10 7 -18 -12 -45 -33 -45 -8 0 -22 13 -31 30 -18
31 -36 42 -26 15 9 -23 -4 -18 -22 10 -8 13 -13 29 -9 35 8 13 12 13 36 0z
m-406 -83 c-11 -41 -38 -97 -46 -97 -5 0 -7 6 -4 13 30 97 38 116 46 111 6 -3
7 -15 4 -27z m379 4 c-19 -4 -19 -4 1 -11 19 -7 19 -7 -4 -19 -28 -15 -51 -8
-51 17 0 31 19 42 48 29 23 -11 24 -12 6 -16z m-462 -94 c16 -30 4 -29 -40 3
-31 22 -42 37 -42 57 l0 27 36 -35 c20 -18 40 -42 46 -52z m532 61 c13 -21 0
-48 -23 -48 -25 0 -34 15 -27 45 7 26 34 28 50 3z m-148 -76 c3 -24 4 -45 1
-48 -8 -9 -36 86 -30 102 8 23 21 0 29 -54z m254 -15 c0 -5 -9 -2 -20 8 -11
10 -20 25 -20 34 1 12 5 10 20 -8 11 -13 20 -28 20 -34z m-526 12 c3 -17 6
-43 5 -58 -1 -22 -3 -20 -14 14 -8 22 -14 48 -14 58 -2 29 16 19 23 -14z m386
-28 c0 -11 -88 -46 -96 -38 -7 6 64 46 84 47 6 0 12 -4 12 -9z m62 -71 c-11
-17 -10 -20 8 -20 11 0 20 -4 20 -10 0 -14 -23 -13 -38 2 -7 7 -12 9 -12 5 0
-4 -9 -3 -20 3 -11 6 -20 18 -20 28 1 14 4 13 20 -7 l20 -23 0 24 c0 30 10 42
24 28 7 -7 7 -17 -2 -30z m-459 -58 c-1 -31 -6 -68 -12 -82 l-10 -25 -1 25
c-1 14 -4 43 -5 65 -2 22 -1 53 2 68 9 50 28 12 26 -51z m195 -19 c4 -54 3
-57 -11 -37 -16 21 -21 49 -19 94 3 46 25 4 30 -57z m211 -116 c1 28 19 39 27
18 4 -9 0 -24 -10 -33 -15 -15 -17 -15 -32 0 -11 11 -14 23 -9 35 7 15 9 13
15 -12 6 -23 8 -25 9 -8z"/>
<path d="M1328 1425 c-10 -22 -9 -32 7 -61 16 -30 17 -39 6 -56 -7 -11 -10
-22 -8 -25 3 -3 10 4 16 15 6 11 25 23 43 27 68 14 105 65 61 82 -10 4 -22 12
-28 19 -5 7 -27 16 -47 19 -34 6 -39 5 -50 -20z m42 11 c0 -2 -6 -18 -14 -36
-10 -25 -14 -29 -19 -15 -8 18 8 55 23 55 6 0 10 -2 10 -4z m44 -28 c4 -16 -2
-30 -19 -48 l-25 -25 0 36 c0 52 32 80 44 37z m46 -29 c0 -9 -40 -39 -54 -39
-5 0 -2 8 7 18 10 10 17 24 17 30 0 6 7 9 15 6 8 -4 15 -10 15 -15z"/>
<path d="M1140 1320 c-54 -14 -70 -23 -75 -41 -9 -28 10 -55 54 -76 28 -13 45
-31 61 -63 l23 -45 13 30 c14 33 18 68 7 78 -10 11 -33 -14 -34 -37 0 -20 -1
-20 -8 -1 -5 12 -1 35 11 63 32 71 10 108 -52 92z m49 -47 c-1 -27 -3 -31 -6
-13 -2 14 -12 31 -21 38 -14 11 -13 12 6 12 19 0 22 -5 21 -37z m-38 17 c19
-11 25 -46 11 -65 -13 -18 -38 -16 -60 5 -23 21 -30 50 -12 50 6 0 10 -6 10
-13 0 -8 9 -22 20 -32 11 -10 20 -13 20 -8 0 6 -7 16 -15 23 -17 14 -20 50 -4
50 6 0 19 -5 30 -10z"/>
<path d="M692 1198 c-7 -7 -12 -27 -12 -45 0 -30 -3 -33 -28 -33 -16 0 -36 -6
-47 -13 -16 -13 -17 -16 -3 -43 11 -22 12 -34 4 -47 -17 -26 21 -89 59 -101
17 -5 40 -13 51 -18 12 -6 41 -8 65 -6 l44 3 16 -61 c22 -80 34 -175 19 -152
-13 20 -79 62 -87 55 -3 -3 -8 -26 -10 -51 -7 -62 14 -92 72 -107 49 -12 51
-16 60 -104 3 -33 8 -78 11 -100 l5 -40 -19 31 c-23 36 -69 74 -88 74 -10 0
-14 -16 -14 -60 0 -68 15 -89 79 -108 l38 -12 7 -99 c4 -55 4 -111 0 -125 -4
-18 -2 -26 6 -26 10 0 12 45 8 201 l-5 200 44 36 c42 34 43 37 43 94 0 32 -5
61 -11 65 -13 8 -79 -54 -79 -75 0 -38 -13 6 -25 89 -15 102 -14 109 36 154
30 28 31 33 26 84 -3 30 -8 56 -11 59 -11 11 -49 -22 -65 -58 l-18 -39 -12 40
c-12 40 -11 41 24 74 19 18 35 40 35 49 0 8 7 28 15 43 8 16 15 37 15 47 0 26
-18 57 -33 57 -7 0 -19 16 -26 35 -7 19 -16 35 -20 35 -5 0 -25 -11 -45 -25
-20 -13 -36 -20 -36 -15 0 9 -58 50 -70 50 -4 0 -11 -5 -18 -12z m59 -37 c35
-35 38 -75 7 -92 -18 -10 -24 -8 -39 12 -20 26 -26 109 -8 109 6 0 24 -13 40
-29z m119 -28 c0 -12 -11 -33 -24 -47 -20 -19 -28 -22 -40 -13 -8 7 -14 21
-11 32 2 11 4 25 4 32 1 7 13 19 28 27 31 16 43 7 43 -31z m50 -56 c0 -44 -11
-57 -45 -53 -43 5 -44 32 -3 66 39 33 48 30 48 -13z m-212 -7 c12 -16 22 -32
22 -35 0 -3 -20 -5 -44 -5 -35 0 -48 5 -60 22 -26 36 -20 48 22 48 31 0 43 -6
60 -30z m20 -72 c2 -8 -4 -21 -13 -28 -8 -7 -15 -19 -15 -26 0 -23 -37 -16
-59 12 -36 46 -28 59 32 58 38 0 53 -4 55 -16z m155 2 c33 -31 -60 -94 -130
-88 -47 4 -51 19 -14 57 17 18 31 36 31 42 0 12 99 2 113 -11z m61 -141 c5
-31 2 -42 -20 -68 -33 -39 -40 -34 -20 13 21 51 9 45 -14 -6 -22 -48 -25 -42
-9 17 9 33 47 91 54 82 1 -1 5 -18 9 -38z m-92 -194 c6 -11 12 -34 14 -52 2
-31 1 -31 -24 -20 -50 20 -62 37 -62 84 l0 44 31 -18 c17 -10 36 -27 41 -38z
m111 -202 c-27 -22 -28 -22 -37 -4 -12 27 -1 64 31 102 l28 33 3 -54 c3 -50 1
-57 -25 -77z m-72 -125 c27 -53 14 -69 -36 -45 -40 19 -57 53 -49 97 l6 30 29
-21 c16 -11 39 -39 50 -61z"/>
<path d="M840 353 c0 -5 14 -22 31 -39 23 -21 29 -23 21 -9 -13 25 -52 62 -52
48z"/>
<path d="M2218 1169 c-10 -5 -18 -18 -18 -27 0 -13 -2 -14 -9 -4 -5 8 -21 12
-37 10 -25 -3 -29 -7 -29 -35 0 -25 -4 -33 -18 -33 -22 0 -34 -27 -20 -49 7
-11 7 -21 0 -32 -14 -23 -2 -49 23 -49 16 0 20 -5 16 -17 -8 -27 9 -47 33 -40
20 5 21 2 15 -31 -9 -52 -19 -58 -34 -23 -16 39 -26 39 -33 1 -7 -35 -1 -57
24 -85 15 -17 16 -30 9 -95 -5 -41 -9 -109 -10 -150 0 -90 -10 -113 -34 -79
-18 26 -20 39 -7 39 5 0 13 -9 16 -21 4 -11 9 -18 12 -16 7 8 -26 67 -37 67
-23 0 -10 -62 18 -88 27 -25 28 -32 30 -117 2 -115 21 -277 34 -290 7 -7 9 6
4 38 -16 131 -28 342 -22 422 5 79 9 92 32 114 25 22 54 78 54 101 0 18 -23
11 -52 -17 l-27 -26 5 39 c13 91 37 210 45 219 5 5 9 22 9 37 0 15 5 28 11 28
5 0 7 5 4 10 -4 6 -16 -4 -29 -22 -24 -36 -56 -49 -56 -24 0 9 12 30 28 47 22
25 32 29 55 24 22 -6 27 -13 27 -39 0 -17 -3 -41 -6 -54 -5 -18 -9 -20 -20
-11 -11 9 -14 8 -14 -5 0 -9 8 -16 20 -16 11 0 20 7 20 15 0 14 3 14 25 -1 31
-20 48 -10 43 26 -4 26 -2 28 27 23 43 -7 65 19 40 47 -10 11 -25 20 -34 20
-9 1 -1 7 17 15 28 12 33 19 30 42 -2 20 -9 29 -25 31 -13 2 -23 12 -25 24 -4
29 -33 46 -55 32 -13 -8 -21 -6 -37 13 -17 17 -25 20 -38 12z m30 -21 c7 -7
12 -23 12 -36 0 -15 4 -21 12 -16 7 5 9 2 5 -9 -10 -26 15 -38 50 -25 32 12
63 6 63 -12 0 -12 -42 -30 -71 -30 -11 0 -30 9 -42 21 -16 14 -30 19 -50 15
-33 -7 -69 8 -86 36 -11 17 -10 23 3 36 14 14 17 14 36 -3 11 -10 18 -25 16
-32 -3 -7 -1 -13 4 -13 6 0 10 11 10 24 0 29 9 56 19 56 4 0 12 -5 19 -12z
m72 -63 c-26 -28 -32 -26 -36 10 -3 32 25 50 45 30 13 -13 12 -18 -9 -40z
m-154 -32 l39 -17 -45 -6 c-47 -6 -78 8 -66 29 10 15 27 14 72 -6z m3 -58
c-25 -26 -84 -36 -77 -12 6 16 47 37 77 37 l23 0 -23 -25z m136 5 c-3 -6 1 -7
10 -4 16 6 65 -20 65 -35 0 -15 -31 -21 -51 -10 -11 5 -18 13 -15 17 2 4 -4 8
-15 8 -22 0 -23 -3 -4 -36 16 -28 19 -50 8 -50 -20 1 -34 20 -40 54 -4 29 -2
40 13 51 22 17 38 19 29 5z m-155 -224 c0 -15 -3 -16 -15 -6 -8 7 -15 27 -15
44 l1 31 14 -25 c8 -14 14 -33 15 -44z m60 -120 c0 -16 -50 -80 -57 -73 -6 7
14 53 32 70 20 21 25 21 25 3z"/>
<path d="M1371 1122 c-11 -21 -5 -56 17 -89 9 -15 11 -34 7 -55 l-6 -33 20 33
c11 17 29 32 39 32 29 0 62 29 62 56 0 17 -5 24 -20 24 -11 0 -20 6 -20 14 0
21 -24 38 -37 25 -8 -8 -13 -8 -17 0 -11 17 -34 13 -45 -7z m39 -44 c-1 -40
-2 -42 -15 -24 -20 26 -19 66 0 66 11 0 15 -11 15 -42z m50 10 c0 -12 -7 -30
-17 -40 -9 -10 -11 -18 -5 -18 6 0 19 11 28 26 13 18 20 22 28 14 14 -14 -29
-52 -53 -48 -20 4 -26 50 -11 78 13 24 30 18 30 -12z"/>
<path d="M1999 963 c-7 -16 -12 -68 -13 -117 -1 -56 -5 -91 -12 -93 -13 -4
-44 66 -44 97 0 39 18 19 34 -37 l16 -58 -6 50 c-11 90 -46 116 -52 39 -2 -29
4 -50 22 -77 14 -20 30 -52 35 -70 5 -17 10 -24 10 -15 1 10 24 43 51 73 31
34 50 64 50 80 0 51 -35 36 -68 -30 l-20 -40 2 92 c1 62 6 97 15 105 11 11 12
4 8 -42 -2 -30 -8 -64 -12 -75 -6 -19 -6 -19 9 -1 16 20 32 118 21 135 -12 20
-35 11 -46 -16z m81 -127 c0 -15 -70 -110 -76 -103 -2 2 10 29 27 60 29 55 49
72 49 43z"/>
<path d="M2602 946 c-23 -25 -43 -55 -46 -68 -19 -99 -29 -136 -41 -158 -8
-14 -14 -19 -15 -12 0 6 -6 12 -14 12 -20 0 -29 34 -21 76 9 48 23 42 30 -13
9 -67 13 -75 14 -27 2 79 -37 139 -53 82 -11 -44 -6 -94 16 -134 20 -38 20
-43 6 -79 l-15 -38 -7 62 c-8 70 -25 78 -40 18 -6 -25 -5 -53 4 -91 12 -50 11
-64 -11 -156 -23 -94 -25 -98 -36 -73 -14 33 -7 69 19 102 20 26 24 61 8 61
-12 0 -25 -29 -35 -75 -6 -27 -8 -28 -17 -11 -16 28 -3 92 26 127 26 30 34 59
18 59 -15 0 -39 -33 -48 -65 -8 -29 -8 -29 -12 14 -3 35 1 49 21 70 27 29 41
61 27 61 -13 0 -40 -30 -40 -45 0 -7 -9 -23 -20 -36 -15 -18 -19 -20 -20 -8 0
16 -32 59 -44 59 -16 0 -3 -42 19 -62 24 -21 38 -53 49 -115 7 -41 1 -42 -19
-3 -15 29 -52 57 -62 47 -11 -12 10 -48 37 -62 29 -15 62 -61 75 -105 7 -22 3
-20 -38 18 -48 43 -67 52 -67 29 0 -18 32 -47 51 -47 8 0 29 -15 47 -33 30
-30 31 -36 24 -77 l-8 -45 -8 32 c-10 41 -63 116 -78 107 -6 -4 -8 -25 -4 -58
5 -43 12 -57 45 -87 l40 -37 -6 -76 c-4 -54 -3 -76 6 -76 7 0 11 25 11 74 0
85 10 166 20 166 9 0 40 -128 41 -171 1 -19 4 -45 8 -59 5 -14 8 36 7 111 -1
117 2 140 17 156 10 12 17 35 17 59 l-1 39 -19 -23 c-12 -15 -20 -38 -19 -60
0 -21 -4 -50 -8 -66 l-9 -29 -17 45 c-25 65 -8 114 51 147 47 25 102 92 102
123 0 31 -22 20 -83 -39 l-58 -58 23 65 c18 51 30 69 57 85 65 39 110 88 117
128 4 22 2 37 -3 37 -15 0 -103 -80 -103 -93 0 -6 14 2 30 18 30 29 60 41 60
25 0 -13 -51 -70 -63 -70 -6 0 0 11 13 25 13 14 21 27 18 30 -7 8 -39 -31 -42
-52 -2 -10 -11 -20 -21 -21 -11 -3 -15 0 -10 7 3 7 8 25 10 41 5 35 35 98 81
165 30 44 71 161 61 172 -2 2 -23 -17 -45 -41z m0 -80 c-24 -54 -39 -63 -17
-10 21 50 18 56 -6 14 -15 -26 -18 -29 -13 -10 11 39 36 72 46 62 6 -6 2 -27
-10 -56z m-152 -266 c-1 -42 -2 -44 -15 -26 -16 21 -19 53 -9 81 11 27 24 -3
24 -55z m80 -120 c-14 -26 -69 -70 -88 -70 -11 0 0 17 33 50 47 47 75 58 55
20z m-230 -180 c0 17 35 -34 44 -66 5 -15 2 -21 -10 -21 -19 0 -39 30 -48 72
-5 22 -4 26 4 15 9 -13 10 -13 10 0z"/>
<path d="M463 972 c-5 -4 -17 -21 -26 -38 -16 -31 -20 -50 -31 -157 l-6 -48
39 73 c52 99 66 197 24 170z"/>
<path d="M327 873 c-12 -11 -7 -77 9 -118 9 -22 24 -62 34 -89 15 -41 19 -45
25 -27 3 11 29 40 57 63 53 45 78 83 78 118 0 39 -33 17 -77 -50 -24 -36 -47
-66 -52 -68 -11 -4 -18 16 -27 83 -11 81 -26 109 -47 88z"/>
<path d="M1165 790 c-6 -19 3 -59 27 -123 l11 -28 23 22 c13 12 27 20 30 16 4
-4 -8 -20 -26 -37 -36 -34 -27 -41 14 -9 15 12 26 30 26 45 0 29 -4 30 -41 3
-40 -29 -36 -9 6 28 23 21 35 40 35 57 0 32 -23 34 -44 5 -14 -21 -14 -21 -18
7 -4 35 -33 45 -43 14z m34 -53 c0 -33 -2 -38 -9 -22 -12 28 -12 78 0 70 6 -3
10 -25 9 -48z m52 10 c-10 -24 -28 -43 -36 -35 -2 2 5 19 16 37 23 38 34 37
20 -2z"/>
<path d="M620 761 c-34 -8 -80 -41 -80 -56 0 -10 47 -35 66 -35 1 0 0 9 -3 20
-4 15 -9 18 -18 10 -9 -8 -14 -6 -19 5 -3 9 -2 14 2 11 4 -2 14 -1 22 4 12 7
20 -12 42 -102 15 -61 26 -113 24 -115 -2 -2 -18 20 -37 49 -38 59 -53 66 -57
27 -2 -20 11 -44 52 -95 34 -42 56 -79 56 -94 0 -14 3 -49 7 -79 8 -65 -11
-64 -22 2 -12 67 -35 118 -54 115 -36 -7 -20 -84 34 -168 l36 -55 -3 -98 c-2
-53 -1 -97 3 -97 10 0 19 85 19 187 0 90 2 97 40 169 40 75 46 98 34 128 -17
45 -56 -8 -73 -98 -7 -37 -8 -33 -16 48 -7 80 -5 93 14 133 23 49 29 127 9
121 -7 -3 -20 -26 -29 -52 l-16 -48 -11 43 c-9 37 -8 44 8 58 11 9 22 28 26
44 7 29 -2 32 -56 18z m30 -21 c-15 -12 -18 -18 -7 -14 10 4 17 1 17 -6 0 -6
-4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 10 -10 15 0 13 30
40 43 40 7 0 1 -9 -13 -20z m44 -125 c-9 -38 -22 -39 -19 -2 6 66 5 63 16 45
5 -10 7 -29 3 -43z m-80 -76 c15 -22 25 -46 23 -52 -4 -13 -57 61 -57 80 0 20
5 16 34 -28z m136 -87 c0 -25 -33 -92 -45 -92 -3 0 -5 9 -5 21 0 13 4 18 12
13 8 -5 9 -2 4 11 -8 22 12 87 25 80 5 -4 9 -18 9 -33z m-115 -104 c8 -28 12
-54 9 -57 -11 -11 -32 30 -26 51 3 12 1 19 -4 16 -5 -4 -9 7 -10 23 -2 42 13
26 31 -33z"/>
<path d="M280 745 c-21 -26 -6 -90 33 -137 20 -24 41 -57 47 -73 l12 -30 13
25 c7 14 36 45 64 68 40 34 51 50 51 72 0 40 -15 32 -74 -40 -28 -33 -52 -60
-55 -60 -3 0 -19 41 -36 91 -16 50 -33 93 -36 95 -4 2 -12 -3 -19 -11z"/>
<path d="M2309 723 c-11 -29 -5 -73 10 -73 11 0 21 35 21 73 0 35 -17 35 -31
0z"/>
<path d="M2752 678 c-7 -7 -12 -28 -12 -47 0 -20 -5 -43 -10 -51 -8 -13 -10
-12 -10 3 0 24 -21 22 -27 -3 -3 -11 -12 -20 -20 -20 -17 0 -12 -22 7 -28 8
-3 10 0 5 8 -5 8 -4 11 3 6 6 -3 9 -20 7 -37 -5 -35 -15 -52 -15 -26 0 19 -25
23 -35 7 -4 -6 0 -22 9 -35 15 -22 15 -28 0 -65 -18 -44 -25 -48 -45 -24 -12
15 -11 16 9 9 21 -6 23 -5 13 13 -6 12 -11 25 -11 31 0 18 18 12 23 -6 3 -13
5 -14 6 -3 1 23 -15 43 -29 35 -6 -4 -10 -18 -7 -31 3 -16 0 -24 -9 -24 -24 0
-15 -30 11 -42 15 -7 25 -19 25 -32 -1 -19 -2 -19 -11 -4 -5 10 -17 18 -24 18
-22 0 -18 -34 5 -55 11 -10 21 -28 21 -39 1 -17 2 -18 6 -3 2 9 9 17 14 17 6
0 8 8 5 18 -4 12 1 26 14 37 24 22 27 9 3 -17 -10 -12 -12 -18 -4 -18 7 0 9
-4 6 -10 -3 -5 1 -10 10 -10 12 0 15 5 11 16 -3 8 -1 24 4 35 13 24 -12 38
-35 19 -12 -10 -15 -9 -15 4 0 8 11 18 25 22 32 8 52 31 37 46 -5 5 -16 7 -22
3 -9 -6 -9 -9 0 -15 9 -6 6 -11 -11 -20 -19 -10 -22 -10 -12 0 6 7 9 19 6 27
-7 17 26 55 39 47 6 -4 5 -10 -3 -16 -11 -8 -11 -9 1 -5 8 2 15 11 15 19 0 8
6 23 14 32 11 13 11 17 -2 22 -9 3 -21 2 -28 -2 -7 -4 -10 -2 -7 7 3 8 18 16
34 19 16 3 29 10 29 17 0 6 3 15 8 19 16 17 7 35 -15 29 -22 -6 -22 -5 3 17
14 13 34 28 43 33 10 6 18 19 19 30 2 15 -3 19 -20 18 -13 -2 -23 2 -23 7 0
14 -13 13 -28 -2z"/>
<path d="M240 601 c0 -39 21 -77 70 -123 36 -33 50 -54 51 -75 l1 -28 9 30 c4
17 33 55 64 85 51 51 67 82 47 94 -10 6 -47 -32 -81 -81 -21 -31 -51 -45 -51
-24 0 5 -17 38 -39 72 -39 65 -71 88 -71 50z"/>
<path d="M89 553 c-6 -7 -18 -13 -25 -13 -9 0 -14 -11 -14 -30 0 -23 7 -35 33
-50 17 -11 35 -21 38 -22 4 -2 9 -39 13 -83 l6 -80 -22 42 c-12 24 -26 43 -30
43 -4 0 -8 -21 -8 -46 0 -38 5 -50 31 -73 l31 -29 -7 -103 c-6 -79 -4 -101 4
-93 8 7 12 59 13 158 l0 148 29 33 c28 32 35 58 23 89 -10 27 -23 7 -17 -27 4
-25 0 -37 -17 -52 l-22 -20 16 39 c21 50 20 57 -4 26 l-20 -25 0 31 c0 17 9
41 20 55 14 15 20 34 18 53 -3 27 -8 32 -41 37 -25 4 -41 2 -48 -8z m47 -38
c3 -13 1 -32 -4 -42 -10 -16 -12 -14 -25 16 -8 19 -13 41 -10 47 7 19 32 5 39
-21z m31 19 c3 -8 1 -25 -5 -37 l-11 -22 0 22 c-1 12 -4 28 -7 37 -3 9 -1 16
5 16 7 0 14 -7 18 -16z m-80 -34 c6 -16 7 -30 2 -30 -9 0 -29 33 -29 49 0 22
16 10 27 -19z m43 -242 c1 -18 -18 -6 -28 17 -20 43 -13 63 8 25 11 -19 19
-38 20 -42z"/>
<path d="M2846 518 c-16 -23 -22 -68 -8 -68 4 -1 17 -9 29 -19 20 -17 21 -21
9 -62 l-13 -43 -14 29 c-10 21 -21 30 -39 30 -21 0 -26 -5 -28 -32 -2 -23 5
-40 27 -65 l30 -35 -6 -121 c-5 -96 -3 -122 7 -122 9 0 11 9 7 29 -4 16 -3 53
0 81 5 47 9 53 43 70 21 11 40 26 44 35 10 28 7 55 -8 61 -17 7 -56 -12 -56
-28 0 -7 5 -7 14 2 9 7 21 8 30 3 14 -8 14 -11 0 -31 -8 -12 -23 -26 -32 -31
-15 -8 -18 -4 -19 32 -1 23 8 70 18 104 l20 62 35 -6 c27 -4 38 -1 49 13 20
27 18 40 -3 21 -21 -19 -32 -13 -32 16 0 17 2 18 17 6 15 -12 16 -12 10 5 -6
16 -5 17 8 6 11 -10 15 -10 15 0 0 6 -9 14 -19 17 -11 3 -21 13 -24 23 -2 10
-17 19 -33 22 -16 3 -36 8 -45 12 -12 5 -22 0 -33 -16z m54 -34 c0 -2 -10 -8
-21 -15 -17 -8 -23 -8 -30 2 -4 7 -6 16 -4 20 4 6 55 0 55 -7z m38 -51 l3 -33
-30 18 c-43 24 -40 56 4 50 15 -2 21 -12 23 -35z m-98 -126 c0 6 -5 24 -10 40
-9 26 -9 27 5 9 28 -36 12 -92 -17 -59 -20 24 -30 52 -21 66 4 7 14 -5 25 -28
9 -22 18 -35 18 -28z"/>
<path d="M240 465 c0 -22 28 -62 87 -123 13 -12 25 -33 28 -45 2 -12 6 -31 8
-42 3 -11 5 -3 6 17 1 30 11 49 51 93 48 53 70 98 55 113 -9 9 -61 -52 -87
-102 l-20 -40 -17 30 c-30 55 -85 124 -98 124 -7 0 -13 -11 -13 -25z"/>
<path d="M1860 374 c0 -40 48 -114 74 -114 5 0 -2 12 -16 28 -30 32 -48 64
-48 88 0 26 27 -1 56 -55 20 -38 23 -41 18 -16 -8 37 -50 95 -70 95 -8 0 -14
-10 -14 -26z"/>
<path d="M230 338 c0 -27 11 -42 62 -90 34 -31 67 -70 74 -85 l12 -28 1 31 c1
21 12 40 37 65 42 40 68 92 59 120 -10 32 -28 18 -65 -54 -19 -37 -38 -67 -42
-67 -4 0 -30 32 -59 70 -57 77 -79 88 -79 38z"/>
<path d="M2015 247 c-8 -13 -17 -39 -20 -58 -5 -28 -2 -25 15 19 12 28 26 52
31 52 15 0 10 -24 -16 -75 -13 -27 -23 -51 -21 -53 9 -8 56 86 56 111 0 34
-24 36 -45 4z"/>
<path d="M2560 239 c0 -11 14 -33 30 -47 18 -16 30 -36 30 -51 l0 -25 -28 27
c-33 31 -47 34 -57 10 -7 -20 35 -63 61 -63 10 0 14 -12 14 -40 0 -22 3 -40 8
-40 4 0 6 18 4 40 -3 31 -1 40 11 40 28 0 66 23 73 43 10 31 -10 41 -45 23
-24 -13 -31 -14 -31 -3 0 7 16 19 35 26 36 13 46 37 20 47 -8 4 -22 0 -31 -7
-14 -12 -19 -10 -38 14 -26 33 -56 36 -56 6z m45 -19 c16 -30 9 -40 -13 -18
-12 12 -17 48 -7 48 2 0 11 -13 20 -30z m-20 -90 c10 -11 16 -22 14 -25 -7 -6
-49 24 -49 36 0 15 16 10 35 -11z m105 10 c0 -13 -49 -44 -57 -36 -9 8 27 46
44 46 7 0 13 -4 13 -10z"/>
<path d="M234 225 c-11 -27 13 -63 63 -98 67 -46 83 -64 83 -92 0 -14 5 -25
11 -25 7 0 8 13 4 38 -7 42 -11 36 93 122 25 21 29 55 7 64 -22 8 -93 -60
-103 -98 l-8 -31 -54 59 c-65 69 -88 84 -96 61z"/>
<path d="M27 44 c-14 -14 -6 -24 19 -24 16 0 24 5 22 13 -5 14 -31 21 -41 11z"/>
</g>
</svg>
</>
      )}
      </div>
    </div>
  );
}

export default App;
