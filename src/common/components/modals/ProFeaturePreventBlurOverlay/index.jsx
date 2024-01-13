import { Button } from "rsuite";

// constants
import { Icons } from "@/common/constants";

// redux
import { useSelector } from "react-redux";
import { get, startCase } from "lodash";
import ImageRes from "../../imageRes/ImageRes";

const ProFeaturePreventBlurOverlay = () => {
  const theme = useSelector((state) => get(state, "Common.theme"));

  return (
    <div className="blur-layer">
      <div className="message-card">
        <div className="stop-icon">
          <ImageRes imgSrc={Icons[`NoService${startCase(theme)}`]} />
        </div>
        <div className="message-header">Peer comparison is a PRO feature</div>
        <p>
          Subscribe to Strike and gain competitive advantage with
          ultra-customisable and data-driven stock comparisons
        </p>
        <Button size="sm" appearance="primary">
          Check our plans
        </Button>
      </div>
    </div>
  );
};

export default ProFeaturePreventBlurOverlay;
