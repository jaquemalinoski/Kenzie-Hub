import styled from "styled-components"

export const Container = styled.button `
  background: ${props => props.primary ? '#FF577F' : '#868E96'};
  color: var(--grey0);
  font-weight: 500;
  font-size: 14px;
  border: 2px solid ${props => props.primary ? '#FF577F' : '#868E96'};
  border-radius: 4px;
  width: 150px;
  height: 40px;

  :hover {
    background: ${props => props.primary ? '#59323F' : '#868E96'};
    border: 2px solid ${props => props.primary ? '#59323F' : '#868E96'};
  }
`