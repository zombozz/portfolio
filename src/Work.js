import React from 'react'

const Work = () => {
  return (
    <div id="work" className='container'>
        <h1><span>03.</span>Work</h1>
        <h3>Some of my projects that I enjoyed working on:</h3>
        <div className='work-container'>
            <div id="work-cont" className='work-1'>
                <a target='#' href="mini-bird.netlify.app">mini-bird.netlify.app</a>
                <a target='#' href="https://github.com/zombozz/flbird-mini"><img src="images/github.png"></img></a>
                <p>Working knock off version of flappy bird, created in vanilla JavaScript. Built without following any tutorials, which I am very proud of.</p>
            </div>
            <div id="work-cont" className='work-2'>
                <a target='#' href="omori-clone.netlify.app">omori-clone.netlify.app</a>
                <a target='#' href="https://github.com/zombozz/omori-clone-1"><img src="images/github.png"></img></a>
                <p>Clone of the website of one of my favourite games: Omori. I had a lot of fun recreating this website and its unique features. Original site link: <a href="https://www.omori-game.com/"><span>https://www.omori-game.com/</span></a></p>
            </div>
            <div id="work-cont" className='work-3'>
                <a target='#' href="art-gallery1.netlify.app">art-gallery1.netlify.app</a>
                <a target='#' href="https://github.com/zombozz/artwork-show"><img src="images/github.png"></img></a>
                <p>A site I built for my cousin to display her paintings: A personal website built using ReactJS with a simple grid gallery of images.</p>
            </div>
        </div>
    </div>
  )
}

export default Work