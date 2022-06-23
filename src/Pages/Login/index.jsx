import { Container, Content } from "./styles.js"
import Logo from '../../Components/Assets/Logo.svg'
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from "../../Services/api.js"
import { toast } from 'react-toastify'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useState } from "react"

function Login ({ authenticated, setAuthenticated }) {

  const history = useHistory()
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  })

  const schema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: yup.string().min(6, 'Mínimo 8 dígitos').required('Campo obrigatório'),
  })

  const { register, handleSubmit, formState: { errors}} = useForm(
    { resolver: yupResolver(schema)})

  function onSubmitFunction (data) {

    api.post('/sessions', data)
    .then((response) => {
      const { token } = response.data
      const { name, course_module, id } =response.data.user

      localStorage.setItem('@KenzieHub:token', token)
      localStorage.setItem('@KenzieHub:user', name)
      localStorage.setItem('@KenzieHub:id', id)
      localStorage.setItem('@KenzieHub:module', course_module)

      setAuthenticated(true)
    })
    .catch((err) => toast.error(`Invalid email or password`))
  }

  if(authenticated) {
    return <Redirect to='/dashboard'/>
  }

  function HideShowPassword () {
    setValues({ ...values, showPassword: !values.showPassword })

  }

  return (
    <Container>
      <img src={Logo} alt='Logo KenzieHub'/>
      <Content>
        <h4>Login</h4>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input label='Email' register={register} name='email'  error={errors.email?.message}  placeholder='Type your email'/>
          <section>
          <Input label='Password' register={register} name='password' error={errors.email?.message} placeholder='Type your password'
            type={values.showPassword ? "text" : "password"}/>

            {values.showPassword ? <FiEye onClick={HideShowPassword}  className='login'/> : <FiEyeOff onClick={HideShowPassword}  className='login'/>}
          </section>
          
          <Button primary>Login</Button>
        </form>
        <p>Don't have an account yet?</p>
        <Button type='submit' onClick={() => history.push('/signup')} >Sign Up</Button>
      </Content>
    </Container>
  )
}

export default Login