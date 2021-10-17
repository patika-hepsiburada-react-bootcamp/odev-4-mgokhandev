import React from "react";
import Lottie from "react-lottie";

const Icon = ({ title }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:
      title === "Clouds" || title === "Rain" || title === "Clear"
        ? require(`../../assets/${title}.json`)
        : require(`../../assets/Clouds.json`),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  console.log(title);
  return (
    <div>
      <div className="Icon">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Icon;
