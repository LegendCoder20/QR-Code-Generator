import React from "react";
import {useState} from "react";
import axios from "axios";
import QrCode from "./QrCode";

function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const hUrl = (e) => {
    setQrCodeUrl("");
    setError(null);
    setUrl(e.target.value);
  };

  // Fetching QR CODE LOGIC

  const fetchQRCode = async (e) => {
    e.preventDefault();

    if (!url) {
      setError("URL is Empty");
      return;
    }

    try {
      if (url.includes("http") || url.includes("www")) {
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;
        const userEncodedUrl = encodeURIComponent(url);
        const response = await axios.get(apiUrl + userEncodedUrl, {
          responseType: "blob",
        });
        const qrCodeBlobUrl = URL.createObjectURL(response.data);
        setQrCodeUrl(qrCodeBlobUrl);

        setError(null);
      } else {
        setError("Please Enter Correct URL");
        console.log("Please Enter Correct URL");
      }
    } catch (error) {
      setError("Some Error Occured while Generating QR Code");
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="  pt-5 h-20 text-3xl text-center font-bold bg-black text-lime-400 ">
        QR Code Generator
      </div>

      <div className="flex justify-evenly lg:mt-24 md:mt-16 mt-8 flex-wrap pt-sans-regular-italic">
        {/* Input Box Code  */}
        <div className="  w-96  text-center">
          <div className="lg:mb-5 md:mb-4  mb-6 ">
            <div className="p-2 font-bold text-lg">
              Enter The URL of the Site
            </div>
            <input
              type="text"
              value={url}
              onChange={hUrl}
              placeholder="eg. https://www.google.co.in/"
              className="border-2 border-black p-2 rounded-md lg:w-96 md:w-96 w-72 lg:mb-0 md:mb-6 "
            />
          </div>
          <button
            type="submit"
            onClick={fetchQRCode}
            className="bg-black text-white font-medium h-8 w-36 mb-4 rounded-md "
          >
            Generate QR Code
          </button>
          <div className="mb-6 font-extrabold text-red-500">{error}</div>
        </div>
        {/* Input Box Code  */}

        {/* QR Box Code  */}

        <div className=" text-center">
          <QrCode url={url} qrCodeUrl={qrCodeUrl}></QrCode>
        </div>
        {/* QR Box Code  */}
      </div>
    </React.Fragment>
  );
}

export default Home;
