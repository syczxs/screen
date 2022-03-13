import React, { useState, ReactElement } from "react";

import "./tabs.scss"
import left from "../../assets/index/1-1.png"
import right from "../../assets/index/2-1.png"

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>;
    selected: string

}

const Tab: React.FC<Props> = (prop) => {
    const { selected, children } = prop
    const tabs = ['第一页', '第二页']

    return (
        <div className="tabs">
            <div className="tabs-nav" >

                <div className="pic-box">
                   
                        <img src={left} />
                   
                    
                        <img src={right} />
                  
                </div>

                <div className="indicator-box">
                    {
                        tabs.map((item) => {
                            return <div className="indicator" key={item}></div>
                        })
                    }

                </div>

                <div className="item-box">
                    {
                        tabs.map((item) => {
                            return <div className="tabs-item" key={item}>
                                <div>{item}</div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="tabs-content">
                {
                    prop.children
                }
            </div>
        </div>
    )

}

export default Tab