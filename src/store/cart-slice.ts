import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type CartItem = {
  id: string,
  title: string,
  description: string,
  price: number,
  quantity: number
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
    }
  }
})