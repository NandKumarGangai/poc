import { useEffect, useState } from 'react';
import './page3.css'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function Page3() {
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
      <div style={{ padding: '2rem', textAlign: 'center'}}>
        Dimentions: {JSON.stringify(windowDimensions)}
      </div>
      <div className="p3_wrapper">
        <div className="p3_content_wrapper">{'Content Page 3 - '}</div>
        <div className="p3_image_wrapper">Image</div>
      </div>
    </>
  )
}

export default Page3
