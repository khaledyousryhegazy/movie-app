import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import discoverReducer from "./slices/discoverSlice";
import watchlistSlice from "./slices/watchlistSlice";

const store = configureStore({
  reducer: {
    home: homeSlice,
    discover: discoverReducer,
    watchlist: watchlistSlice,
  },
});

export default store;
