import React, { useState } from "react";

import cheliang from "../../../assets/index/cheliang.png"

import Layout from "../../../components/layout";

import './neighborhood.scss'

type ImgType = typeof cheliang;

interface Item {
    shortTitle: string;
    title: string;
    completeTitle: string;
    number: number;
    completeNumber: number;
    img: ImgType;
}




const Neighborhood: React.FC<{}> = () => {

    const [itemList, setItemList] = useState<Item[]>([
        {
            shortTitle: "头条",
            title: "阅读量",
            completeTitle: "新闻数量",
            number: 1221,
            completeNumber: 2566,
            img: cheliang,
        },
        {
            shortTitle: "邻里互助",
            title: "已解决信息",
            completeTitle: "求助信息",
            number: 1221,
            completeNumber: 2566,
            img: cheliang,
        },
        {
            shortTitle: "助餐",
            title: "用餐总人数",
            completeTitle: "累计用餐总人数",
            number: 1221,
            completeNumber: 2566,
            img: cheliang,
        },
        {
            shortTitle: "达人",
            title: "活动总次数",
            completeTitle: "累计活动总次数",
            number: 1221,
            completeNumber: 2566,
            img: cheliang,
        },
    ])

    return (
        <Layout title={'邻里'} number={20}>
            <div className="padding-box">
                <div className="neighborhood-header">
                    <ul>
                        {
                            itemList.map((item) => {
                                return <li key={item.title}>
                                    <div className="title">
                                        <span>{item.shortTitle}</span>
                                        <div className="lt"></div>
                                        <div className="rt"></div>
                                        <div className="rb"></div>
                                        <div className="lb"></div>
                                    </div>
                                    <div className="right">
                                        <div className="header">
                                            <span className="header-title">{item.title}</span>
                                            <span className="header-number">{item.number}</span>
                                        </div>
                                        <div className="line"></div>
                                        <div className="footer">
                                            <span>{item.completeTitle}:{item.completeNumber}</span>
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>

        </Layout>

    )

}


export default Neighborhood
