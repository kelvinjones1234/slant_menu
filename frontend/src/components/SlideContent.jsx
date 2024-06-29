import React from "react";
import image1 from "../assets/img/image1.png";
import SlideIndicatorOne from "./SlideIndicatorOne";
import ButtonOne from "./ButtonOne";

const SlideContent = ({ bg, heading, subheading }) => {
  return (
    <>
      <div className="bg-white">
        <div className="relative">
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className={`bg-center bg-cover h-[380px] relative z-[50]`}
          >
            <img
              src={image1}
              alt=""
              className="absolute bottom-[-0.1rem] w-full max-h-[110px]"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="text-center">
              <h3 className="text-[25px] font-[600] inline-block">{heading}</h3>
              <p className="text-[14px] font-[400] pt-5 max-w-[275px] mx-auto">
                {subheading}
              </p>
            </div>
            <SlideIndicatorOne />
            <ButtonOne />
            <p className="text-primary text-[14px] font-[500] text-center mt-5 mb-[4rem]">
              Already Have an Account? Login
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideContent;
