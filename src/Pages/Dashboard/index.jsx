import { Redirect } from "react-router-dom"
import Header from "../../Components/Header"
import { Container, Content } from "./styles"
import Item from "../../Components/Item"
import { FiPlus } from 'react-icons/fi'
import { useCallback, useEffect, useState } from 'react'
import ModalRegister from '../../Components/ModalRegister'
import ModalEdit from '../../Components/ModalEdit'
import api from "../../Services/api"

function Dashboard ({ authenticated, setAuthenticated}) {
  const [isActiveModalRegister, setIsActiveModalRegister] = useState(false)
  const [isActiveModalEdit, setIsActiveModalEdit] = useState(false)
  const [selectedTech, setSelectedTech] = useState()
  const [techs, setTechs] = useState([])
  const [token] = useState(localStorage.getItem('@KenzieHub:token'))
  const [user] = useState(localStorage.getItem('@KenzieHub:user'))
  const [module] = useState(localStorage.getItem('@KenzieHub:module'))
  const [id] = useState(localStorage.getItem('@KenzieHub:id'))

  const displayTechs = useCallback( () => {
    api.get(`/users/${id}`, {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then((response) => setTechs(response.data.techs))
    .catch((err) => console.log(err))
  }, [id, token])

  function handleOpenEdit (tech) {
    setIsActiveModalEdit(true)
    setSelectedTech(tech)
  }

  useEffect(() => {
    displayTechs()
  }, [isActiveModalEdit, displayTechs])

  if(!authenticated) {
    return <Redirect to='/login'/>
  }

  return (
    <Container>
      <Header setAuthenticated={setAuthenticated} value='Log Out'/>
      <section>
        <h3>Hello, {user}</h3>
        <span>{module}</span>
      </section>
      <section>
        <h4>Technologies</h4>
         <FiPlus onClick={() => setIsActiveModalRegister(true)} className='plusIcon'/>
      </section>
      <Content>
        {techs.length > 0 ? (techs.map((tech) => {
          return <Item key={tech.id} onClick={() => handleOpenEdit(tech)} title={tech.title} status={tech.status}/>}) 
          ) : (
          <h2>No technology added so far</h2>)}
      </Content>
      {isActiveModalRegister && <ModalRegister displayTechs={displayTechs} token={token} techs={techs} setIsActiveModalRegister={setIsActiveModalRegister}/>}
      {isActiveModalEdit && <ModalEdit setIsActiveModalEdit={setIsActiveModalEdit} displayTechs={displayTechs} selectedTech={selectedTech} token={token}/>}
    </Container>
  )
}

export default Dashboard