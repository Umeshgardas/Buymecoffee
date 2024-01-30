import React from "react";
import { Avatar } from "rsuite";

const Supporters = () => {
  return (
    <div className="supporters">
      <div className="supporters_avatar">
        <div className="supporters_avatar-left">
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
        <div className="supporters_avatar-right">
        </div>
      </div>
      <div className="supporters_content">
        <p>
          Hey, Julie your videos are such a big help for an up and coming
          cabinet <br /> maker/ kitchen fitter myself. Thnaks for doing What
          you.
        </p>
        <div className="links">reply share</div>
      </div>
    </div>
  );
};

export default Supporters;
