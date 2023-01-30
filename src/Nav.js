import React from 'react'

const Nav = () => {

    const checkNav = () => {
          document.querySelector('.nav-full').style.display = "none";
        } 
      

  return (
    <div className='nav-full'>
        <div className='close'><img onClick = {checkNav}src="images/close-button.png"></img></div>
        <div className='nav-links'>
        <ul>
            <li><a onClick = {checkNav} href="#about1"><span>01.</span><a>About</a></a></li>
            <li><a onClick = {checkNav} href="#skills1"><span>02.</span><a>Skills</a></a></li>
            <li><a onClick = {checkNav} href="#work1"><span>03.</span><a>Work</a></a></li>
            <li><a onClick = {checkNav} href="#contact1"><span>04.</span><a>Contact</a></a></li>
        </ul>
    </div>
    </div>
  )
}

export default Nav