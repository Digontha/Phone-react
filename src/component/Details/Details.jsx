import { useLoaderData, useNavigate } from "react-router-dom";


const Details = () => {
    const data = useLoaderData()
    const mainData = data.data;
    //    console.log(mainData);
    const { brand, mainFeatures, name, releaseDate, image } = mainData
    console.log(brand);
    const navigate = useNavigate()
    function handleBack(){
        navigate(-1)
    }
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="card bg-base-100 shadow-xl border">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{brand}</p>
                    <p>{mainFeatures.storage}</p>
                    <p>{mainFeatures.displaySize}</p>
                    <p>{mainFeatures.chipSet}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        <button onClick={handleBack} className="btn btn-primary">Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;