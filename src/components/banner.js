import React from "react"
import * as bannerStyles from "./banner.module.css"

export default function Banner(props) {
  
  return (
  <div className={bannerStyles.banner}>
    <div className={bannerStyles.cover}>
      <div className={bannerStyles.surface}>
        <h1>{props.bannerText}</h1>
        <p>{props.description}</p>
      </div>
    </div>
    

  </div>)
}