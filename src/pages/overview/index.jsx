import React from "react";
import { AiFillNotification } from "react-icons/ai";
import {
  BsJournalBookmarkFill,
  BsInboxesFill,
  BsCopy,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";

const Overview = () => {
  return (
    <>

      <div className="overview">
        <h4>Overview</h4>
        <div className="firstfeed">
          <div className="earnings">
            <h3>Earnings</h3>
            <div className="earnings_days">
              <h5>7 days</h5>
              <h4>30 days</h4>
              <h5>All time</h5>
            </div>
            <div></div>
          </div>

          <div className="page_view">
            <h3>Page views</h3>
            <div className="page_view_days">
              <h5>7 days</h5>
              <h4>30 days</h4>
            </div>
          </div>
        </div>
        <div className="second_feed">
          <div className="first_box">
            <span className="icons">
              <AiFillNotification />
            </span>
            <h3>Share your Page</h3>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </p>
            <a href="">buymeacuffee/NewEbook</a>
            <br />
            <br />
            <div className="social_icons">
              <span className="social_icon_copy">
                <BsCopy />
              </span>

              <span className="social_icon_twitter">
                <BsTwitter />
              </span>

              <span className="social_icon_facebook">
                <BsFacebook />
              </span>
            </div>
          </div>
          <div className="second_box">
            <span className="icons">
              <BsInboxesFill />
            </span>
            <h3>Your button & widget</h3>
            <p>
              Create a beautiful button or widget
              <br /> to embed on your website.
            </p>
            <button>Button generator</button>
            <br />
            <button className="b2">Widget generator</button>
          </div>
          <div className="third_box">
            <span className="icons">
              <BsJournalBookmarkFill />
            </span>
            <h3>Learn more</h3>
            <ul>
              <li>Membership 101: Best Practices</li>
              <li>How to choose your bussiness model</li>
              <li>How to talk about BMAC to your audience</li>
              <li>Knowing your worth as a creator</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
