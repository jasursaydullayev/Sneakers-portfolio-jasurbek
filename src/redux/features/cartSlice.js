import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  amountbtn: 0,
  amount: 0,
  price: 125,
};

const cartSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    incrementProduct: (state) => {
      state.amountbtn += 1;
    },
    decrementProduct: (state) => {
      state.amountbtn -= 1;
    },
    removeItem: (state) => {
      state.amount = 0;
      state.amountbtn = 0;
    },
    updateamount: (state) => {
      state.amount += state.amountbtn;
    }
  },
});

export const { incrementProduct, decrementProduct, removeItem, updateamount } =
  cartSlice.actions;
export default cartSlice.reducer;
