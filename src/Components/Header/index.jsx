import { Container } from "./styles"
import Logo from '../Assets/Logo.svg'
import Button from "../Button"
import { useHistory } from "react-router-dom"

function Header ({ value, setAuthenticated }) {

  const history = useHistory()

  function Logout () {
    localStorage.clear()
    setAuthenticated(false)
    history.push('/')
  }

  return (
    <Container>
      <img src={Logo} alt="Logo KenzieHub"/>
      <Button onClick={Logout} path='/'>{value}</Button>
    </Container>
  )
}

export default Header