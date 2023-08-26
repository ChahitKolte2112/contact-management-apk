const Input = ({
    changeHandler,
    name,
    type,
    value,
}: {
    changeHandler: any;
    name: string;
    type: string;
    value: any;
}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-lg font-bold mb-2"
                    htmlFor="username"
                >
                    {name}
                </label>

                <input
                    className={
                        "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    }
                    type={type}
                    name={name}
                    placeholder={name}
                    onChange={changeHandler}
                    value={value}
                />
            </div>
        </>
    );
};

export const EditForm = ({
    formdata,
    changeHandler,
    submitHandler,
    cancelHandler,
}: {
    formdata: any;
    changeHandler: any;
    submitHandler: any;
    cancelHandler: any;
}) => {
    return (
        <div className="max-w-lg  rounded-md bg-slate-200 mx-auto">
            <form
                onSubmit={submitHandler}
                className="  bg-slate-200 rounded-lg px-8 pt-6 pb-8 mb-4"
            >
                <Input
                    type="text"
                    name="firstname"
                    changeHandler={changeHandler}
                    value={formdata?.firstname}
                />
                <Input
                    type="text"
                    name="lastname"
                    changeHandler={changeHandler}
                    value={formdata?.lastname}
                />
              
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-lg font-bold mb-2"
                        htmlFor="username"
                    >
                        Status
                    </label>
                    <select
                        value={formdata?.status}
                        onChange={changeHandler}
                        name="status"
                        className="appearance-none border rounded w-full py-1 cursor-pointer px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        
                    >
                        <option value="true"> Active</option>
                        <option value="false"> Inactive</option>
                    </select>
                </div>

                <div className="flex justify-between gap-5">
                    <button
                        type="button"
                        onClick={cancelHandler}
                        className="bg-red-500 w-[50%] hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                    cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 w-[50%] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        save
                    </button>
                </div>
            </form>
        </div>
    );
};
