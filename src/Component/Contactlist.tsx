import { useSelector } from "react-redux";
import { Contact } from "../utilis/interfaces";
import { ContactBox } from "./ContactBox";

const Contactlist = () => {
    const data = useSelector((state: any) => state.details.data);

    return (
        <>
            <div className="flex justify-center  text-lg text-black ">
                {data.length === 0 && (
                    <h1 className="text-xl font-semibold">NO CONTACT FOUND </h1>
                )}
            </div>
            <div className="flex  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {data.map((cd: Contact, index: number) => {
                    return <ContactBox data={cd} />;
                })}
            </div>
        </>
    );
};

export default Contactlist;
