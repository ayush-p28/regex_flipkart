import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { useState, useEffect } from "react";
// import fruit_load from "/images/fruit.gif";
// import product_load from "/images/research.gif";
import upload_wali from "/images/upload.gif";

export default function App({ uploadedImage1, uploadedImage2, uploadedImage3, logo }) {

  const [inputSrc, setInputSrc] = useState("");
  const imgSrc = uploadedImage2 || "";

  useEffect(() => {
    if (uploadedImage3 === true) {
      // Show the input image immediately if uploadedImage3 is true
      setInputSrc(uploadedImage1);
    } else {
      // Show the input image after 5 seconds if uploadedImage3 is not true
      const timer = setTimeout(() => {
        setInputSrc(uploadedImage1);
      }, 5000);

      // Cleanup timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [uploadedImage1, uploadedImage3]);

  return (
    <div className="grid gap-6 md:grid-cols-3 mx-auto md:mx-12 py-24">
      {/* INPUT Section */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h3 className="text-silvertxt text-2xl font-bold mb-4">INPUT</h3>
        {inputSrc ? (
          <img
            className="h-auto w-auto max-h-[400px] max-w-[100%] object-contain"
            src={inputSrc}
            alt="Output"
          />
        ) : (
          <div
            role="status"
            className="flex items-center justify-center h-[400px] w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
          >
            <img src={upload_wali} className="w-48 h-48" alt="" />

            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>

      {/* OUTPUT Section */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h3 className="text-silvertxt text-2xl font-bold mb-4">OUTPUT</h3>
        {imgSrc ? (
          <img
            className="h-auto w-auto max-h-[400px] max-w-[100%] object-contain"
            src={imgSrc}
            alt="Output"
          />
        ) : (
          <div
            role="status"
            className="flex items-center justify-center h-[400px] w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
          >
            <img src={logo} className="w-32 h-32" alt="" />

            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>

      {/* COMPARE Section */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h3 className="text-silvertxt text-2xl font-bold mb-4">COMPARE</h3>
        {imgSrc ? (
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={uploadedImage1}
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={imgSrc}
                alt="Image two"
              />
            }
          />
        ) : (
          <div
            role="status"
            className="flex items-center justify-center h-[400px] w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
          >
            <img src={logo} className="w-32 h-32" alt="" />
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}
