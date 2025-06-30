"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-[1920px] h-[1312px] bg-[#F2F2F2] text-white overflow-hidden">
      <div className="relative w-[1920px] h-[1163px] bg-[#FF5349] text-white overflow-visible">
        {/* Mybindle Logo - Centered */}
        <div className="absolute top-[64px] left-1/2 -translate-x-1/2 flex gap-[20px] items-start">
          <Image src="/Group.png" alt="Logo" width={74.25} height={80} />
          <div
            className="text-4xl font-bold"
            style={{
              width: "228.85px",
              height: "47.44px",
              paddingTop: "16.75px",
            }}
          >
            Mybindle
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-[131px] pt-[234px] text-[#FAFAFA]">
          {/* Left: Text Content */}
          <div>
            {/* Hero Heading */}
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                fontWeight: 600,
                fontSize: "clamp(100px, 7vw, 85px)",
                lineHeight: "118px",
                letterSpacing: "-0.03em",
                maxWidth: "851px",
              }}
            >
              Stay Connected
              <br />
              Stay Social
              <br />
              Stay You!
            </div>

            {/* Paragraph */}
            <div
              className="mt-10 max-w-[817px] h-[144px] top-[603px] left-[131px]"
              style={{
                fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                fontWeight: 600,
                fontSize: "23px",
                lineHeight: "36px",
              }}
            >
              A place where friendships grow, communities thrive, and moments
              turn into unforgettable experiences. Whether you're looking to
              reconnect with old friends, build new relationships, or share what
              matters most to you – MyBindle is your home on the internet.
            </div>

            {/* CTA Button */}
            <button
              className="mt-10 top-[777px] left-[126px] bg-white text-[#FF5349] text-lg font-bold"
              style={{
                width: "243.98px",
                height: "74.4px",
                borderRadius: "12.11px",
              }}
            >
              Get Started
            </button>
          </div>

          {/* Right: Mobile Image with Overlay */}
          <div className="flex justify-end items-start">
            <div className="relative w-[565px] h-auto">
              {/* Main Mobile Image */}
              <Image
                src="/Mobile1.png"
                alt="Mobile Illustration"
                width={468.42}
                height={987.32}
                className="w-full h-auto object-contain"
              />
              {/* Overlay Card Image on top-left */}
              <Image
                src="/card1.png"
                alt="Card Overlay"
                width={460}
                height={105}
                className="absolute top-10 -left-30 rounded-[21.33px]"
                style={{
                  padding: "5px",
                  gap: "10.67px",
                }}
              />

              {/* Overlay Card Image on bottom-right */}
              <Image
                src="/card2.png"
                alt="Card Overlay"
                width={396}
                height={105}
                className="absolute bottom-46 -right-12 rounded-[21.33px]"
                style={{
                  padding: "5px",
                  gap: "10.67px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
