"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="relative w-[1920px] h-[1128px] bg-[#F2F2F2] overflow-hidden">
      {/* Ellipse Background */}
      <div
        className="relative"
        style={{
          width: "703.98px",
          height: "703.98px",
          top: "236.47px",
          left: "88.62px",
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/Ellipse1.png"
            alt="About"
            width={704}
            height={704}
            className="w-[703.98px] h-[703.98px] object-contain"
          />
        </div>
      </div>

      {/* Mobile 3 - Left Side */}
      <div
        className="absolute"
        style={{
          width: "500px",
          height: "780px",
          top: "150px",
          left: "20px",
          transform: "rotate(-2deg)",
          transformOrigin: "center center",
          zIndex: 9,
        }}
      >
        <Image
          src="/Mobile3.png"
          alt="About3"
          width={330}
          height={680}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundColor: "transparent",
          }}
        />
      </div>

      {/* Mobile 2 - Right Side */}
      <div
        className="absolute"
        style={{
          width: "700px",
          height: "919px",
          top: "130px",
          left: "250px",
          transform: "rotate(-2deg)",
          transformOrigin: "center center",
          zIndex: 10,
        }}
      >
        <Image
          src="/Mobile2.png"
          alt="Aboutpg1"
          width={398}
          height={820}
          className="w-full h-full object-contain bg-transparent"
        />
      </div>

      {/* Right Side */}
      <div
        className="absolute"
        style={{
          top: "106.67px",
          left: "1026.67px",
          width: "762.67px",
        }}
      >
        {/* Heading */}
        <h2 className="h-[171px] text-[78.67px] leading-[85.33px] tracking-[-0.05em] font-[600] text-[#222222] font-avant-garde">
          Where Every Click Sparks a Connection!
        </h2>

        {/* Paragraph */}
        <p className="mt-[40px] h-[67px] text-[21.33px] leading-[33.33px] tracking-[0] text-[#525252] font-[400] font-open-sans">
          A small act of kindness today can create a lifetime of impact for
          someone in need. Give from the heart and change a life!
        </p>

        {/* Cards */}
        <div className="flex flex-col gap-[32px] mt-[40px]">
          {[
            {
              icon: "🎥",
              title: "Short Videos & Reels",
              desc: "Share engaging, bite-sized content that keeps everyone entertained.",
            },
            {
              icon: "🔔",
              title: "Smart Notifications",
              desc: "Stay updated on what matters without the noise.",
            },
            {
              icon: "👥",
              title: "Interest-Based Communities",
              desc: "Join groups and discussions that match your passion.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="w-[762.67px] h-[190.33px] p-[32px] rounded-[21.33px] bg-[#F2F2F2] flex items-center justify-center"
              style={{
                boxShadow:
                  "5px 5px 10px 0px #0000001A, -3px -3px 10px 0px #FFFFFF",
              }}
            >
              <div className="w-[698.67px] h-[126.33px] flex flex-col justify-center gap-[21.33px]">
                <h3 className="text-[32px] leading-[37.33px] tracking-[-0.04em] font-[600] text-[#222222] font-avant-garde">
                  {card.icon} {card.title}
                </h3>
                <p className="text-[#525252] font-[500] text-[21.33px] leading-[33.33px] tracking-[0] font-avant-garde">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
