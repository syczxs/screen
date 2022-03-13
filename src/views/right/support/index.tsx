import React, { useState } from "react";

import Layout from "../../../components/layout";

import cheliang from "../../../assets/index/cheliang.png";

import './support.scss'

type ImgType = typeof cheliang;


interface Items {
    title: string;
    number: number;
    img: ImgType;
}


const Support: React.FC<{}> = () => {

    const [supportItems, setSupportItems] = useState<Items[]>([
        { title: "党组织", number: 1221, img: cheliang },
        { title: "公益组织", number: 1221, img: cheliang },
        { title: "社会组织", number: 1221, img: cheliang },
        { title: "商业组织", number: 1221, img: cheliang },
        { title: "党员", number: 1221, img: cheliang },
        { title: "志愿者", number: 1221, img: cheliang },
        { title: "物业", number: 1221, img: cheliang },
        { title: "网格员", number: 1221, img: cheliang },
    ])
    return (
        <Layout title={'支持力量'}>
            <div className="support-content">
                <ul>
                    {
                        supportItems.map((item) => {
                            return <li key={item.title}>
                                <img src={item.img} />
                                <span className="number">{item.number}</span>
                                <span className="title">{item.title}</span>
                            </li>
                        })

                    }

                </ul>
            </div>
        </Layout >
    )

}

export default Support