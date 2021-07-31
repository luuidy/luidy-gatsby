import * as React from "react"
import Navbar from "../components/Navbar"
import CardCategorie from "../components/CardCategorie"

import "../styles/index.scss"

export default function IndexPage() {
  return(
    <>
      <Navbar/>
      <article className="index">
        <CardCategorie/>
        <CardCategorie/>
        <CardCategorie/>
        <CardCategorie/>
        <CardCategorie/>

      </article>
    </>
  )
}

