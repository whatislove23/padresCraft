import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cart");
const initialState = {
  items: storedCart ? JSON.parse(storedCart) : [],
  total: 0,
  isOpen: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    add: (state, action) => {
      let element = state.items.find((el) => el.id == action.payload.id);
      if (element) {
        state.items = state.items.map((element) => {
          if (element.id == action.payload.id) {
            return {
              ...element,
              ...action.payload,
              amount: (element.amount += 1),
            };
          }
          return element;
        });
      } else state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decrease: (state, action) => {
      let element = state.items.find((el) => el.id == action.payload.id);
      if (element) {
        if (element.amount == 1) {
          let items = state.items.filter((item) => item.id !== element.id);
          localStorage.setItem("cart", JSON.stringify(items));
          state.items = items;
          return;
        }
        state.items = state.items.map((element) => {
          if (element.id == action.payload.id) {
            return {
              ...element,
              amount: (element.amount -= 1),
            };
          }
          return element;
        });
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    remove: (state, action) => {
      let items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(items));
      state.items = items;
    },
    getTotalPrice: (state, action) => {
      let res = state.items.reduce(
        (acc, cur) => acc + cur.amount * cur.price,
        0
      );
      let total = parseFloat(res.toFixed(3));
      state.total = total;
    },
  },
});
export const { add, decrease, remove, open, close, getTotalPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
