import React from "react";
import Header from "./Component/Header";
import SideBar from "./Component/SideBar";
import Content from "./Component/Content";

const App = () => {
    return (
        <div>
            <Header />
            <div className=" h-full ">
                <div className="flex gap-3">
                    <div className="border-2  flex-2">
                        <SideBar />
                    </div>
                    <div className="border-2 flex-1">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
