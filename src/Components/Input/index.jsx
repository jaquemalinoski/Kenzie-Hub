import { Container } from "./styles"

function Input ({label, register, name, error, ...rest}) {
  return (
    <Container haserrors={!!error}>
      <label>{label}</label>
      <input  {...register(name)} {...rest}/>
      <span>{error}</span>
    </Container>
  )
}

export default Input