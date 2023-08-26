import React, { useState } from "react";
import { ErrorForm, FormData } from "../utilis/interfaces";
import { contactdataActions } from "../redux/contactdataSlice";
import { useDispatch } from "react-redux";
import Contactlist from "./Contactlist";

const Content = (props: any) => {
    const dispatch = useDispatch();

    const [toggle, setToggle] = useState<boolean>(false);
    const [contact, setContact] = useState<FormData>({
        firstname: "",
        lastname: "",
        status: "",
    });

    const [error, setError] = useState<ErrorForm>({
        firstname: false,
        lastname: false,
        status: false,
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(e.target.name, e.target.value);
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
        setError((prevError) => ({
            ...prevError,
            [name]: false,
        }));
    };
    const submitHandler = (e: any) => {
        e.preventDefault();
        let temp: ErrorForm = {
            firstname: false,
            lastname: false,
            status: false,
        };
        if (contact.firstname === "") {
            temp = { ...temp, firstname: true };
        }
        if (contact.lastname === "") {
            temp = { ...temp, lastname: true };
        }
        if (contact.status === "") {
            temp = { ...temp, status: true };
        }

        setError(temp);

        if (contact.firstname && contact.lastname && contact.status !== "") {
            dispatch(contactdataActions.adddata(contact));
            setContact({
                firstname: "",
                lastname: "",
                status: "",
            });
        }
    };

    const handleToggle = () => {
        setToggle((prev) => {
            return (prev = !prev);
        });
    };

    return (
        <div className="w-[full]">
            <div className="flex justify-center m-2">
                {!props.selected && (
                    <button
                        className="bg-blue-600 p-3 text-lg text-white mr-3 rounded-md"
                        onClick={handleToggle}
                    >
                        Create New Contact
                    </button>
                )}
            </div>
            {toggle && (
                <div className="max-w-lg  rounded-md bg-slate-200 mx-auto">
                    <form
                        onSubmit={submitHandler}
                        className="  bg-slate-200 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
                    >
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-lg font-bold mb-2"
                                htmlFor="username"
                            >
                                Firstname
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                id="FirstName"
                                type="text"
                                name="firstname"
                                placeholder="Firstname"
                                onChangeCapture={changeHandler}
                                value={contact.firstname}
                            />
                        </div>
                        {error.firstname && (
                            <p className="text-red-700 mt-[-10px]">
                                Firstname is required
                            </p>
                        )}
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-lg font-bold mb-2"
                                htmlFor="LastName"
                            >
                                LastName
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                id="username"
                                type="text"
                                name="lastname"
                                placeholder="Lastname"
                                onChangeCapture={changeHandler}
                                value={contact.lastname}
                            />
                        </div>
                        {error.lastname && (
                            <p className="text-red-700 mt-[-10px]">
                                Lasttname is required
                            </p>
                        )}
                        <div className="flex items-center   space-x-4">
                            <h3 className="text-gray-700 text-lg font-bold mb-2">
                                Status
                            </h3>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    onChange={changeHandler}
                                    type="radio"
                                    name="status"
                                    className="form-radio text-black-500"
                                    value="true"
                                />
                                <span className="text-md font-semibold text-gray-700">
                                    Active
                                </span>
                            </label>

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    onChange={changeHandler}
                                    type="radio"
                                    name="status"
                                    className="form-radio text-red-500"
                                    value="false"
                                />
                                <span className="text-md font-semibold text-gray-700">
                                    Inactive
                                </span>
                            </label>
                            {error.status && (
                                <p className="text-red-700 mt-[-10px]">
                                    Status is required
                                </p>
                            )}
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 w-[50%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <div className="p-4">
                <Contactlist />
            </div>
        </div>
    );
};

export default Content;
