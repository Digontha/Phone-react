import { useLoaderData } from "react-router-dom";
import Iphone from "./Iphone";


const Iphones = () => {
       
    const data = useLoaderData()

  const mainData=data.data;

    return (
        <div className="grid grid-cols-3 lg:w-[70%] mx-auto gap-4 mt-10">
            {
                mainData.map(iphone=><Iphone iphone={iphone}></Iphone>)
            }
        </div>
    );
};

export default Iphones;