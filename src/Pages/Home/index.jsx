import { Container } from './styles'
import Logo from '../../Components/Assets/Logo.svg'
import Button from '../../Components/Button'
import { useHistory } from "react-router-dom"
import { Redirect } from 'react-router-dom'

function Home ({authenticated}) {

  const history = useHistory()

  if(authenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
    <Container>
      <img src={Logo} alt='Logo Kenzie Hub'/>
      <h1>Where the world builds software</h1>
      <p>Millions of developers and companies build, 
        ship, and maintain their softwares on KenzieHub, the 
        largest and most advanced development platform in 
        the world.
      </p>
      <div>
        <Button primary onClick={() => history.push('/signup')}>Sign Up</Button>
        <Button primary onClick={() => history.push('/login')}>Login</Button>
      </div>
    </Container>
  )
}

export default Home