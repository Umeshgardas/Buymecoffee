import React, { useState } from "react";
import { SiBuymeacoffee } from "react-icons/si";
import InputSet from "../../common/components/inputSet/InputSet";
import { Avatar, Button, Dropdown, Modal } from "rsuite";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import ShareModal from "../../common/components/modals/ShareModal";
const Profile = () => {
  const [selectedColor, setSelectedColor] = useState(null);

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="widget">
        {/* <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          {" "}
          Open
        </button> */}
        {/* <ShareModal
          open={openModal}
          handleClose={() => {
            setOpenModal(false);
          }}
          title={"Info Videos"}
        /> */}
        <div className="widget_inner">
          <div className="widget_inner-left">
            <div className="header">
              <h2>Widget</h2>
              <p>Allow your fans to support directly from your website</p>
            </div>
            <InputSet label={"Description"} placeholder={"description"} />
            <InputSet label={"Widget message"} placeholder={"messagee"} />
            <InputSet
              label={"Color"}
              placeholder={"select the color"}
              label2={"Style your widget to match your brand"}
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
              {/* <div>
                <p>
                  {selectedColor
                    ? `Selected Color: ${selectedColor}`
                    : "Select a color by clicking on a circle"}
                </p>
                {selectedColor && (
                  <div
                    style={{
                      backgroundColor: selectedColor,
                      width: "100px",
                      height: "100px",
                      borderRadius: "10px",
                      margin: "10px",
                      position: "relative",
                    }}
                  >
                    <FaCheckCircle
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#fff", // Adjust the color of the check mark
                      }}
                    />
                  </div>
                )}
              </div> */}
            </div>
            <div className="position">
              <label htmlFor="">Position on the website</label>
              <span>Move the position of your widget</span>
              <div className="position_inner">
                <InputSet label={"Align"} />
                <InputSet label={"Side spacing"} postAddon={"Px"} />
                <InputSet label={"Bottom spacing"} postAddon={"Px"} />
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
                  Thank you, and feel free to leave a comment with your support
                </p>
              </div>
              <div className="coffee-count">
                <SiBuymeacoffee /> x
              </div>
              <InputSet
                name={"email"}
                placeholder={"Your email"}
                inputClassName={"widget_input"}
              />
              <InputSet
                name={"email"}
                placeholder={"Your email"}
                inputClassName={"widget_input"}
              />
              <div className="privatemsg">
                <input type="checkbox" />
                <span>Private message</span>
                <span className="que">?</span>
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
                    Jake Horman <span className="bought">bought</span> 1 coffee{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="secured">
              <SiBuymeacoffee />
              Secured by Buy Me A Coffee
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
