"use client";

import React from "react";

const Service = () => {
  return (
    <div
      className="w-[1920px] h-[908px] bg-[#F2F2F2] text-black flex flex-col items-center"
      style={{
        marginTop: "149px",
        paddingTop: "80px",
      }}
    >
      <h2
        className="text-center w-[1036px] h-[86px]"
        style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 600,
          fontSize: "78.67px",
          lineHeight: "85.33px",
          letterSpacing: "-0.05em",
        }}
      >
        Features That Keep You Hooked!
      </h2>

      <div
        className="w-[954.66px] h-[34px] text-center mx-auto"
        style={{
          fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
          fontWeight: 600,
          fontSize: "26px",
          lineHeight: "33.33px",
          letterSpacing: "0%",
        }}
      >
        Meet, Chat, Share – Anytime, Anywhere!
      </div>
      <div className="flex flex-col items-center gap-[80px] mt-[80px]">
        {/* Row 1 */}
        <div className="flex justify-center gap-[42.67px] flex-wrap">
          {/* CARD 1 */}
          <div
            className="w-[517.33px] h-[244.66px] rounded-[21.33px] p-[42.67px] bg-white text-black"
            style={{
              boxShadow:
                "-3px -3px 10px 0px #FFFFFF, 5px 5px 10px 0px #0000001A",
            }}
          >
            <div
              className="flex flex-col items-center text-center mx-auto"
              style={{
                width: "432px",
                height: "159.33px",
                gap: "21.33px",
              }}
            >
              <h3
                className="text-[32px] font-semibold leading-[37.33px]"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  letterSpacing: "-0.04em",
                  width: "432px",
                  height: "38px",
                }}
              >
                🔥 Seamless Connections
              </h3>
              <p
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  fontWeight: 500,
                  fontSize: "21.33px",
                  lineHeight: "33.33px",
                  width: "333px",
                  height: "100px",
                }}
              >
                Stay in touch with friends, family, and like-minded people with
                just a tap.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="w-[517.33px] h-[244.66px] rounded-[21.33px] p-[42.67px] bg-white text-black"
            style={{
              boxShadow:
                "-3px -3px 10px 0px #FFFFFF, 5px 5px 10px 0px #0000001A",
            }}
          >
            <div
              className="flex flex-col items-center text-center mx-auto"
              style={{
                width: "432px",
                height: "159.33px",
                gap: "21.33px",
              }}
            >
              <h3
                className="text-[32px] font-semibold leading-[37.33px]"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  letterSpacing: "-0.04em",
                  width: "432px",
                  height: "38px",
                }}
              >
                📸 Share Your Story
              </h3>
              <p
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  fontWeight: 500,
                  fontSize: "21.33px",
                  lineHeight: "33.33px",
                  width: "333px",
                  height: "100px",
                }}
              >
                Upload photos, videos, and updates to let the world know what’s
                happening in your life.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="w-[517.33px] h-[244.66px] rounded-[21.33px] p-[42.67px] bg-white text-black"
            style={{
              boxShadow:
                "-3px -3px 10px 0px #FFFFFF, 5px 5px 10px 0px #0000001A",
            }}
          >
            <div
              className="flex flex-col items-center text-center mx-auto"
              style={{
                width: "432px",
                height: "159.33px",
                gap: "21.33px",
              }}
            >
              <h3
                className="text-[32px] font-semibold leading-[37.33px]"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  letterSpacing: "-0.04em",
                  width: "432px",
                  height: "38px",
                }}
              >
                💬 Real-Time Chat
              </h3>
              <p
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  fontWeight: 500,
                  fontSize: "21.33px",
                  lineHeight: "33.33px",
                  width: "333px",
                  height: "100px",
                }}
              >
                Whether it&apos;s a DM or a group conversation, connect instantly
                with smooth, lightning-fast messaging.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 - Same cards again */}
        <div className="flex justify-center gap-[42.67px] flex-wrap">
          {/* Duplicate cards */}
          {/* CARD 4 */}
          <div
            className="w-[517.33px] h-[244.66px] rounded-[21.33px] p-[42.67px] bg-white text-black"
            style={{
              boxShadow:
                "-3px -3px 10px 0px #FFFFFF, 5px 5px 10px 0px #0000001A",
            }}
          >
            <div
              className="flex flex-col items-center text-center mx-auto"
              style={{
                width: "432px",
                height: "159.33px",
                gap: "21.33px",
              }}
            >
              <h3
                className="text-[32px] font-semibold leading-[37.33px]"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  letterSpacing: "-0.04em",
                  width: "432px",
                  height: "38px",
                }}
              >
                🔒 Privacy First
              </h3>
              <p
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  fontWeight: 500,
                  fontSize: "21.33px",
                  lineHeight: "33.33px",
                  width: "333px",
                  height: "100px",
                }}
              >
                Your data, your control. We prioritize your privacy with
                world-class security.
              </p>
            </div>
          </div>

          {/* CARD 5 */}
          <div
            className="w-[517.33px] h-[244.66px] rounded-[21.33px] p-[42.67px] bg-white text-black"
            style={{
              boxShadow:
                "-3px -3px 10px 0px #FFFFFF, 5px 5px 10px 0px #0000001A",
            }}
          >
            <div
              className="flex flex-col items-center text-center mx-auto"
              style={{
                width: "432px",
                height: "159.33px",
                gap: "21.33px",
              }}
            >
              <h3
                className="text-[32px] font-semibold leading-[37.33px]"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  letterSpacing: "-0.04em",
                  width: "432px",
                  height: "38px",
                }}
              >
                🌎 Discover & Explore
              </h3>
              <p
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  fontWeight: 500,
                  fontSize: "21.33px",
                  lineHeight: "33.33px",
                  width: "333px",
                  height: "100px",
                }}
              >
                Find trending content, join communities, and follow pages that
                match your interests.
              </p>
            </div>
          </div>

          {/* CARD 6 */}
          <div
            className="w-[517.33px] h-[244.66px] rounded-[21.33px] p-[42.67px] bg-white text-black"
            style={{
              boxShadow:
                "-3px -3px 10px 0px #FFFFFF, 5px 5px 10px 0px #0000001A",
            }}
          >
            <div
              className="flex flex-col items-center text-center mx-auto"
              style={{
                width: "432px",
                height: "159.33px",
                gap: "21.33px",
              }}
            >
              <h3
                className="text-[32px] font-semibold leading-[37.33px]"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  letterSpacing: "-0.04em",
                  width: "432px",
                  height: "38px",
                }}
              >
                💼 Grow Your Business
              </h3>
              <p
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Std", sans-serif',
                  fontWeight: 500,
                  fontSize: "21.33px",
                  lineHeight: "33.33px",
                  width: "333px",
                  height: "100px",
                }}
              >
                Use our platform to market your brand, connect with customers,
                and build meaningful relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
