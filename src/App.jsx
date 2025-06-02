import './App.css'
import { Outlet } from 'react-router-dom';
import MobileOnly from './components/MobileOnly/MobileOnly';

function App() {

  return (
    <>
      
      <section className="relative z-10 max-h-screen">
        
          <video autoPlay muted loop id="background-video">
            <source src="/video/background-galaxy.mp4" type="video/mp4" />
          </video><MobileOnly>
          <Outlet />
        </MobileOnly>
      </section>
    </>
  )
}

export default App;
