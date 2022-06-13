import { Container } from "./styles.js"

function Button ({path, children, primary, ...rest}) {

  return (
    <Container primary={primary} {...rest}>{children}</Container>
  )
}

export default Button