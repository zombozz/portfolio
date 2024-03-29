import React from 'react'

const Work = () => {
  return (
    <div id="work" className='container'>
        <h1><span>03.</span>Work</h1>
        <h3>Some recent projects I've enjoyed working on:</h3>
        <div className='work-container'>
            <div id="work-cont" className='work-1'>
                <a target='#' href="https://gustoitalia.netlify.app/">gustoitalia.netlify.app</a>
                <a target='#' href="https://github.com/zombozz/flbird-mini"><img src="images/github.png"></img></a>
                <p>Fully responsive, beautiful website for Gusto Italia, an Italian Restaurant client. Made using React.js, SCSS.</p>
            </div>
            {/* <div id="work-cont" className='work-2'>
                <a target='#' href="https://omori-clone.netlify.app">omori-clone.netlify.app</a>
                <a target='#' href="https://github.com/zombozz/omori-clone-1"><img src="images/github.png"></img></a>
                <p>Clone of the website of one of my favourite games: Omori. I had a lot of fun recreating this website and its unique features. Original site link: <a href="https://www.omori-game.com/"><span>https://www.omori-game.com/</span></a></p>
            </div> */}
            <div id="work-cont" className='work-2'>
                <a target='#' href="https://vlquiz.netlify.app">vlquiz.netlify.app</a>
                <a target='#' href="https://github.com/zombozz/quiz-finished"><img src="images/github.png"></img></a>
                <p>Quiz application utilising REST APIS, Redux Toolkit, React Router, features custom questions and answers, topic to choose from, and results at the end.</p>
            </div>
            {/* <div id="work-cont" className='work-3'>
                <a target='#' href="https://emergencybutton.io/">emergencybutton.io/</a>
                <a target='#' href="https://github.com/zombozz/TEB"><img src="images/github.png"></img></a>
                <p>Help site for assisting individuals with addictions through motivation and distractions. Work in progress.</p>
            </div> */}
            <div id="work-cont" className='work-3'>
                <a target='#' href="https://seoswift.netlify.app">seoswift.netlify.app</a>
                <a target='#' href="https://github.com/zombozz"><img src="images/github.png"></img></a>
                <p>A site built for a client offering SEO services. Complete with payment plans, and responsive design, this is a complete React.js site </p>
            </div>
        </div>
    </div>
  )
}

export default Work