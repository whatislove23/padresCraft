import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
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
      let element = state.items.find((el) => _.isEqual(el, action.payload));

      if (element) {
        state.items = state.items.map((element) => {
          if (_.isEqual(element, action.payload)) {
            return {
              ...element,
              amount: (element.amount += 1),
            };
          }
          return element;
        });
      } else state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decrease: (state, action) => {
      let element = state.items.find((el) => _.isEqual(el, action.payload));
      if (element) {
        if (element.amount == 1) {
          let items = state.items.filter(
            (item) => !_.isEqual(item, action.payload)
          );
          localStorage.setItem("cart", JSON.stringify(items));
          state.items = items;
          return;
        }
        state.items = state.items.map((element) => {
          if (_.isEqual(element, action.payload)) {
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
      let items = state.items.filter(
        (item) => !_.isEqual(item, action.payload)
      );
      localStorage.setItem("cart", JSON.stringify(items));
      state.items = items;
    },
    getTotalPrice: (state) => {
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
