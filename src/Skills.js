import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container'>
        <h1><span>02.</span>My Skills</h1>
        <div className='skills-container'>
        <div className='skills-line'></div>
        <div className='skills1'>
            <h3>Technologies:</h3>
            <ul role="list">
                <li>ReactJS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>SASS</li>
            </ul>
        </div>
        <div className='skills2'>
             <h3>Extra Skills:</h3>
             <ul role="list">
                <li>Firebase</li>
                <li>REST API</li>
                <li>Photoshop</li>
                <li>Figma</li>
                <li>GitHub</li>
             </ul>
        </div>
        </div>
    </div>
  )
}

export default Skills