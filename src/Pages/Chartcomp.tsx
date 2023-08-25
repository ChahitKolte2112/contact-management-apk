import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
// import {
//     IoBagHandle,
//     IoPieChart,
//     IoBriefcaseSharp,
//     IoPeople,
//   } from "react-icons/io5";
import {
    Chart,
    CategoryScale,
    LinearScale, 
    LineElement,
    PointElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement);

const LineCharts = () => {
    const [data, setData] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
            );
            setData(result.data);
        };

        fetchData();
    }, []);
    console.log(data);

    const chartData = {
        labels: Object.keys(data.cases || {}),
        datasets: [
            {
                label: "Cases",
                data: Object.values(data.cases || {}),
                fill: false,
                borderColor: "rgba(75,192,192,1)",
                tension: 0.1,
            },
        ],
    };

    return (
        <>
        <div className="flex gap-3">
        {
        /* <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBriefcaseSharp className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Cases
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {data.cases}
              </strong>

              <span className="text-sm text-green-500 pl-2">+343</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
            <IoPieChart className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Deaths
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {data.deaths}
              </strong>
              <span className="text-sm text-green-500 pl-2">-343</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Recovered
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {data.recovered}
              </strong>
              <span className="text-sm text-red-500 pl-2">-30</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Active Cases
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {data.active}
              </strong>
              <span className="text-sm text-red-500 pl-2">-43</span>
            </div>
          </div>
        </BoxWrapper> */}
      </div>
            {" "}
            <h1 className="text-2xl font-bold mb-4 text-center">
                Covid-19 Historical Data
            </h1>
            <div className="bg-white p-4  flex justify-center rounded-md mt-1 shadow-lg border-red-400 ">
                <div className=" w-[75%] flex justify-center">
                    {Object.keys(data).length > 0 && (
                        <Line className="border-3" data={chartData} />
                    )}
                </div>
            </div>
        </>
    );
};

export default LineCharts;
