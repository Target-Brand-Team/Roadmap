import React from "react";

const OwnedBrandRollover = ({
  width,
  height,
  text,
  backgroundColor,
  image,
  left,
  top,
}) => {

  const imageStyle = {
    backgroundColor,
    color: "white",
    width: width,
    height,
    borderRadius: "25px",
    text: text,
    left: left,
    top: top,
    position: "absolute"
  };

  

  return (
    <>
      <div style={imageStyle} className="btn-3 bg-gray-200 flex items-center font-semibold text-gray-700  hover:scale-95 duration-500 transition-all cursor-pointer">
     

        <img src={image} alt="logo" className="w-12 h-12"/>
     

     </div>
    </>
  );
};

export default OwnedBrandRollover;
