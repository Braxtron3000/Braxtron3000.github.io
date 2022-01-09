import React from "react"
import * as bannerStyles from "./banner.module.css"
import * as aboutStyles from "./about.module.css"
import Banner from "../components/banner"



export default function About(props) {
    return(
        <Banner
            divStyle={props.divStyle}
            h1Style={props.h1Style}
            bannerText="ppoo"
            description="aboo aboo"/>
    )
}