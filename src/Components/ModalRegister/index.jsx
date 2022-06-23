import { Container, Content, Head, Modal } from "./styles"
import Button from '../Button'
import { FiX } from 'react-icons/fi'
import api from "../../Services/api"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"

function ModalRegister ({setIsActiveModalRegister, techs, token, displayTechs}) {

  const { register, handleSubmit } =useForm()

  function onSubmit (data) {

    if(!techs) {
      return toast.error('Fill out fields')
    }

    api.post('/users/techs', data, 
      {
        headers: {Authorization: `Bearer ${token}`
        }    
      }
    ).then((_) => {
      toast.success('Technology added successfully')
      displayTechs()
    })
    .catch((_) => toast.error(`This technology already exist`))
  }
  
  return (
    <Modal>
      <Container>
        <Head>
          <h4>Register Technology</h4>
          <FiX onClick={() => setIsActiveModalRegister(false)}/>
        </Head>

        <Content onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input {...register('title')} label='Name' placeholder='Technology' required/>
          <label>
            Select status
            <select {...register('status')}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </label>
          <Button type='submit' primary>Register Technology</Button>
        </Content>
      </Container>
    </Modal>
  )
}

export default ModalRegister