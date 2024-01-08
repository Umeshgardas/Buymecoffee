import React, { useState, useEffect } from "react";
import { Toggle } from "rsuite";
// import dayjs from "dayjs";
// import { useSignOut, useAuthenticated } from "@nhost/nextjs";

// // Link
// import Link from "next/link";
// import { useRouter } from "next/router";

// // rsuites
// import { Button, Dropdown, Avatar, IconButton, Toggle } from "rsuite";

// // redux
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setTheme,
//   setLatestNiftyStock,
//   setOnboardingOpen,
// } from "@/store/common/commonSlice";
// import { setMyAccount, removeToken } from "@/store/shield/ShieldSlice";

// // icons
// // import SubCrown from "@/assets/icons/Sub-crown.svg";
// import { BsFillCaretDownFill } from "react-icons/bs";
// import { BsClockFill, BsLifePreserver, BsBellFill } from "react-icons/bs";

// constants
// import { Images } from "@/common/constants";
// import { GET_SYSTEM_TIME } from "@/common/constants/queryKeys";

// //react query
// import { useQuery as useReactQuery } from "@tanstack/react-query";
// import { getSystemTime } from "@/rest/queries";

// // components
// import ImageRes from "@/common/components/imageRes/ImageRes";
// import HeaderLink from "./HeaderLink";
// import HeaderSearch from "./GlobalSearch/HeaderSearch";

// // Util
// import { genNameInitials } from "@/common/utils";

// //hooks
// import useBootstrapCalls from "@/common/hooks/bootstrap/useBootstrapCalls";
// import { useAddToHomescreenPrompt } from "@/common/hooks/usePWAInstallationPrompt";
// import useOpenNewTabs from "@/common/hooks/useOpenNewTabs";

const Header = () => {
  // const dispatch = useDispatch();
  // const isAuth = useAuthenticated();
  // const { signOut } = useSignOut();
  // const [systemTime, setSystemTime] = useState(null);
  // const { theme } = useSelector((state) => state.Common);
  // const { push } = useRouter();
  // const { user: userData } = useSelector((state) => state.Shield);
  // const [deferredPWAPrompt, promptToInstall] = useAddToHomescreenPrompt();
  // const [isVisible, setVisibleState] = React.useState(false);
  // useBootstrapCalls();

  // Hooks
  // const openNewTab = useOpenNewTabs(false);

  // const { data } = useReactQuery({
  //   queryKey: [GET_SYSTEM_TIME],
  //   queryFn: getSystemTime,
  //   refetchOnWindowFocus: false,
  //   refetchOnMount: false,
  // });

  // const renderIconButton = (props, ref) => {
  //   return (
  //     <div className="dropdown" {...props} ref={ref}>
  //       {userData?.avatarUrl ? (
  //         <img
  //           src={userData.avatarUrl}
  //           style={{ height: 28, width: 28, borderRadius: "50%" }}
  //         />
  //       ) : (
  //         <Avatar
  //           circle
  //           style={{
  //             background: "#7447AE",
  //             textTransform: "uppercase",
  //           }}
  //         >
  //           {genNameInitials(userData?.displayName)}
  //         </Avatar>
  //       )}
  //       <IconButton
  //         icon={<BsFillCaretDownFill />}
  //         size="sm"
  //         style={{
  //           background: "transparent",
  //           color: "white",
  //         }}
  //       />
  //     </div>
  //   );
  // };

  // const _changeTheme = () => {
  //   if (theme === "dark") {
  //     dispatch(setTheme("light"));
  //   } else {
  //     dispatch(setTheme("dark"));
  //   }
  // };

  // const handleLogout = () => {
  //   signOut();
  //   dispatch(removeToken());
  //   push("/login");
  //   dispatch({ type: `ScannerPersist/reset` });
  // };

  // useEffect(() => {
  //   if (data?.systemTime && dayjs(data?.systemTime).isValid()) {
  //     dispatch(setLatestNiftyStock(data?.systemTime));
  //     setSystemTime(data?.systemTime);
  //   }
  // }, [data]);

  // const _changeTheme = () => {
  //   if (theme === "dark") {
  //     dispatch(setTheme("light"));
  //   } else {
  //     dispatch(setTheme("dark"));
  //   }
  // };
  return (
    <header>
      {/* <button onClick={_changeTheme}>toggle</button> */}
      {/*  */}
      <div className="switch">
      Header
       {/*  <Toggle checked={theme === "dark"} size="sm" onClick={_changeTheme} /> */}
      </div>
    </header>
  );
};

export default Header;
