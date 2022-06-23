import Input from "../../Components/Input/index.jsx"
import Button from "../../Components/Button/index.jsx"
import { Container, Content } from "./styles.js"
import Header from "../../Components/Header/index.jsx"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from "../../Services/api.js"
import { toast } from 'react-toastify'
import { useHistory } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { useState } from "react"
import { FiEye, FiEyeOff } from 'react-icons/fi'

function SignUp ({authenticated, setAuthenticated}) {

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  })

  const schema = yup.object().shape({
    name: yup.string().required('Required field'),
    email: yup.string().email('Invalid Email').required('Required field'),
    password: yup.string().min(6, 'Minimum 8 digits').required('Required field')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Must contain at least one uppercase and lowercase letter, a special character and a number'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must be the same').required('Required field'),
    course_module: yup.string().required('Required field'),
  })

  const history = useHistory()

  const { register, handleSubmit, formState: { errors }} = useForm(
    { resolver: yupResolver(schema)})

  function onSubmitFunction ({name, email, password, course_module, bio = 'unused', contact = 'unused'}) {
    const user = {name, email, password, course_module, bio, contact}

    api.post('/users', user)
    .then((_) => {
      toast.success('Account registered successfully')
      return history.push('/login')
    })
    .catch((err) => toast.error(`Email already registered`))
  }

  if(authenticated) {
    return <Redirect to='/dashboard'/>
  }

  function HideShowPassword () {
    setValues({ ...values, showPassword: !values.showPassword })

  }

  return (
    <Container>
      <Header setAuthenticated={setAuthenticated} value='Back'/>
      <Content>
        <h4>Create your account</h4>
        <p>Fast and free, let's go</p>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
  
          <Input label='Name' register={register} name='name' error={errors.name?.message} placeholder='Type your name'/>
          <Input label='Email' register={register} name='email'  error={errors.email?.message}  placeholder='Type your email'/>
          <section>
            <Input label='Password' register={register} name='password' error={errors.password?.message} placeholder='Type a strong password'
              type={values.showPassword ? "text" : "password"}/>
  
            {values.showPassword ? <FiEye onClick={HideShowPassword} className='password'/> : <FiEyeOff onClick={HideShowPassword} className='password'/>}
          </section>

          <section>
          <Input label='Confirm password' register={register} name='confirmPassword'  error={errors.confirmPassword?.message}  
            type={values.showPassword ? "text" : "password"} placeholder='Confirm your password'/>

            {values.showPassword ? <FiEye onClick={HideShowPassword} className='confirm'/> : <FiEyeOff onClick={HideShowPassword} className='confirm'/>}
          </section>
  
          <label>
            <h5>Select module</h5>
            <select {...register('course_module')} required>
              <option value="First module (FrontEnd Introduction)">1st - First (FrontEnd Introduction)</option>
              <option value="Second module (FrontEnd Advanced)">2nd - Second (FrontEnd Advanced)</option>
              <option value="Third module (BackEnd Introduction)">3rd - Third (BackEnd Introduction)</option>
              <option value="Fourth module (BackEnd Advanced)">4th - Fourth (BackEnd Advanced)</option>
            </select>
            <span>{errors.module?.course_module}</span>
          </label>
  
          <Button type='submit' primary>Sign Up</Button>
  
        </form>
      </Content>
    </Container>

  )
}

export default SignUp