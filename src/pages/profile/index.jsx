import React, { useState } from "react";
import InputSet from "../../common/components/inputSet/InputSet";
import { Avatar, Button,  Modal } from "rsuite";
import { FaCheck,  } from "react-icons/fa";

const Profile = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [align, setAlign] = useState("right");

  const colors = [
    "#FF5733",
    "#0054D2",
    "#7B00F7",
    "#F60002",
    "#00F7F7",
    "#B900F7",
  ];
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedNumber, setSelectedNumber] = useState("");

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };
  return (
    <>
      <div className="widget">
        <Button onClick={handleOpen}> Open</Button>
        <Modal open={open} onClose={handleClose}>
          {/*   <Modal.Header>
          </Modal.Header> */}
          <Modal.Body>
            <div className="widget_inner">
              <div className="widget_inner-left">
                <div className="header">
                  <h2>Widget</h2>
                  <p>Allow your fans to support directly from your website</p>
                </div>
                <InputSet
                  label={"Description"}
                  placeholder={"Thank you, and feel free to leave a comment"}
                />
                <InputSet
                  label={"Widget message"}
                  placeholder={
                    "Thanks for reading my blog! You can now support"
                  }
                />
                <div className="input-set">
                  <div className="label-line">
                    <label>Color</label>
                  </div>
                  <div className="label-line2">
                    <label>Style your widget to match your brand</label>
                  </div>
                  <div className="colors">
                    {colors.map((color, index) => (
                      <span
                        key={index}
                        onClick={() => handleColorClick(color)}
                        style={{
                          backgroundColor: color,
                          borderRadius: "50%",
                          width: "25px",
                          height: "25px",
                          display: "inline-block",
                          margin: "5px",
                          cursor: "pointer",
                          position: "relative",
                        }}
                      >
                        {selectedColor === color && (
                          <FaCheck
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              color: "#fff", // Adjust the color of the check mark
                            }}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                 
                </div>
                <div className="position">
                  <label htmlFor="">Position on the website</label>
                  <span>Move the position of your widget</span>
                  <div className="position_inner">
                    <div className="position_inner_dropdown">
                      <InputSet
                        label={"Gender"}
                        selectpicker
                        data={[
                          { label: "Right", value: "right" },
                          { label: "Left", value: "left" },
                          { label: "Top", value: "top" },
                          { label: "Bottom", value: "bottom"},
                        ]}
                        value={align}
                        onChange={(v) => setAlign(v)}
                      />
                    </div>
                    <div className="position_inner_inputpx">
                      <InputSet label={"Side spacing"} postAddon={"Px"} />
                    </div>
                    <div className="position_inner_inputpx">
                      <InputSet label={"Bottom spacing"} postAddon={"Px"} />
                    </div>
                  </div>
                </div>
                <div className="button">
                  <Button appearance="primary" className="primary_button">
                    Save
                  </Button>
                  <Button appearance="primary" className="primary_button2">
                    Copy code
                  </Button>
                </div>
              </div>

              <div className="widget_inner-right">
                <div className="widget_inner-right-inner">
                  <div className="header">
                    <h4>
                      Buy <span>Olivia Ysabelle</span> a coffee
                    </h4>
                    <p>
                      Thank you, and feel free to leave a comment with your
                      support
                    </p>
                  </div>
                  <div className="coffee-count">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcctLwxW_b2Y4LJUlAqxXs4YpGeb8djRd6ldmFhngLfAFl0b4"
                      alt=""
                    />{" "}
                    <span>x</span>
                    <InputSet
                      type="number"
                      value={selectedNumber}
                      onChange={(e) => setSelectedNumber(e.target.value)}
                      placeholder="1"
                    />
                    <button
                      onClick={() => handleNumberClick(1)}
                      className={selectedNumber === 1 ? "active" : ""}
                    >
                      1
                    </button>
                    <button
                      onClick={() => handleNumberClick(3)}
                      className={selectedNumber === 3 ? "active" : ""}
                    >
                      3
                    </button>
                    <button
                      onClick={() => handleNumberClick(5)}
                      className={selectedNumber === 5 ? "active" : ""}
                    >
                      5
                    </button>
                  </div>
                  <div className="widget_input">
                    <InputSet
                      name={"name"}
                      placeholder={"Name or @yourtwitter"}
                      inputClassName={"widget_input"}
                    />
                    <InputSet
                      name={"message"}
                      inputClassName={"widget_input_textarea"}
                      placeholder={"Message (optional)"}
                      as={"textarea"}
                      // value={bio}
                      // onChange={(v) => setBio(v)}
                    />
                  </div>
                  <div className="privatemsg">
                    <input type="checkbox" id="privateCheckbox" />
                    <label htmlFor="privateCheckbox">Private message</label>
                    <span className="question">?</span>
                  </div>
                 
                  <Button appearance="primary" className="primary_button">
                    Support <span>($4)</span>
                  </Button>
                  <div className="recent_coffee">
                    <p>Recent coffees</p>
                    <div className="recent_coffee-avatar">
                      <Avatar
                        size="lg"
                        circle
                        src="https://avatars.githubusercontent.com/u/12592949"
                        alt="@SevenOutman"
                      />
                      <span>
                        Jake Horman <span className="bought">bought</span> 1
                        coffee{" "}
                      </span>
                    </div>
                  </div>
                  <div className="secured">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcctLwxW_b2Y4LJUlAqxXs4YpGeb8djRd6ldmFhngLfAFl0b4"
                      alt=""
                    />
                    Secured by Buy Me A Coffee
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Profile;
