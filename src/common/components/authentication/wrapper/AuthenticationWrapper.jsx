import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { SiBuymeacoffee } from "react-icons/si";

// components
import ImageRes from "../../imageRes/ImageRes";
import { AiOutlineTwitter } from "react-icons/ai";

const AuthenticationWrapper = ({ children }) => {
  const carouselRef = useRef();

  return (
    <div className="authentication">
      <div className="container">
        <div className="_left">
          <div className="top">
            <div className="logodiv">
              <div className="logo">
                <SiBuymeacoffee />
              </div>
              <div className="starting_page">
                <span>Start your page</span>
                <p>Takes less than a minute</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="watchlist">
              <CarouselProvider
                className="carousel"
                naturalSlideWidth={10}
                naturalSlideHeight={10}
                totalSlides={4}
                visibleSlides={1}
                playDirection="forward"
                interval={5000}
                isPlaying={true}
                ref={carouselRef}
                infinite
              >
                <Slider className="slider">
                  <Slide className="slide" index={2}>
                    <div className="container_top">
                      <div className="profile">
                        <ImageRes
                          imgSrc="https://th.wallhaven.cc/small/m3/m3zjx1.jpg"
                          alt=""
                        />
                        <div className="profile_data">
                          <span>Teng Jiang</span>
                          <span className="tagline">@Pattrk_linicki</span>
                        </div>
                      </div>
                      <p>
                        This tool is an absolute life saver and has allowd me to
                        do what I love and make money. What could be better?
                      </p>
                      <AiOutlineTwitter className="twitter-icon" />
                    </div>
                  </Slide>
                  <Slide className="slide" index={1}>
                    <div className="container_top">
                      <div className="profile">
                        <ImageRes
                          imgSrc="https://th.wallhaven.cc/small/m3/m3zjx1.jpg"
                          alt=""
                        />
                        <div className="profile_data">
                          <span>Teng Jiang</span>
                          <span className="tagline">@Pattrk_linicki</span>
                        </div>
                      </div>
                      <p>
                        This tool is an absolute life saver and has allowd me to
                        do what I love and make money. What could be better?
                      </p>
                      <AiOutlineTwitter className="twitter-icon" />
                    </div>
                  </Slide>
                  <Slide className="slide" index={3}>
                    <div className="container_top">
                      <div className="profile">
                        <ImageRes
                          imgSrc="https://th.wallhaven.cc/small/m3/m3zjx1.jpg"
                          alt=""
                        />
                        <div className="profile_data">
                          <span>Teng Jiang</span>
                          <span className="tagline">@Pattrk_linicki</span>
                        </div>
                      </div>
                      <p>
                        This tool is an absolute life saver and has allowd me to
                        do what I love and make money. What could be better?
                      </p>
                      <AiOutlineTwitter className="twitter-icon" />
                    </div>
                  </Slide>
                  <Slide className="slide" index={4}>
                    <div className="container_top">
                      <div className="profile">
                        <ImageRes
                          imgSrc="https://th.wallhaven.cc/small/m3/m3zjx1.jpg"
                          alt=""
                        />
                        <div className="profile_data">
                          <span>Teng Jiang</span>
                          <span className="tagline">@Pattrk_linicki</span>
                        </div>
                      </div>
                      <p>
                        This tool is an absolute life saver and has allowd me to
                        do what I love and make money. What could be better?
                      </p>
                      <AiOutlineTwitter className="twitter-icon" />
                    </div>
                  </Slide>
                </Slider>
              </CarouselProvider>
            </div>
          </div>
        </div>
        <div className="_right">
          <div className="logo">
            {/* <Link href={"/dashboard"}> */}
            {/*  <ImageRes imgSrc={Images.LogoWhite} alt="" /> */}
            {/* </Link> */}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationWrapper;
