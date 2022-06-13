import styled from 'styled-components'

export const Li = styled.li `
  list-style: none;
  height: 50px;
  margin: 15px auto;
  background: var(--grey4);
  border-radius: 5px;
  padding: 13px;
  display: flex;
  justify-content: space-between;
  
  p {
    font-family: 'Inter';
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
  }

  span {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
  }

  :hover {
    background: var(--grey2)
  }
`