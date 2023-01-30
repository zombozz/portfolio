import React, { useEffect } from 'react';

const Cursor = () => {

    const coords = { x: 0, y: 0}
    const cursorParts = document.querySelectorAll(".cursor-part")
    cursorParts.forEach(function(cursorPart) {
        cursorPart.x = 0;
        cursorPart.y = 0;
    })
    window.addEventListener("mousemove", function(e) {
        coords.x = e.clientX
        coords.y = e.clientY
        animateCursor()
    })

        const animateCursor = () => {

            let x = coords.x;
            let y = coords.y;
            cursorParts.forEach(function(cursorPart, index) {
                cursorPart.style.left = x  -4 + 'px'
                cursorPart.style.top = y -4 + 'px'
                cursorPart.x = x;
                cursorPart.y = y;

                cursorPart.style.scale = (20-index) / 10;

                const nextPart = cursorParts[index + 1] || cursorParts[0];
                x += (nextPart.x - x) * 0.3;
                y += (nextPart.y - y) * 0.3;
            })
        }

  return (
    <div className='cursor'>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
        <div className='cursor-part'></div>
    </div>
  )
}

export default Cursor