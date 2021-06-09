import React from 'react'
import './Header.css'
import {
    AiOutlineDoubleLeft,
    AiOutlineDashboard,
    AiOutlineCloud,
  } from "react-icons/ai";
  import { FiCloudRain } from "react-icons/fi";
  import {
    WiThermometer,
    WiStrongWind,
    WiThermometerInternal,
  } from "react-icons/wi";

export default function Header(props) {
 
    return (
        <div className="header">
            <span className="location">北京</span>
            <span className="date">6月9日</span>
            <div className="weather">
                <span className="rain">{props.detail.temp}</span>
                <div className="other">
                    <div className="icon"> <FiCloudRain /></div>
                    <div className="txt">
                        <div className="title">降水量</div>
                        <div className="value">{props.detail.precip}</div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
