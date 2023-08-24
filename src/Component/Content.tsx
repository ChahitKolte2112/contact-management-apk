import React, { useState } from "react";
import { Contact, ErrorForm } from "../utilis/interfaces";
const Content = () => {
    const [data, setData] = useState<Contact[]>([]);
    const [contact, setContact] = useState<Contact>({
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
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
        setError((prevError) => ({
            ...prevError,
            [name]: false,
        }));
    };
    const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
    return (
        <div className="w-[full]">
            <div className="w-full max-w-md mx-auto">
                <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Firstname
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            id="FirstName"
                            type="text"
                            placeholder="Firstname"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="LastName"
                        >
                            LastName
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            id="username"
                            type="text"
                            placeholder="Lastname"
                        />
                    </div>
                    <div className="flex items-center  space-x-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                onChange={changeHandler}
                                type="radio"
                                name="status"
                                className="form-radio text-black-500"
                                value="true"
                            />
                            <span className="text-sm font-semibold text-gray-700">
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
                            <span className="text-sm font-semibold text-gray-700">
                                Inactive
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 w-[50%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Content;
