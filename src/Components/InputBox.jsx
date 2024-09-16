import React from "react";
import {useState} from "react";

function InputBox() {
  const [url, setUrl] = useState("");

  return (
    <React.Fragment>
      <div className=" ">
        <div className="">Enter The URL of the Site</div>
        <input
          type="text"
          value={url}
          className="border-2 border-black p-2 rounded-md"
        />
      </div>
    </React.Fragment>
  );
}

export default InputBox;
