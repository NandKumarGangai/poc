import { useNavigate, useOutlet } from "react-router-dom"
import Page1 from "./page1/Page1";

const MyRoutes = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

  return (
    <div>
      <ol>
        <li onClick={() => { navigate('page1') }}>With different aspect ratio</li>
        <li onClick={() => { navigate('page2') }}>With same aspect ratio (16:9/16:9) from desktop view</li>
        <li onClick={() => { navigate('page3') }}>With width and safe height</li>
      </ol>
      {
        outlet ? outlet : <Page1 />
      }
    </div>
  )
}

export default MyRoutes