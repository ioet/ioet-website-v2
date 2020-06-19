import { css, createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const size = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140,
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const GlobalStyles = createGlobalStyle`
  .___gatsby{
    position: absolute;
  }
  main{
    padding-top: 3.5rem;
  }
  ${above.medium`
   main{
      padding-top: calc(3.5rem - 100vh);
    }
    `}
  ${above.large`
   main{
      padding-top: calc(4.5rem - 100vh);
    }
  `}
`

export const colors = {
  ioetMetro: "#16bac5",
  ioetOrange: "#FF5E0A",
  ioetRed: "#ff3948",
  ioetPurple: "#16bac5",
  ioetSky: "#30bced",
}

export const StyledHeader = styled.header`
  background-image: linear-gradient(
    90deg,
    ${colors.ioetOrange},
    ${colors.ioetRed}
  );
  margin-bottom: 0;
  padding: 0 0.5rem 0 0;
  height: 3.5rem;
  width: 100%;
  max-width: 960;
  display: flex;
  position: fixed;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  a {
    height: 100%;
    font-size: 0.6rem;
  }
  & > a > img {
    margin: 0;
    background-color: ${colors.ioetOrange};
    height: 100%;
    padding: 0.5rem 0.8rem;
  }
  & ul {
    list-style: none;
    margin: 0;
    display: flex;
    font-size: 0.2rem;
  }
  ${above.medium`
    padding: 0 2rem;
    height: 3.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
  ${above.large`
    padding: 0 10rem;
    height: 4.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
`
