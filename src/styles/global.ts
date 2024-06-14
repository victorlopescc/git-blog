import { createGlobalStyle } from "styled-components";
import firaCode from "../assets/fonts/FiraCode-Regular.woff";
import { defaultTheme } from "./theme/defaultTheme";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => defaultTheme.colors["base-border"]}
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => defaultTheme.colors["brand-blue"]};
      border-radius: 999px;
    }
  }

  body {
    background: ${({ theme }) => defaultTheme.colors["base-background"]};
    color: ${({ theme }) => defaultTheme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${({ theme }) =>
      defaultTheme.textSizes["text-text-m"]} 'Nunito', sans-serif;
      line-height: 160%;
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
`;
