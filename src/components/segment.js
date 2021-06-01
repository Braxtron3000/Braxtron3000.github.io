import React from "react"
import * as segmentStyles from "./segment.module.css"

export default function Banner(props) {

    return(
        <section>
            <div className={segmentStyles.segment}>
               <h1 className={segmentStyles.title}>{props.title}</h1>
               <p className={segmentStyles.description}>{props.description}</p>
            </div>
        </section>
    )
}