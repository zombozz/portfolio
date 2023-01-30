import React, { useState } from 'react'
const about2 = document.getElementById("#about1")
const skills2 = document.getElementById("#skills1")
const work2 = document.getElementById("#work1")
const contact2 = document.getElementById("#contact1")
let newScroll;

const height1 = 800;
const height2 = 1700;
const height3 = 2400;
const height4 = 3000;

const ArrowDown = () => {
    
    const [nextScroll, setNewScroll] = useState('#about1')
    const [arrow, setArrow] = useState('images/down-arrow.png')

    window.addEventListener("scroll", function() {
        if (window.scrollY < (height1)) {
            setNewScroll("#about1")
            return
        }if (window.scrollY > (height1) && window.scrollY < (height2)) {
            setNewScroll("#skills1")
            setArrow('images/down-arrow.png')
            return
        } if (window.scrollY > (height2) && window.scrollY < (height3)) {
            setNewScroll("#work1")
            return
        } if (window.scrollY > (height3) && window.scrollY < (height4)) {
            setNewScroll("#contact1")
            return
        } if (window.scrollY > (height4)) {
            setNewScroll("#")
            setArrow('images/up-arrow.png')
            return
        }
      });

  return (
    <div className='arrow'><a href={nextScroll}><img className='down-arrow' src={arrow}></img></a></div>
  )
}

export default ArrowDown