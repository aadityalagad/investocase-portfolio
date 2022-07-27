import React from "react";
import ChartLegends from "./ChartLegends";
import "./Legends.css";

function Legends() {
    const allData = [
        { name: "Asset 1", value: 400, color: "#249B93" },
        { name: "Asset 2", value: 300, color: "#0061AC" },
        { name: "Asset 3", value: 300, color: "#FF374C" },
        { name: "Asset 4", value: 200, color: "#FFAC00" },
    ];
    return (
        <div className="legends">
            {allData.map((data) => {
                return (
                    <ChartLegends
                        key={data.name + data.value}
                        info={data.name}
                        color={data.color}
                    />
                );
            })}
        </div>
    );
}

export default Legends;
