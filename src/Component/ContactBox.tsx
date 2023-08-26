import { Contact } from "../utilis/interfaces";
import profileuser from "../assets/profileuser.png";
import { useDispatch } from "react-redux";
import { contactdataActions } from "../redux/contactdataSlice";
import { useState } from "react";
import { EditForm } from "./EditForm";

export const ContactBox = ({ data }: { data: Contact }) => {
    const dispatch = useDispatch();
    const deletehandler = (id: number) => {
        dispatch(contactdataActions.deletedata(id));
    };
    const [edit, setEdit] = useState<boolean>(false);

    const [formData, setFormData] = useState<Contact>({
        id: data?.id,
        firstname: data?.firstname,
        lastname: data?.lastname,
        status: data?.status,
    });
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(e.target.name);
        console.log(e.target.value);
    };
    const submitHandler = (e: Event) => {
        e.preventDefault();
        console.log(formData);
        dispatch(contactdataActions?.editData1(formData));
        setEdit(false);
    };
    const cancelHandler = () => {
        setEdit(false);
        setFormData({
            id: data?.id,
            firstname: data?.firstname,
            lastname: data?.lastname,
            status: data?.status,
        });
    };

    return (
        <>
            <div
                key={data.id}
                className=" bg-slate-200 flex flex-col items-center m-2 pt-3 pb-3
                       box-border shadow rounded-md text-lg"
            >
                {edit ? (
                    <EditForm
                        formdata={formData}
                        cancelHandler={cancelHandler}
                        changeHandler={changeHandler}
                        submitHandler={submitHandler}
                    />
                ) : (
                    <>
                        <img
                            src={profileuser}
                            className="w-14 h-14 m-2"
                            alt="Profie"
                        />
                        <h2 className="font-medium">
                            FirstName :{" "}
                            <span className="font-normal">
                                {data.firstname}
                            </span>
                        </h2>
                        <h2 className="font-medium">
                            LastName:{" "}
                            <span className="font-normal">{data.lastname}</span>
                        </h2>
                        <h2 className="font-medium">
                            Status:{" "}
                            <span className="font-normal">
                                {data.status ? "Active" : "Inactive"}
                            </span>
                        </h2>
                        <div className="m-3">
                            <button
                                className="bg-green-600 p-2 text-lg text-white mr-3 rounded-md"
                                onClick={() => setEdit(true)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-600 p-2 ml-3 text-lg text-white rounded-md"
                                onClick={() => {
                                    deletehandler(data.id);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
