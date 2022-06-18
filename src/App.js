import React from "react";
import Header from "./Components/Header";
import data from "./data";
import Card from "./Components/Card";
import Footer from "./Components/footer";

export default function App(){
  let Cards = data.map(item => {
    return <Card 
      key = {item.title}
      item = {item}
    />
  })
  return (
    <div>
      <Header />
      {Cards}
      <Footer />
      </div>
  )
}