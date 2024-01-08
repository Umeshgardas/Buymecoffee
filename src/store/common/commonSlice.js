import { createSlice } from "@reduxjs/toolkit";

// icons
import { FaCompass } from "react-icons/fa";
import { AiTwotonePieChart } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";

const initialState = {
  themeOptions: ["dark", "light"],
  theme: "light",
  deferredPWAPrompt: null,
  latestNifty: null,
  eodNiftyStock: null,
  FrontTabsWhiteSpace: 0,
  GlobalTabs: [
    {
      name: "Dashboard",
      link: "dashboard",
      userDefined: false,
    },
  ],
  GlobalTabsStack: [],
  Sidebar: [
    {
      id: 0,
      name: "Discover",
      icon: <FaCompass />,
      slug: "/",
    },
    {
      id: 1,
      name: "Analyse",
      icon: <AiTwotonePieChart />,
      slug: "/",
    },
    {
      id: 2,
      name: "Learn",
      icon: <BsFillBookFill />,
      slug: "/",
    },
  ],
  holidays: [],
  indices: [],
  userPreference: null,
  globalSearchInitialList: null,
  isNavStackOpen: false,
  systemTime: null,
  pages: [],
  watchlist: [],
  onboardingOpen: false,
};

export const CommonSlice = createSlice({
  name: "Common",
  initialState,
  reducers: {
    setDeferredPWAPrompt: (state, action) => {
      state.deferredPWAPrompt = action.payload;
    },
    setLatestNiftyStock: (state, action) => {
      state.latestNifty = action.payload;
    },
    setEODNiftyStock: (state, action) => {
      state.eodNiftyStock = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    addUserDefineTab: (state, action) => {
      state.GlobalTabs = [...state.GlobalTabs, action.payload];
    },
    removeUserDefineTabs: (state, action) => {
      const index = action.payload;
      state.GlobalTabs.splice(index, 1);
    },
    setHolidays: (state, action) => {
      state.holidays = action.payload;
    },
    setAllIndices: (state, action) => {
      state.indices = action.payload;
    },
    setUserPreference: (state, action) => {
      state.userPreference = action.payload;
    },
    setGlobalSearchInitialList: (state, action) => {
      state.globalSearchInitialList = action.payload;
    },
    addGlobalTabsStack: (state, action) => {
      state.GlobalTabsStack = [...state.GlobalTabsStack, action.payload];
      state.isNavStackOpen = true;
    },
    removeGlobalTabsStack: (state, action) => {
      const index = action.payload;
      state.GlobalTabsStack.splice(index, 1);
    },
    setFrontTabsWhiteSpace: (state, action) => {
      state.FrontTabsWhiteSpace = action.payload;
    },
    updateNavigationList: (state, action) => {
      if (action.payload.direction === "stack_to_queue") {
        state.GlobalTabs = [
          ...state.GlobalTabs,
          state.GlobalTabsStack[action.payload.exchangeTabId],
        ];
        state.GlobalTabsStack.splice(action.payload.exchangeTabId, 1);
      } else {
        const lastIndex = state.GlobalTabs.length - 1;
        if (lastIndex > 1) {
          state.GlobalTabsStack = [
            ...state.GlobalTabsStack,
            state.GlobalTabs[state.GlobalTabs.length - 1],
          ];
          state.GlobalTabs.splice(state.GlobalTabs.length - 1, 1);
        }
      }
    },
    setNavStackOpen: (state, action) => {
      state.isNavStackOpen = action.payload;
    },
    setSystemTime: (state, action) => {
      state.systemTime = action.payload;
    },
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    setWatchList: (state, action) => {
      state.watchlist = action.payload;
    },
    setOnboardingOpen: (state, action) => {
      state.onboardingOpen = action.payload;
    },
  },
});

export const {
  setTheme,
  addUserDefineTab,
  removeUserDefineTabs,
  setLatestNiftyStock,
  setEODNiftyStock,
  setHolidays,
  setAllIndices,
  setUserPreference,
  setDeferredPWAPrompt,
  setGlobalSearchInitialList,
  addGlobalTabsStack,
  removeGlobalTabsStack,
  setFrontTabsWhiteSpace,
  updateNavigationList,
  setNavStackOpen,
  setSystemTime,
  setPages,
  setWatchList,
  setOnboardingOpen,
} = CommonSlice.actions;
export default CommonSlice.reducer;
