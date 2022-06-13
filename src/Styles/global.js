import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --pink: #FF577F;
    --pinkFocus: #FF427F;
    --pinkNegative: #59323F;
    --grey0: #F8F9FA;
    --grey1: #868E96;
    --grey2: #343B41;
    --grey3: #212529;
    --grey4: #121214;
    --success: #3FE864;
    --fail: #E83F5B;
    --toastify-color-dark: #343B41;
  }

  body {
    background-color: var(--grey4);
    color: var(--grey0);
  }

  border-style, input, button, span, p, label, select {
    font-family: 'Inter';
    font-size: 1rem;
  }
  
  h1, h2, h3, h4 {
    font-family: 'Inter';
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }
`