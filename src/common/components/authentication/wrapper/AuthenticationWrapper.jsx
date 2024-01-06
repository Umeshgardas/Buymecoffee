import React from 'react'
import { Link } from 'react-router-dom'

const AuthenticationWrapper = ({children}) => {
  return (
    <div className="authentication">
    <div className="container">
      <div className="_left">
        <div className="top">
          <div className="logodiv">
            {/* <Link href={"/dashboard"}>
              <div className="logo">
                <ImageRes imgSrc={Images.LogoDark} alt="" />
              </div>
            </Link> */}
          </div>
        </div>
        <div className="bottom">
          <div className="watchlist">
            {/* <CarouselProvider
              className="carousel"
              naturalSlideWidth={100}
              naturalSlideHeight={100}
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
                  <ImageRes imgSrc={Images.Carousel2} alt="" />
                  <p>
                    Get your Market snapshots for the day through our dashboards
                  </p>
                </Slide>
                <Slide className="slide" index={1}>
                  <ImageRes imgSrc={Images.Carousel1} alt="" />
                  <p>
                    Use the Sentiment Indicators to read the market mood
                  </p>
                </Slide>
                <Slide className="slide" index={3}>
                  <ImageRes imgSrc={Images.Carousel3} alt="" />
                  <p>
                    Get a clear picture of what the bigger sharks like FIIs and DIIs are doing in the market	
                  </p>
                </Slide>
                <Slide className="slide" index={4}>
                  <ImageRes imgSrc={Images.Carousel4} alt="" />
                  <p>
                    Customise and choose the timeframe you want to see the best-performing stocks to make better decisions through the Heatmaps.
                  </p>
                </Slide>
              </Slider>
            </CarouselProvider> */}
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
  )
}

export default AuthenticationWrapper
