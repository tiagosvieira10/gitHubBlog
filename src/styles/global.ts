import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Nunito', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors["base-background"]};
    color: ${({theme}) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`