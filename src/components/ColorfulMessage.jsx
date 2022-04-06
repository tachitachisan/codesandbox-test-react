import React from "react";

export const ColorfulMessage = (props) => {
  //分割代入
  const { color, children } = props;
  //console.log(props);

  const contentStyle = {
    color,
    //下記を上のように省略している
    //color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
