import { Container, Content, Head, Modal } from "./styles"
import Button from '../Button'
import { FiX } from 'react-icons/fi'
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import api from "../../Services/api"

function ModalEdit ({setIsActiveModalEdit, displayTechs, token, selectedTech}) {
  
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    reset({title: selectedTech.title, status: selectedTech.status})
  }, [reset, selectedTech])

  function onSubmit ({status}) {
    const statusUp = {status}

    api.put(`/users/techs/${selectedTech.id}`, statusUp, {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then((_) => displayTechs())

    setIsActiveModalEdit(false)
  }

  function Delete (id) {

    api.delete(`/users/techs/${id}`, {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then((_) => displayTechs())
    
    setIsActiveModalEdit(false)
  }

  return (
    <Modal>
      <Container>
        <Head>
          <h4>Edit Status</h4>
          <FiX onClick={() => setIsActiveModalEdit(false)}/>
        </Head>

        <Content onSubmit={handleSubmit(onSubmit)}>
          <label>Project Name</label>
          <input {...register('title')} label='Name' value={selectedTech.title}/>
          <label>
            Select status
            <select {...register('status')}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </label>
          <section>
            <Button type='submit' primary>Save Changes</Button>
            <Button onClick={() => Delete(selectedTech.id)}>Delete</Button>
          </section>
        </Content>
      </Container>
    </Modal>
  )
}

export default ModalEdit