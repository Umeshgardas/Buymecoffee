import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { FaYoutube } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiCoffeescript } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <div className="dashboard_top">
          <div className="avatar_icon">
            <div className="avatar_div">
              <Avatar
                size="lg"
                circle
                src="https://avatars.githubusercontent.com/u/12592949"
                alt="@SevenOutman"
              />
            </div>
            <div>
              <p>
                <b>Juile Peter</b> is creating animation & <br></br>{" "}
                illustarations
              </p>
              <span>2.1k supporters</span>
            </div>
          </div>
          <div className="right_sidebar">
            <a>Follow</a>
            <a>Support</a>
          </div>
        </div>
        <div className="bottom_sidebar">
          <a>Home</a>
          <a>Post</a>
          <a>Extras</a>
        </div>
        <div className="feed">
          <div className="first_feed">
            <img src="https://www.shutterstock.com/image-vector/vector-illustration-blue-sky-white-600nw-2029949744.jpg" />
            <p>
              Hey, 👋 <br /> I just created a page here. if you like my content
              please consider buying <br /> me a coffee.
            </p>
            <span className="icons">
              <FaEarthAmericas />
              <FaSpotify />
              <FaYoutube />
            </span>
          </div>
          <div className="second_feed">
            <h3>Buy Julie Peter a Coffee</h3>
            <br />
            <div className="no_of_coffee">
              <SiCoffeescript />
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <input placeholder="Say something noce...[optional]" />
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1">Make this massage private</label>
              </div>
              <br></br>
              <a>Support $3</a>
            </div>
          </div>
        </div>
        <div className="third_feed">
          <div className="supporters">
            <h4>
              <b>RECENT SUPPORTERS</b>
            </h4>
          </div>
          <div className="third_sub_feed">
            <Avatar
              size="lg"
              circle
              src="https://avatars.githubusercontent.com/u/12592949"
              alt="@SevenOutman"
            />
            <p>
              Hey, Julie your videos are such a big help for an up and coming
              cabinet <br /> maker/ kitchen fitter myself. Thnaks for doing What
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
