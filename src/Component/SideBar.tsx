const SideBar = () => {
    return (
        <div className=" my-5 bg-gray-400 flex flex-col justify-center items-center p-2">
            <nav>
                <ul>
                    <li className="border-2 flex justify-center p-7 mb-2">
                        {" "}
                        <h1>Contact</h1>
                    </li>
                    <li className="border-2 flex justify-center p-7">
                        {" "}
                        <h1>Charts and Map</h1>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
