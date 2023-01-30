import React from 'react'

const Header = () => {

  const checkNav = () => {
        document.querySelector('.nav-full').style.display = "block";
    }

  return (
    <div className='header'>
        <a href="#"><img src="images/logo.png"></img></a>
        <img onClick={checkNav}className='nav' src="images/nav.png"></img>
        <div className='links'>
            <ul>
                <li><a href="#about1"><span>01.</span><a>About</a></a></li>
                <li><a href="#skills1"><span>02.</span><a>Skills</a></a></li>
                <li><a href="#work1"><span>03.</span><a>Work</a></a></li>
                <li><a href="#contact1"><span>04.</span><a>Contact</a></a></li>
            </ul>
        </div>
        <div className='resume-button'>
            <a target="#" href="#">Resume</a>
        </div>
    </div>
  )
}

export default Header