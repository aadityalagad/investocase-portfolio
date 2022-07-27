import React, { useState } from "react";
import PieChart from "./PieChart";
import Legends from "./Legends";
import "./Portfolio.css";

function Portfolio() {
    const [secondaryData, setSecondaryData] = useState([]);
    const [secondaryColor, setSecondaryColor] = useState([]);

    const data = [
        { name: "Cryptocurrency", value: 2000 },
        { name: "Funds", value: 5000 },
        { name: "Stocks", value: 8600 },
    ];

    const cryptocurrencyData = [
        { name: "Bitcoin", value: 800 },
        { name: "Ethereum", value: 1000 },
        { name: "Dogecoin", value: 200 },
    ];

    const stocksData = [
        { name: "INFY", value: 1600 },
        { name: "TCS", value: 3200 },
        { name: "HDFCBANK", value: 1400 },
        { name: "HINDUNILVR", value: 2400 },
    ];

    const fundsData = [
        { name: "Axis Bluechip", value: 2000 },
        { name: "ICICI Prudential", value: 3000 },
    ];

    const [rendering, setRendering] = useState(false);

    const onRenderHandler = (name) => {
        console.log("rendering the component ...");
        setRendering(true);
        // console.log(name.toLowerCase() + "Data");
        if (name === "Funds") {
            setSecondaryData(fundsData);
            setSecondaryColor(["#0061AC", "#80aed1"]);
        }
        if (name === "Cryptocurrency") {
            setSecondaryData(cryptocurrencyData);
            setSecondaryColor(["#249B93", "#4cc7bf", "#8fe0db", "#05635c"]);
        }
        if (name === "Stocks") {
            setSecondaryData(stocksData);
            setSecondaryColor(["#ff2e2e", "#fc5b5b", "#ff8a8a", "#ffb8b8"]);
        }
    };

    // const colorsOne = ["#249B93", "#4cc7bf", "#8fe0db", "#05635c"];
    const colors = ["#249B93", "#0061AC", "#FF374C", "#FFAC00"];
    return (
        <div className="portfolio">
            <div className="pie-chart">
                <PieChart
                    data={data}
                    color={colors}
                    onRender={onRenderHandler}
                />
                {/* getting an error if you click on the same section twice */}
                {/* you will get an error if you click on the second rendered pie chart because we are not setting up the render function for the same */}
                {rendering && (
                    <PieChart data={secondaryData} color={secondaryColor} />
                )}
            </div>
            {/* <PieChart data={data} color={colors} /> */}
            <Legends />
        </div>
    );
}

export default Portfolio;
