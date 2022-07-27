import "./App.css";
import Portfolio from "./Portfolio";
import CustomLineChart from "./CustomLineChart";
import data from "./data";
// import { useEffect } from "react";
// import { useState } from "react";

function App() {
    // let object = {};
    // const btcData = async () => {
    //     const response = await fetch(
    //         "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146"
    //     );
    //     const json = await response.json();
    //     const data = json.Data.Data;
    //     const times = data.map((obj) => obj.time);
    //     const prices = data.map((obj) => obj.high);
    //     console.log(times, prices);
    //     object.times = times.map((element) => {
    //         return Date(element * 1000);
    //     });
    //     object.prices = prices;
    // };
    // btcData();
    // const [array, setArray] = useState([]);
    // // let array = [];
    // setTimeout(() => {
    //     console.log("time-price", object.times, object.prices);
    //     const arrayTimes = [...object.times];
    //     const arrayPrices = [...object.prices];
    //     setArray(
    //         arrayTimes.map((element, index) => {
    //             return { date: element, price: arrayPrices[index] };
    //         })
    //     );
    //     console.log("there", array);
    //     // const tempObject = { ...object.times, ...object.prices };
    //     // console.log("there", tempObject);
    // }, 2000);

    // useEffect(() => {
    //     const getCountriesData = async () => {
    //         fetch("http://api.bitcoincharts.com/v1/markets")
    //             .then((response) => response.json())
    //             .then((data) => console.log("there", data));
    //     };
    //     getCountriesData();
    // }, []);

    return (
        <div className="app">
            <Portfolio />
            <CustomLineChart data={data.reverse()} />
            {/* <CustomLineChart data={array} />; */}
        </div>
    );
}

export default App;
