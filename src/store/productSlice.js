import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },

    updateProduct: (state, action) => {
      const { id, title, price } = action.payload;
      const index = state.products.findIndex((p) => p.id === id);
      if (index !== -1) {
        state.products[index] = { id, title, price };
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;
