import * as React from "react"
import Navbar from "../components/Navbar"
import CardCategorie from "../components/CardCategorie"
import Footer from '../components/Footer'

import "../styles/index.scss"

export default function IndexPage() {
  return(
    <>
      <Navbar/>
      <article className="index">
        <CardCategorie nome={"camisas"} imagem="https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
        <CardCategorie nome={"jaquetas"} imagem="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
        <CardCategorie nome={"calçados"} imagem={"https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg"}/>
        <CardCategorie nome={"Feminino"} imagem="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg"/>
        <CardCategorie nome={"Masculino"} imagem={"https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/08/Peaky-Blinders.jpg"}/>
      </article>
      <Footer/>
    </>
  )
}

