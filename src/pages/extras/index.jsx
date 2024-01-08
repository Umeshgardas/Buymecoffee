import React, { useState } from "react";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import Layout from "../../common/layouts";

function Extras() {
  let white = "#fff";
  const [bgcolor, setbgcolor] = useState(white);
  const myextra = () => {
    let grey = "#b9dabd";
    if (bgcolor === "white") setbgcolor(grey);
    else {
      setbgcolor(white);
    }
  };
  return (
      <div className="Extras_container">
        <h1>Extras</h1>
        <div className="extras_routes">
          <span
            onClick={myextra}
            className="My_extra"
            style={{ background: bgcolor }}
          >
            My extras
          </span>
          <span className="supporters"> Supporters</span>
        </div>
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
                <span>$</span>
                <input type="text" placeholder="26" />
              </div>
            </div>
          </div>
          <div className="extras_form_containers-2">
            <div>Description</div>
            <input type="text" placeholder="Describe" />
          </div>
          <div className="extras_form_containers-3">
            <div>
              Confirmation message <AiTwotoneQuestionCircle />
            </div>
            <input
              type="text"
              placeholder="Eg : Thank you,Here's is your extra:https://m/scl..."
            />
          </div>
          <div className="extras_form_containers-4">
            <div>Choose an image</div>
            <p>Recommoeded size: by 460 by 200 pixels</p>
            <button>Browse</button>
          </div>
        </form>
      </div>
  );
}

export default Extras;
