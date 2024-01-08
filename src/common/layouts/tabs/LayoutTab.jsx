import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import { Dropdown } from "rsuite";

// icons
import { FiChevronDown } from "react-icons/fi";
import { BiSolidChevronDownSquare } from "react-icons/bi";

// components
import LayoutTabsItem from "./LayoutTabsItem";
import LayoutTabsDropItem from "./LayoutTabsDropItem";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setFrontTabsWhiteSpace,
  updateNavigationList,
  setNavStackOpen,
} from "@/store/common/commonSlice";

//utils
import { calculateTotalWhitespaceinNavigationBar } from "@/common/utils";

//hooks
import { useWindowDimensions } from "@/common/hooks/useWindowDimensions";

const renderDropDownButton = (props, ref, tabs, path) => {
  const isTabSelected = tabs.filter((tab) => path.includes(tab?.link));
  return (
    <button
      {...props}
      ref={ref}
      className={`LayoutTabs_drop-btn ${isTabSelected.length ? "active" : ""}`}
    >
      <div className="icon">
        <FiChevronDown />
      </div>
    </button>
  );
};

const LayoutTab = ({ parentRef }) => {
  const windowDimensions = useWindowDimensions(parentRef);
  const {
    GlobalTabs,
    GlobalTabsStack = [],
    FrontTabsWhiteSpace,
    isNavStackOpen,
  } = useSelector((state) => state.Common);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window != undefined) {
      const totalWhiteSpace = calculateTotalWhitespaceinNavigationBar();
      dispatch(setFrontTabsWhiteSpace(totalWhiteSpace));
    }
    return () => {};
  }, [GlobalTabs, window, windowDimensions]);

  useEffect(() => {
    if (typeof window != undefined) {
      let exchangeTabId = null;
      let el = document.getElementById("navLength");

      if (FrontTabsWhiteSpace > 0) {
        for (let i = 0; i < GlobalTabsStack.length; i++) {
          el.innerText = GlobalTabsStack[i]?.name;
          if (el.offsetWidth < FrontTabsWhiteSpace) {
            exchangeTabId = i;
          }
        }
        if (exchangeTabId != null) {
          dispatch(
            updateNavigationList({ exchangeTabId, direction: "stack_to_queue" })
          );
        }
      } else {
        if (GlobalTabs.length > 1) {
          dispatch(updateNavigationList({ direction: "queue_to_stack" }));
        }
      }
    }
  }, [FrontTabsWhiteSpace, window]);

  const _checkActive = (link) => {
    let links = router.asPath.split("/");
    let reduxLink = link.split("/");
    // console.log(link.includes(links[1]), links[1].includes(link), link, links);
    if (links[1] == "stocks" || links[1] == "indices") {
      let tempLink = `${links[1]}/${links[2]}`;
      let tempReduxLink = `${reduxLink[0]}/${reduxLink[1]}`;
      return tempLink.includes(tempReduxLink) && tempReduxLink.includes(tempLink);
    } else {
      return link.includes(links[1]) || links[1].includes(link);
    }

  };

  return (
    <div className="LayoutTabs" id="LayoutTabs">
      <div className="LayoutTabs_inner">
        {GlobalTabs.map((item, i) => (
          <Fragment key={i}>
            <LayoutTabsItem
              name={item?.name}
              link={item?.link}
              active={_checkActive(item?.link)}
              indexId={i}
            />
          </Fragment>
        ))}
      </div>
      {GlobalTabsStack?.length > 0 && (
        <div className="LayoutTabs_drop">
          <Dropdown
            classPrefix="LayoutTabs_dropdown"
            placement="bottomStart"
            renderToggle={(props, ref) =>
              renderDropDownButton(props, ref, GlobalTabsStack, router.asPath)
            }
            open={isNavStackOpen}
            onClose={() => dispatch(setNavStackOpen(false))}
            onOpen={() => dispatch(setNavStackOpen(true))}
          >
            {GlobalTabsStack.map((item, i) => (
              <Dropdown.Item key={i}>
                <LayoutTabsDropItem
                  name={item?.name}
                  link={item?.link}
                  active={_checkActive(item?.link)}
                  indexId={i}
                />
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default LayoutTab;
