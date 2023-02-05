import GitHubIcon from '@material-ui/icons/GitHub'
import {LaunchIcon} from '@icons/material'
import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (

  
  <div className='project'>

    {/* display name */}
    <h3>{project.name}</h3>

    {/* Display description */}
    <p className='project__description'>{project.description}</p>

    {/* Check if the project has a stack, if so display it */}
    {project.stack && (
      
      <ul className='project__stack'>
        
        {/* Map through the stack items and display them */}
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>{item}</li>
        ))}
      </ul>
    )}

    {/* Check if the project has a source code link, if so display a GitHub icon linking to it */}
    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {/* Check if the project has a live preview link, if so display a launch icon linking to it */}
    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)


export default ProjectContainer
