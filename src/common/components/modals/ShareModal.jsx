import { Modal } from "rsuite";
import { useState } from "react";
// icons
// import { Icons } from "@/common/constants";

// components
// import ImageRes from "../imageRes/ImageRes";
//
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   LinkedinShareButton,
//   TelegramShareButton,
// } from "react-share";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";

const ShareModal = ({ open, handleClose, link, title, liveBanner }) => {
  const shareUrl = link
    ? `${window.location.origin}${link}`
    : window.location.href;
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(liveBanner ? link : shareUrl).then(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    });
  };

  return (
    <>
      {showNotification && (
        <div
          className="custom-notification"
          onClick={() => setShowNotification(false)}
        >
          <AiFillCheckCircle className="checkIcon" />
          <p>Link copied to the clipboard!</p>
          <AiOutlineClose
            onClick={() => setShowNotification(false)}
            className="closeIcon"
          />
        </div>
      )}
      <Modal size="sm" open={open} onClose={handleClose} className="modal">
        <Modal.Header></Modal.Header>
        <div className="webinar-modal">
          <div className="webinar-modal-header">
            <p>Share this {title}</p>
            <span>
              Share the {title} across any of the following platforms or copy
              the link directly from below.
            </span>
          </div>
          {/* <div className="webinar-modal-icons">
            <div className="social_media">
              <FacebookShareButton
                quote="Visit us at www.strike.money"
                hashtag="#strike"
                url={liveBanner ? link : shareUrl}
                target="_blank"
              >
                <ImageRes className="icon" imgSrc={Icons.Facebook} alt="icon" />
              </FacebookShareButton>
            </div>
            <div className="social_media">
              <TwitterShareButton
                quote="Visit us at www.strike.money"
                hashtags={["#strike"]}
                url={liveBanner ? link : shareUrl}
                target="_self"
              >
                <ImageRes className="icon" imgSrc={Icons.Twitter} alt="icon" />
              </TwitterShareButton>
            </div>
            <div className="social_media">
              <WhatsappShareButton
                title="Visit us at"
                url={liveBanner ? link : shareUrl}
                target="_self"
              >
                <ImageRes className="icon" imgSrc={Icons.Whatsapp} alt="icon" />
              </WhatsappShareButton>
            </div>
            <div className="social_media">
              <LinkedinShareButton
                title="Visit us at www.strike.money"
                summary="The best place for stock analytics giving you the summary of all the stock's current market view."
                source="www.strike.money"
                url={liveBanner ? link : shareUrl}
                target="_self"
              >
                <ImageRes className="icon" imgSrc={Icons.Linkdin} alt="icon" />
              </LinkedinShareButton>
            </div>
            <div className="social_media">
              <TelegramShareButton
                title="Visit us at"
                url={liveBanner ? link : shareUrl}
                target="_self"
              >
                <ImageRes className="icon" imgSrc={Icons.Telegram} alt="icon" />
              </TelegramShareButton>
            </div>
          </div> */}
          <p>Or</p>
          <div className="webinar-modal-link">
            <p>{liveBanner ? link : shareUrl}</p>
            <button onClick={copyToClipboard}>Copy link</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShareModal;
