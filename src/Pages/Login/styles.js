import styled from "styled-components"

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 5%;
    width: 144px;
  }
`
export const Content = styled.div `
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 440px;
  background: var(--grey3);
  margin: auto;
  margin-top: 5%;
  padding: 20px;
  position: relative;

  .login {
    width: 12px;
    position: absolute;
    right: 15px;
    top: 42px;
  }

  svg {
    width: 12px;
    position: absolute;
    right: 30px;
    top: 203px;
  }

  p {
    font-size: 12px;
    color: var(--grey1);
    text-align: center;
    margin: 15px auto 0px auto;
  }

  h4 {
    text-align: center;
    padding: 20px;
  }

  Button {
    width: 260px;
    margin: 20px auto 15px auto;
  }

  section {
    position: relative;
  }
`