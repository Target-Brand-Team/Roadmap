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
        className="btn-2 text-center font-semibold text-sm hover:scale-95 transition-all cursor-pointer"
      >
        {text}
      </div>
    </div>
  );
};

export default EnterpriseRollover;
