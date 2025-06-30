import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-[1920px] h-[868.67px] relative">
      <div
        className="w-[1813.33px] h-[738.67px] absolute rounded-t-[53.33px] bg-[#FF5349]"
        style={{
          top: "130.67px",
          left: "53.33px",
          boxShadow: "inset 4px 4px 8px 0px #0000001A",
        }}
      >
        <div className="w-[894.67px] h-[321.33px] absolute top-[106.67px] left-[128px] flex flex-col gap-[21.33px]">
          <div
            className="w-[894.67px] h-[180px] text-white font-[600] text-[74.67px] leading-[120%] tracking-[-1.33px]"
            style={{ fontFamily: '"ITC Avant Garde Gothic Std", sans-serif' }}
          >
            Join the Fun – Download MyBindle Now!
          </div>
          <div
            className="w-[470px] h-[120px] text-white font-[600] text-[24px] leading-[40px] tracking-[0px]"
            style={{ fontFamily: '"ITC Avant Garde Gothic Std", sans-serif' }}
          >
            Your Social Network, Your Way
            <br />
            Download MyBindle Now and Be a Part of a Community That’s Always
            Evolving!
          </div>

          <div
            className="absolute flex"
            style={{
              width: "526.67px",
              height: "80px",
              top: "360px",
              left: "0px",
              gap: "26.67px",
            }}
          >
            <div
              className="overflow-hidden"
              style={{
                width: "250.67px",
                height: "80px",
                borderRadius: "133.33px",
              }}
            >
              <img
                src="/App Store.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="overflow-hidden"
              style={{
                width: "250.67px",
                height: "80px",
                borderRadius: "133.33px",
              }}
            >
              <img
                src="/Play Store.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative"
        style={{
          width: "394.01px",
          height: "812.56px",
          top: "57px",
          left: "1422.01px",
        }}
      >
        <Image
          src="/FooterM1.png" // Image path should be in /public folder
          alt="PNG Illustration"
          width={394.01}
          height={812.56}
          className="object-contain object-bottom w-full h-full"
        />
      </div>

      <div
        className="absolute"
        style={{
          width: "394.01px",
          height: "810px", // reduced slightly from 812.56
          top: "57px",
          left: "960px",
        }}
      >
        <Image
          src="/FooterM2.png"
          alt="PNG Illustration"
          width={394.01}
          height={810}
          className="object-contain object-bottom w-full h-full"
        />
      </div>
    </section>
  );
};

export default Footer;
