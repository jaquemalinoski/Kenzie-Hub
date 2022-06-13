import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;

  h1 {
    padding-top: 40px;
  }

  p {
    max-width: 550px;
    font-family: 'Inter';
    font-size: 16px;
    padding: 15px;
    margin-bottom: 30px;
  }

  button {
    margin: 15px;
  }
`