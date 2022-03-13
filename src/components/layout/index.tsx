import React, { ReactElement } from "react";

import "./layout.scss"

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>;
    title: string;
    number: number

}



const Layout: React.FunctionComponent<Props> = (prop) => {
    const {title,number}=prop
    return (
        <div className="layout">

            <header>
                <span>{title}</span>
                <div>
                    <span>服务人数：</span>
                    <span className="number"> {number}</span>
                </div>
            </header>

            <div className="content">
                {
                    prop.children
                }
            </div>
        </div>
    )

}

export default Layout