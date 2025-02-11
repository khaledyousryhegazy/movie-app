import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const alert = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  Toast.fire({
    icon: "success",
    title: "Added To Watchlist Successfully",
    iconColor: "#BB86FC",
  });
};

const getInitialState = () => {
  const localData = localStorage.getItem("watchlist");
  return localData ? JSON.parse(localData) : [];
};

const watchlistSlice = createSlice({
  name: "watchlistSlice",
  initialState: getInitialState(),
  reducers: {
    add: (state, action) => {
      const findItem = state.find((movie) => {
        return movie.id === action.payload.id;
      });

      if (findItem) {
        return;
      } else {
        const itemClone = { ...action.payload };
        state.push(itemClone);
      }

      localStorage.setItem("watchlist", JSON.stringify(state));

      // Sweet alert
      alert();
    },
    remove: (state, action) => {
      const movieId = action.payload.id;

      const index = state.findIndex((movie) => movie.id === movieId);

      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("watchlist", JSON.stringify(state));
      }
    },
  },
});

export const { add, remove } = watchlistSlice.actions;
export default watchlistSlice.reducer;
