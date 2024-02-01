import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Col, Row } from "rsuite";

const Supporters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pinned, setPinned] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Row className="supporters_container">
        <Col xs={24} sm={24} md={24}>
          <div className="supporters_container_avatar">
            <div className="supporters_container_avatar-left">
              <Avatar
                size="lg"
                circle
                src="https://avatars.githubusercontent.com/u/12592949"
                alt="@SevenOutman"
              />
              <p>
                <b>Aron</b> is now a member
              </p>
            </div>
            <div className="supporters_container_avatar-right">
              {pinned ? "Pinned" : ""}
              <div className="dropdown-menu">
                <div
                  className="dropdown-toggle"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="dots">...</span>
                </div>
                {isOpen && (
                  <div className="dropdown-content">
                    <NavLink to="/item1">Pin</NavLink>
                    <NavLink to="/item2">Item 2</NavLink>
                    <NavLink to="/item3">Item 3</NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="supporters_container_content">
            <p>
              Hey, Julie your videos are such a big help for an up and coming
              cabinet <br /> maker/ kitchen fitter myself. Thnaks for doing What
              you.
            </p>
            <div className="supporters_container_content_links">
              <span>Reply</span>
              <span>Share</span>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Supporters;
