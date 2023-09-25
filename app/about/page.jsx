import React from 'react'

const AboutPage = () => {
  return (
    <>
    <div>AboutPage</div>
    <div className='about'>
      <div className='profile'>
        <img src="/profile-picture.jpg" alt="Profile" className='profileImage' />
      </div>
      <div className='content'>
        <h1>About Me</h1>
        <p>
          I am a passionate full-stack developer with expertise in building web applications using modern technologies.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor quis ex volutpat, in semper
          turpis finibus.
        </p>
        <h2>Skills</h2>
        <ul className="skillsList">
          <li>JavaScript (React, Node.js)</li>
          <li>HTML/CSS</li>
          <li>SQL and NoSQL databases</li>
          <li>API development and integration</li>
          <li>Version control (Git)</li>
        </ul>
        <h2>Contact</h2>
        <p>Email: abdulrehman517uetian@gmail.com</p>
        <p>LinkedIn: <a href="linkedin.com/in/abdul-rehman-50765318b" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/Abdulrehman517" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </div>
    </>
  )
}

export default AboutPage