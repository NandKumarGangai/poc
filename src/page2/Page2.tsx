import { useEffect, useState } from 'react';
import './page2.css'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function Page2() {
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
      <div className="p2_wrapper">
        <div className="p2_content_wrapper">{'Content Page 2 - '}</div>
        <div className="p2_image_wrapper">Image</div>
      </div>
    </>
  )
}

export default Page2
