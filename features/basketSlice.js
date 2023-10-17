import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      console.log("hh",state.items)
      const index = state.items.findIndex(
        (item) => item.id === action.payload
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant Remove product (id: ${action.payload}) as its not basket`
        );
      }

      state.items = newBasket;
    },
    removeALL:(state)=>{
      state.items=[]
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket,removeALL } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemWithId = (state, id) =>
  state.basket.items.filter((item) => item.id == id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;