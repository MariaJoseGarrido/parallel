import React from 'react'

const About = () => {
  React.useEffect(()=>{
    console.log('useEfect')

  })

  return (
    <div>
      <div>
        <ul> Mis Habilidades técnicas:
          <li>Html 5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Bootsatrap</li>
          <li>Github</li>
        </ul>
      </div>
      <div>
        <ul> Mis Habilidades blandas:
          <li>creatividad</li>
          <li>Trabajo en equipo</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Bootsatrap</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  
  )
}
export default About