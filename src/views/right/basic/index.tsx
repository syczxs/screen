import React, { useState, useEffect } from "react";

import Layout from "../../../components/layout";

import cheliang from "../../../assets/index/cheliang.png"

import * as echarts from 'echarts'
import fontSize from "../../../utils/font";

import "./basic.scss"

const Basic: React.FC<{}> = () => {

    const [headerItems, setHeaderItems] = useState([{ title: "居民", number: 1221, img: cheliang },
    { title: "房屋", number: 1221, img: cheliang },
    { title: "车辆", number: 1221, img: cheliang },
    { title: "感知", number: 1221, img: cheliang },])

    const getOption = () => {
        return {
            tooltip: {
                trigger: "item",
            },
            legend: {
                orient: "vertical",
                itemWidth: fontSize(0.1),
                itemHeight: fontSize(0.06),
                y: "center",
                textStyle: {
                    color: "#FFF",
                    fontSize: fontSize(0.12),
                },
            },
            series: [
                {
                    type: "pie",
                    radius: ["50%", "80%"],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        show: false,
                    },
                    emphasis: {
                        label: {
                            show: false,
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    center: ["20%", "40%"],
                    data: [
                        { value: 1048, name: "儿童（0-6岁）" },
                        { value: 735, name: "少年（7-17岁）" },
                        { value: 580, name: "青年（18-40岁）" },
                        { value: 484, name: "中年（41-66岁）" },
                        { value: 300, name: "老年期（>65岁）" },
                    ],
                },
            ],
        };
    };

    useEffect(() => {
        const element = document.getElementById('basic')
        if (element) {
            const myChart = echarts.init(element);
            myChart.setOption(getOption());
            window.addEventListener("resize", function () {
                myChart.resize();
            });

        }

    }, [])


    return (
        <Layout title={'基础数据'} number={20}>
            <div className="padding-box">
                <div className="basic-header">
                    <ul>
                        {
                            headerItems.map((item) => {
                                return <li key={item.title}>
                                    <img src={item.img} />
                                    <span className="number">{item.number}</span>
                                    <span className="title">{item.title}</span>
                                </li>

                            })
                        }
                    </ul>
                </div>
                <div className="chart-box">
                    <div className="e-charts" id="basic" ></div>
                </div>
            </div>


        </Layout>
    )

}

export default Basic