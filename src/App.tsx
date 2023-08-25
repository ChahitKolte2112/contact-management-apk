import React from "react";
import Header from "./Component/Header";
import SideBar from "./Component/SideBar";
import Content from "./Component/Content";
import Map from "./Pages/Map";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LineCharts from "./Pages/Chartcomp";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <div className=" h-full ">
                                <div className="flex gap-3">
                                    <div className="bg-slate-100  p-10 h-screen flex-2">
                                        <SideBar />
                                    </div>
                                    <div className="flex-1">
                                        <Content />
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                />
                <Route
                    path="/map"
                    element={
                        <div className="border-2 ">
                            <Map />
                        </div>
                    }
                ></Route>
                <Route
                    path="/chart"
                    element={
                        <div className="p-5">
                            <LineCharts />
                        </div>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
