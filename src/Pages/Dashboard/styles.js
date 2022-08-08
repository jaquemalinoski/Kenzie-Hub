import styled from 'styled-components'

export const Container = styled.div `
  width: 90vw;
  margin: auto;

  .plusIcon {
    cursor: pointer;
  }

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868E96;
    text-align: right;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }

  svg {
    color: var(--grey0);
    background: var(--grey3);
    width: 25px;
    height: 25px;
    padding: 5px;
  }

  @media(min-width: 800px) {
    width: 719px;
    margin-top: 20px;
  }
`

export const Content = styled.ul `
  background: var(--grey3);
  padding: 20px;

  h2 {
    text-align: center;
    height: 100px;
    margin-top: 45px;
  }
`
