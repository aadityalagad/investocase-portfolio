import React, { useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

let render = null;

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                // important
                onClick={() => {
                    // console.log(payload.name, fill);
                    // temp = payload.name;
                    render(payload.name);
                    // console.log(temp);
                }}
                style={{ cursor: "pointer" }}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`\u20B9 ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        </g>
    );
};

const CustomDonutChart = (props) => {
    let data = props.data;
    let colors = props.color;

    render = props.onRender;

    const [activeIndex, setActiveIndex] = useState(0);
    // const [activeIndexOne, setActiveIndexOne] = useState(0);
    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    // if (temp !== null) {
    //     data = props.assetOne;
    //     colors = props.colorOne;
    // }

    // const onPieEnterOne = (_, index) => {
    //     setActiveIndexOne(index);
    // };

    return (
        <>
            {/* {temp && (
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart width={300} height={300}>
                        <Pie
                            activeIndex={activeIndexOne}
                            activeShape={renderActiveShape}
                            data={props.assetOne}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={5}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={onPieEnterOne}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={props.colorOne[index % colors.length]}
                                    onClick={() => {
                                        console.log(index);
                                    }}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            )} */}
            {
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart width={300} height={300}>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={5}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                            // onClick={() => {
                            //     // console.log("clicked");
                            //     props.onRender();
                            // }}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={colors[index % colors.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            }
        </>
    );
};

export default CustomDonutChart;
