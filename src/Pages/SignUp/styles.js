import styled from 'styled-components'

export const Container = styled.div `
  width: 310px;
  margin: auto;
`

export const Content = styled.div `
  width: 310px;
  background: var(--grey3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  margin-bottom: 5%;

  .password {
    width: 12px;
    position: absolute;
    right: 15px;
    top: 43px;
  }

  .confirm {
    width: 12px;
    position: absolute;
    right: 15px;
    top: 42px;
  }

  h4 {
    text-align: center;
    padding: 20px;
  }

  p {
    font-size: 12px;
    color: var(--grey1);
    text-align: center;
    margin: 5px auto 15px auto;
  }

  Button {
    width: 270px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  label, h5 {
    font-size: 12px;
    margin-bottom: 5px;
    margin-top: 5px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
  }

  select {
    height: 40px;
    font-size: 14px;
    padding: 10px;
    border: 1.2182px solid var(--grey2);
    border-radius: 4px;
    background: var(--grey2);
    color: var(--grey1);
    margin-bottom: 12px;
    margin-top: 5px;
  }

  select:hover:focus {
    border: 1.2182px solid var(--grey0);
  }

  section {
    position: relative;
  }

`
