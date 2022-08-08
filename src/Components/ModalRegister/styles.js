import styled from 'styled-components'

export const Modal =  styled.div `
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(18, 18, 20, 0.5);
  display: flex;
  justify-content: center;

  .closeIcon {
    cursor: pointer;
  }
`

export const Container = styled.div `
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Content = styled.form `
  display: flex;
  height: 280px;
  flex-direction: column;
  padding: 0px 20px;
  background: var(--grey3);
  border-radius: 0px 0px 5px 5px;;

  label {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin-bottom: 12px;
    margin-top: 20px;
    font-weight: 400;
  }

  input, select {
    height: 40px;
    font-size: 14px;
    padding: 10px;
    border: 1.2182px solid var(--grey2);
    border-radius: 4px;
    background: var(--grey2);
    color: var(--grey1);
  }

  select {
    height: 40px;
    font-size: 14px;
    padding: 5px;
    border: 1.2182px solid var(--grey2);
    border-radius: 4px;
    background: var(--grey2);
    color: var(--grey1);
    margin-bottom: 12px;
    margin-top: 12px;
    cursor: pointer;
  }

  select:hover:focus {
    border: 1.2182px solid var(--grey0);
  }

  input:focus {
    border: 1.2182px solid var(--grey0);
  }

  Button {
    width: 270px;
    height: 48px;
  }

  toast {
    background: var(--toastify-color-dark);
  }
`

export const Head = styled.div `
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background: var(--grey2);
  border-radius: 5px 5px 0px 0px;;
`