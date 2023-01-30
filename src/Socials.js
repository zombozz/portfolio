import React from 'react'
import $ from 'jquery'

const Socials = () => {
  // window.addEventListener("scroll", function() {
  //   if (window.scrollY > (3700)) {
  //     $(document).on('scroll', function(){
  //       $(".social").css("right", Math.max(7) + "%");
  //       $(".social").css("bottom", Math.max(45) + "%");
  //       $(".social-links").css("flex-direction", "row");
  //       $(".s1, .s2, .s3, .s4").css("margin-left", "50px");
  //       $(".social-links img").css("width", "50px");
  //       $(".social-line").css("display", "none");
  //     })
  //      }    if (window.scrollY < (3700)) {
  //       $(document).on('scroll', function(){
  //         $(".social").css("right", Math.max(80) + "px");
  //         $(".social").css("bottom", Math.max(0) + "%");
  //         $(".social-links").css("flex-direction", "column");
  //         $(".social-line").css("display", "block");
  //       })
  //        }
  // })
  return (
    <div className='social'>
        <div className='social-links'>
            <a className='s1' target="blank" href='https://github.com/zombozz'><img src="images/github.png"></img></a>
            <a className='s2' target="blank" href='#'><img src="images/instagram.png"></img></a>
            <a className='s3' target="blank" href='https://www.linkedin.com/in/abdullah-ibn-saleem-819a6b230/'><img src="images/linkedin.png"></img></a>
            <a className='s4' target="blank" href='https://twitter.com/abdullah___is'><img src="images/twitter.png"></img></a>
        </div>
        <div className='social-line'></div>
    </div>

  )
}

export default Socials