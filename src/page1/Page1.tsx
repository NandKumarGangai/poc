import { useEffect, useState } from 'react';
import './page1.css'

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
      <div className="wrapper">
        <div className="content_wrapper">{'Content Page 1 - '}</div>
        <div className="image_wrapper">Image</div>
      </div>
    </>
  )
}

export default App
