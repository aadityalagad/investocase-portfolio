import React from "react";
import "./ChartLegends.css";

function ChartLegends(props) {
    return (
        <div className="chart-legends">
            <div
                className="chart-legends__box"
                style={{ backgroundColor: props.color }}
            ></div>
            <h3 className="chart-legends__text">{props.info}</h3>
        </div>
    );
}

export default ChartLegends;
