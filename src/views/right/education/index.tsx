import React, { useState } from "react";

import Layout from "../../../components/layout";

import huodong from "../../../assets/index/huodong.png";
import zixun from "../../../assets/index/zixun.png";

import "./education.scss"

type ImgType = typeof huodong;

interface Items {
    title: string;
    number: number;
    img: ImgType;
}

const Education: React.FC<{}> = () => {

    const [educationItem, setEducationItem] = useState<Items[]>([
        { title: "教育", number: 1221, img: zixun },
        { title: "视频", number: 1221, img: huodong },
        { title: "活动场", number: 1221, img: huodong },
        { title: "共享图书", number: 1221, img: zixun },
    ])
    return (
        <Layout title={'教育'} number={20}>
            <div className="education-content">
                <ul>
                    {
                        educationItem.map((item, index) => {
                            return <li key={item.title}>
                                <img src={item.img} />
                                <div>
                                    <span className="title">{item.title}</span>
                                    <span
                                        className={index === 2 || index === 1 ? 'number yellow' : 'number'}
                                    >{item.number}</span>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </Layout >
    )

}

export default Education