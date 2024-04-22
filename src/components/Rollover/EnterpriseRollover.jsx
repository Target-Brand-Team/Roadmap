import React from "react";

const EnterpriseRollover = ({
  width,
  height,
  marginLeft,
  marginTop,
  text,
  backgroundColor,
  left,
  top,
}) => {


  const imageStyle = {
    backgroundColor,
    color: "white",
    width: width,
    height,
    borderRadius: "6px",
    left: left,
    top: top,
    text: text,
    position: "absolute"
  };

  return (
    <div>
      <div
        style={imageStyle}
        className="flex justify-center items-center font-semibold text-gray-700 hover:scale-95 transition-all cursor-pointer"
      >
        {text}
      </div>
    </div>
  );
};

export default EnterpriseRollover;
