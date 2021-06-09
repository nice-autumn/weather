import React from 'react'
import { IconName } from "react-icons/wi";

export default function Header(props) {
    return (
        <div className="header">
            <p>{props.detail.temp}</p>
        </div>
    )
}
