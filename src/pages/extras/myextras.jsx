import React, { useState } from "react";
import { AiTwotoneQuestionCircle } from "react-icons/ai";

function MyExtras() {
 
  return (
    <>
      <form action="" className="extras_form_container">
        <div className="extras_form_containers-1">
          <div className="offering">
            <div>What are you offering?</div>
            <div className="offering-input-container">
              <input type="text" />
            </div>
          </div>
          <div className="price">
            <div>Price</div>
            <div className="price-input-container">
              <span id="doller">$</span>
              <input type="text" placeholder="26" />
            </div>
          </div>
        </div>
        <div className="extras_form_containers">
          <div>Description</div>
          <input type="text" placeholder="Describe" />
        </div>
        <div className="extras_form_containers">
          <div id="note">
            Confirmation message
            <span id="messageText">
              if you'd like addtionalinformation to fulfill this offering, you
              can leave a question here{" "}
            </span>
            <AiTwotoneQuestionCircle id="question-icon" />
          </div>
          <input
            type="text"
            placeholder="Eg : Thank you,Here's is your extra:https://m/scl..."
          />
        </div>
        <div className="choose_file_container">
          <div>Choose an image</div>
          <p>Recommoeded size: by 460 by 200 pixels</p>
          <input
            type="file"
            className="choose_file"
            placeholder="choose file"
          />
        </div>
      </form>
    </>
  );
}

export default MyExtras;
