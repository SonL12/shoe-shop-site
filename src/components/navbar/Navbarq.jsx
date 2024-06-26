import {useState} from 'react'
import "./navbar.css"
import * as Unicons from '@iconscout/react-unicons';

const Navbarq = () => {
  const [icon, setIcon] = useState("#Home")
  return <nav>
    <div className="containernav">
      <div className="navMenuRight">
        <a href="#Home" onClick ={() => setIcon("#Home")}className={icon === "#Home" ? "iconActive": ""}>
        {/* <i class="uil uil-airplay iconNavbar"></i> */}
        <Unicons.UilAirplay className="iconNavbar"/>
        <span className='textNavbar'>Home</span>
        </a>
        <a href="#about"onClick ={() => setIcon("#about")}className={icon === "#about" ? "iconActive": ""}>
        {/* <i class="uil uil-user iconNavbar"></i> */}
        <Unicons.UilUser className="iconNavbar"/>
        <span className='textNavbar'>About</span>
        </a>
        <a href="#working"onClick ={() => setIcon("#working")}className={icon === "#working" ? "iconActive": ""}>
        {/* <i class="uil uil-book iconNavbar"></i> */}
        <Unicons.UilBook className="iconNavbar"/>
        <span className='textNavbar'>Work</span>
        </a> 
      </div>
      <div className="navMenuBottom">
        <a href="#service"onClick ={() => setIcon("#service")}className={icon === "#service" ? "iconActive": ""}>
          {/* <i class="uil uil-setting iconNavbar"></i> */}
          <Unicons.UilSetting className="iconNavbar"/>
          <span className='textNavbar'>Service</span> 
        </a>
        <a href="#footer"onClick ={() => setIcon("#footer")}className={icon === "#footer" ? "iconActive": ""}>
        {/* <i class="uil uil-message iconNavbar"></i> */}
        <Unicons.UilMessage className="iconNavbar"/>
        <span className='textNavbar'>Contact</span> 
        </a>
      </div>
    </div>
  </nav>
}

export default Navbarq