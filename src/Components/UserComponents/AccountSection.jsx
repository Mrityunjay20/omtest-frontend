import React from "react";

//do not fetch details from local storage fetch it from backend
export default function Account() {
  return (
    <div className="p-8 w-full">
      <h2 className="pb-4">{localStorage.getItem("displayName")}</h2>
      <div>
        <p>{localStorage.getItem("email")}</p>
      </div>
      {/* <div className="flex p-4 sm:justify-end">
        <button className="px-8 py-2 bg-black text-white rounded-lg ">
          RESET PASSWORD
        </button>
      </div> */}
    </div>
  );
}
