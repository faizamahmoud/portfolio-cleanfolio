import { bio } from '../../../portfolio'
import './About.css'
import pic from '/Users/faizamahmoud/Desktop/desktop projects/cleanfolio/src/images/pic.jpg'

const About = () => {
  
  const { name, description,header } = bio

  return (
    <div className='about center'>
      <img
                src={pic}
                alt='profile-img'
                className='profile-img'
                
              />
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}
      {header && <h2 className='about__role'>A {header}.</h2>}
      <p className='about__desc'>{description && description}</p>
    </div>
  )
}

export default About
