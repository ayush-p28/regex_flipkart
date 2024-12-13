import { useState, useEffect } from 'react';
import Compare from "./Compare";
import logo1 from "/images/fruit.gif";
import logo2 from "/images/research.gif";

import FreshTable from "./FreshtableData";
import ProductTable from "./ProductTableData";
import { sendBase64ImageAndAppendRow } from "../utils/callAPI"
import { sendBase64ImgProduct } from "../utils/callProductAPI"


function drop() {

    const [base64, setBase64] = useState(null);
    const [base64Imager, setBase64Image] = useState(null);
    const [resultr, setResult] = useState(null);


    // const [respon, setRespon] = useState(null);

    const [selectedModel, setSelectedModel] = useState("freshness");

    // Function to handle file input change
    const handleFileChange = (e) => {
        setBase64Image(null);
        setResult(null);
        setBase64(null)
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64Content = reader.result;
                setBase64(base64Content);
                console.log(reader.result);

                handleImageProcessing(reader.result);
            };

            // Read the file as a data URL (Base64)
            reader.readAsDataURL(file);

            document.getElementById('temp').style.display = 'none';
        }
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth' // Optional: Adds smooth scrolling
            });
        }, 100);

    }

    const handleImageProcessing = async (readerResult) => {
        try {

            if (selectedModel === "freshness") {
                // Call the async utility function and wait for the response
                const response = await sendBase64ImageAndAppendRow(
                    readerResult.replace(/^data:image\/\w+;base64,/, "")
                );
                // setRespon(response); // Update the state
                if (response) { // Use response directly
                    const { deteted_image, result } = response;
                    setBase64Image("data:image/jpeg;base64," + deteted_image);
                    setResult(result);
                }
            } else {
                const response = await sendBase64ImgProduct(
                    readerResult.replace(/^data:image\/\w+;base64,/, "")
                );
                // setRespon(response); // Update the state
                if (response) { // Use response directly
                    const { deteted_image, result } = response;
                    setBase64Image("data:image/jpeg;base64," + deteted_image);
                    setResult(result);
                }
            }
            

        } catch (error) {
            console.error("Error processing image:", error);
        }
    }


    const handleChange = (e) => {
        setSelectedModel(e.target.value);
    };

    return (
        <>

            <div className="items-center justify-center text-center">
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white mt-8">Select Model?</h3>
                <ul className="grid w-1/2 gap-6 md:grid-cols-2 mx-auto">
                    <li>
                        <input
                            type="radio"
                            id="freshness"
                            name="hosting"
                            value="freshness"
                            className="hidden peer"
                            checked={selectedModel === "freshness"}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="freshness" // Corrected to match the id of the input
                            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-[#FACA15] peer-checked:border-[#FACA15] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-950 dark:hover:bg-gray-900"
                        >
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Freshness Detection</div>
                                <div className="w-full">for apple, tomato, mango, capsicum, broccoli, papaya, banana</div>
                            </div>
                            <svg
                                className="w-5 h-5 ms-3 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="product"
                            name="hosting"
                            value="product"
                            className="hidden peer"
                            checked={selectedModel === "product"}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="product" // Corrected to match the id of the input
                            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-[#38bdf8] peer-checked:border-[#38bdf8] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-950 dark:hover:bg-gray-900"
                        >
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Product Detection</div>
                                <div className="w-full">for clinic plus, colgate, tide, maggi, pepsi, harpic, lays, parle-g, tata salt, tata agni</div>
                            </div>
                            <svg
                                className="w-5 h-5 ms-3 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </label>
                    </li>
                </ul>



                <div className="flex items-center justify-center w-1/2 mx-auto py-6">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-[#000000] dark:bg-opacity-75 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-950">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="animate-bounce w-10 h-10 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="m-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="m-2 text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                </div>

                {base64 && (
                    <div>
                        {/* <h3>Base64 Output:</h3>
                        <textarea
                            readOnly
                            value={base64}
                            rows="5"
                            style={{ width: '100%' }}
                        /> */}

                        {selectedModel === "freshness" && <Compare uploadedImage1={base64} uploadedImage2={base64Imager} logo={logo1} />}
                        {selectedModel === "freshness" && <FreshTable result={resultr} />}

                        {selectedModel === "product" && <Compare uploadedImage1={base64} uploadedImage2={base64Imager} logo={logo2} />}
                        {selectedModel === "product" && <ProductTable result={resultr} />}

                        {/* <h3>Image Preview:</h3> */}


                    </div>
                )}
            </div>
        </>
    )
}

export default drop;

