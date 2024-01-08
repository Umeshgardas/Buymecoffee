// Link
import Link from "next/link";
import { useRouter } from "next/router";

// icons
import { FiX } from "react-icons/fi";
import { MdHomeFilled } from "react-icons/md";
//redux
import { useDispatch, useSelector } from "react-redux";
import { removeUserDefineTabs } from "@/store/common/commonSlice";

// Hooks
import useCheckLink from "@/common/hooks/useCheckLink";

const LayoutTabsItem = ({ link, name, active, indexId }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  // Redux
  const { GlobalTabs } = useSelector((state) => state.Common);
  // Hooks
  const _checkLink = useCheckLink();
  return (
    <div className={`LayoutTabs-item ${active && "active"}`}>
      {name != "Dashboard" ? (
        <>
          <Link href={_checkLink(link)} shallow>
            {name}
          </Link>
          <div
            className="close"
            onClick={() => {
              dispatch(removeUserDefineTabs(indexId));
              if (active) {
                router.push(`${_checkLink(GlobalTabs[indexId - 1].link)}`);
              }
            }}
          >
            <FiX />
          </div>
        </>
      ) : (
        <Link href={_checkLink(link)} className="dash-link" shallow>
          <MdHomeFilled />
        </Link>
      )}
    </div>
  );
};
export default LayoutTabsItem;