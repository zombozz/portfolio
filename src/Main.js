import React from 'react'
import $ from "jquery";

const Main = () => {

  $(document).on('scroll', function(){
    $(".name").css("margin-left", Math.max(0 - 2*window.scrollY) + "px");
    $(".occ").css("left", Math.max(0 + 1.5*window.scrollY) + "px");
    $(".rotate").css("top", Math.max(150 - 1.5*window.scrollY) + "px");
    $(".contact-button").css("top", Math.max(270 + 1.5*window.scrollY) + "px");
  })
  return (
    
    <div className='main-content'>
      <div className='main-container'>
        <div className='rotate'><p>Hi, my name is</p></div>
        <div className='main-text'>
            <h1 className='name'>Abdullah Ibn Saleem.</h1>
            <h1 className='occ'>Frontend Engineer.</h1>
        </div>
        <button className='contact-button'><a href="#contact1">Contact Me</a></button>
    </div>
    </div>
  )
}

export default Main