import { css } from "@emotion/react"

export const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&family=Oxygen:wght@300;400;700&display=swap");

  :root {
    --page-background: #222;
    --body-font: "Maven pro", sans-serif;
    --heading-font: "Oxygen", sans-serif;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--body-font);

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: var(--heading-font);
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`
