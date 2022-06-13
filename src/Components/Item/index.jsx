import { Li } from "./styles"

function Item ({title, status, ...rest}) {
  return (
    <Li {...rest}>
      <p>{title}</p>
      <span>{status}</span>
    </Li>
  )
}

export default Item