import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="my-5 bg-gray-400 flex flex-col justify-center items-center p-2">
            <nav>
                <ul>
                    <Link to="/">
                        <li className="flex justify-center p-7 mb-2 bg-white rounded-md cursor-pointer">
                            {" "}
                            <p className="text-xl">Contact</p>
                        </li>
                    </Link>

                    <Link to="/chart">
                        <li className=" flex justify-center p-7 mb-2 bg-white rounded-md cursor-pointer">
                            {" "}
                            <p className="text-xl">Chart</p>{" "}
                        </li>
                    </Link>

                    <Link to="/map">
                        <li className=" flex justify-center p-7 mb-2 bg-white rounded-md cursor-pointer ">
                            {" "}
                            <p className="text-xl">Map</p>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
