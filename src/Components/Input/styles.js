import styled from "styled-components"

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5px;
  /* height: 80px; */

  span {
    height:fit-content;
    margin-top: 5px;
    text-align: left;
    color: #B22222;
    font-size: 12px;
  }

  label {
    font-size: 12px;
    margin-bottom: 5px;
    margin-top: 5px;
    font-weight: 400;
  }

  input {
    height: 40px;
    font-size: 14px;
    padding: 10px;
    border: 1.2182px solid var(--grey2);
    border-radius: 4px;
    background: var(--grey2);
    color: var(--grey1);
    margin-top: 5px;
  }

  input:focus {
    border: 1.2182px solid var(--grey0);
  }
`