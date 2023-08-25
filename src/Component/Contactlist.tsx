import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../utilis/interfaces";
import { contactdataActions } from "../redux/contactdataSlice";
import profileuser from "../assets/profileuser.png";
const Contactlist = () => {
    const dispatch = useDispatch();
    const delethandler = (id: number) => {
        dispatch(contactdataActions.deletedata(id));
    };
    const data = useSelector((state: any) => state.details.data);
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <div className="flex  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {data.map((cd: Contact, index: number) => {
                return (
                    <div
                        key={index}
                        className=" bg-slate-200 flex flex-col items-center m-2 pt-3 pb-3
                       box-border shadow rounded-md text-lg"
                    >
                        <img src={profileuser} className="w-14 h-14 m-2" />
                        <h2 className="font-medium">
                            FirstName :{" "}
                            <span className="font-normal">{cd.firstname}</span>
                        </h2>
                        <h2 className="font-medium">
                            LastName:{" "}
                            <span className="font-normal">{cd.lastname}</span>
                        </h2>
                        <h2 className="font-medium">
                            Status:{" "}
                            <span className="font-normal">{cd.status}</span>
                        </h2>
                        <div className="m-3">
                            <button className="bg-green-600 p-2 text-lg text-white mr-3 rounded-md">
                                Edit
                            </button>
                            <button className="bg-red-600 p-2 ml-3 text-lg text-white rounded-md">
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Contactlist;
