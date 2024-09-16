import React from "react";

function QrCode({url, qrCodeUrl}) {
  return (
    <React.Fragment>
      <div className="pt-sans-regular-italic mb-10 text-center">
        {qrCodeUrl ? (
          <>
            <div className="font-bold mb-4 lg:w-60 md:w-48 w-44  text-center overflow-auto">
              {url}
            </div>
            <img src={qrCodeUrl} alt="QR Code" className="lg:h-56 mb-8 h-44" />
            <a
              href={qrCodeUrl}
              download="QR-Code.png"
              className="bg-blue-600 text-white font-bold w-32 p-2 rounded-md "
            >
              Download
            </a>
          </>
        ) : (
          <>
            <div className="font-medium w-72">
              <p className="font-extrabold mb-2 text-lg">Instruction</p> Please
              Enter Web URL in the Input box to Generate the QR Code
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default QrCode;
