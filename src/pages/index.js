import * as React from "react"
import { container } from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <div className={container}>
      <main>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <StaticImage
        src="../images/marimo.png"
        loading="eager"
        width={250}
        quality={100}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      </main>
    </div>
  )
}
export const Head = () => <title>Wandering Marimo</title>
export default IndexPage