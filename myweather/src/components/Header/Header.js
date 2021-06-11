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
    console.log(props.detail);
    const {
        cloud,
        feelsLike,
        humidity,
        precip,
        pressure,
        temp,
        windScale,
      } =props.detail;
    const others = [
        {
          icon: <WiThermometer />,
          title: "体表温度",
          value:feelsLike + "度",
        },
        {
          icon: <WiStrongWind />,
          title: "风力",
          value: windScale+ "级",
        },
        {
          icon: <WiThermometerInternal />,
          title: "湿度",
          value: humidity + "度",
        },
        {
          icon: <FiCloudRain />,
          title: "降水量",
          value: precip+ "mm",
        },
        {
          icon: <AiOutlineDashboard />,
          title: "气压",
          value:pressure + "Pa",
        },
        {
          icon: <AiOutlineCloud />,
          title: "云量",
          value: cloud + "%",
        },
      ];
    return ( 
        <div className="header">
            <span className="location">北京</span>
            <span className="date">6月9日</span>
            <div className="weather">
                <span className="rain">{props.detail.temp}</span>
                <div className="other">
                    {
                        others.map((item,index)=>(
                            <div key={index} className="else">
                                <div className="icon">{item.icon}</div>
                                <div className="txt">
                                    <div className="title">{item.title}</div>
                                    <div className="value">{item.value}</div>
                                </div>
                            </div>
                        ))
                    } 
               </div>    
            </div>
        </div>
    )
}
