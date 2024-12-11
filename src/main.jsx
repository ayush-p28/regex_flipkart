import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/output.css'
import Navbar from './components/Navbar'
import Drop from './components/Dropbox'
import Compare from './components/Compare'
import Temp2 from "/images/base64.jpg";
import Temp1 from "/images/clinic_plus.jpg";


createRoot(document.getElementById('head')).render(
  <StrictMode>
    <Navbar />
    {/* <Drop /> */}
  </StrictMode>,
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar /> */}
    <Drop />
  </StrictMode>,
)
createRoot(document.getElementById('temp')).render(
  <StrictMode>
    <Compare uploadedImage1={Temp1} uploadedImage2={Temp2} uploadedImage3={true} />
  </StrictMode>,
)

