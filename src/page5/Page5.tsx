import { useEffect, useState } from 'react';
import './page5.css'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        Dimentions: {JSON.stringify(windowDimensions)}
      </div>
      <div className="p5_wrapper">
        <div className="p5_content_wrapper">{'Content Page 5 - '}</div>
        <div className="p5_image_wrapper">Image</div>
      </div>

      <div style={{ width: '100%', aspectRatio: '5/2'}}></div>
    </>
  )
}

export default App
