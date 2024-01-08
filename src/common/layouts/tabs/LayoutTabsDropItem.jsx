// Link
import Link from "next/link";
import { useRouter } from "next/router";

// icons
import { FiX } from "react-icons/fi";
//redux
import { useDispatch, useSelector } from "react-redux";
import { removeGlobalTabsStack } from "@/store/common/commonSlice";

// Hooks
import useCheckLink from "@/common/hooks/useCheckLink";

const LayoutTabsDropItem = ({ link, name, active, indexId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Redux
  const { GlobalTabsStack, GlobalTabs } = useSelector((state) => state.Common);
  // Hooks
  const _checkLink = useCheckLink();

  return (
    <div className={`LayoutTabs_drop-item ${active && "active"}`}>
      {name != "Dashboard" ? (
        <>
          <Link href={_checkLink(link)}>{name}</Link>
          <div
            className="close"
            onClick={() => {
              dispatch(removeGlobalTabsStack(indexId));
              if (active) {
                router.push(
                  `${_checkLink(
                    indexId == 0
                      ? GlobalTabs[GlobalTabs.length - 1].link
                      : GlobalTabsStack[indexId - 1].link
                  )}`
                );
              }
            }}
          >
            <FiX />
          </div>
        </>
      ) : null}
    </div>
  );
};
export default LayoutTabsDropItem;