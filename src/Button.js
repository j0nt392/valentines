import { useState } from "react";

export default function Button({ name, setShowVideo1, setShowVideo2, setShowTickets, setShowButtons }) {
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState({
    top: 0,
    left: 0,
    position: "",
    opacity: 1,
  });
  // const [videoStyle, setVideoStyle] = useState({ opacity: 0 });
  // const [videoStyle2, setVideoStyle2] = useState({ opacity: 0 });
  const [buttonOpacity, setButtonOpacity] = useState({ opacity: 2 });

  const handle_click = (choice) => {
    if (choice === "no") {
      setCount((prevCount) => prevCount + 1);
      setButtonOpacity((prevOpacity) => ({
        opacity: Math.max(prevOpacity.opacity - 0.1, 0),
      }));
      const randomTop = Math.floor(Math.random() * 700) + 1;
      const randomLeft = Math.floor(Math.random() * 300) + 1;
      setStyle({ top: randomTop, left: randomLeft, position: "absolute" });

      //setStyle({top: randomTop, left: randomLeft, position: 'absolute' });
      if (count >= 5 && count <= 10) {
        setShowVideo1(true);
        // setVideoStyle2({ opacity: 1 });
      } else if (count >= 10 && count <= 15) {
        setShowVideo1(false);
        setShowVideo2(true);
      }
    } else if (choice === "yes") {
      setShowVideo1(false);
      setShowVideo2(false);
      setShowTickets(true);
      setShowButtons(false);
      console.log("gmm");
    }
  };

  const buttonStyle = {
    position: `${style.position}`,
    top: `${style.top}px`,
    left: `${style.left}px`,
    opacity: buttonOpacity.opacity,
  };

  const buttonClassName =
    "z-10 bg-pink-400 w-20 rounded-full p-2 shadow-lg hover:shadow-2xl font-sans";

  return (
    <>
      <button
        className={buttonClassName}
        style={buttonStyle}
        onClick={() => handle_click(name)}
      >
        {name}
      </button>
    </>
  );
}
