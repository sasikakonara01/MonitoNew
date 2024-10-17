import React from "react";

function NewsCardUnit({ Description, image, Title, Tag }) {
  return (
    <div className="box shadow-lg rounded-lg overflow-hidden bg-white p-2 mt-5">
      <div className="image w-full h-48">
        <img
          src={image}
          alt={`Image of ${Title}`}
          className="w-full h-full object-cover p-1"
        />
      </div>
      <div className="p-4">
        <p className=" w-3/4 lg:w-[8vw] h-5  text-xs flex justify-start bg-cyan-500 text-white rounded-full px-2 ">
          {Tag}
        </p>
        <h3 className="text-lg text-[#003459] font-semibold mb-2">{Title}</h3>
        <p className="text-sm">{Description}</p>
      </div>
    </div>
  );
}

export default NewsCardUnit;
