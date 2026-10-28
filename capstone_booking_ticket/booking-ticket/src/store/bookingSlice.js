import { createSlice } from '@reduxjs/toolkit'

const bookingSlice = createSlice({
  name: 'booking', initialState: { selectedSeats: [] },
  reducers: {
    toggleSeat: (state, action) => {
      const exists = state.selectedSeats.find((seat) => seat.maGhe === action.payload.maGhe)
      state.selectedSeats = exists ? state.selectedSeats.filter((seat) => seat.maGhe !== action.payload.maGhe) : [...state.selectedSeats, action.payload]
    },
    clearSeats: (state) => { state.selectedSeats = [] },
  },
})
export const { toggleSeat, clearSeats } = bookingSlice.actions
export default bookingSlice.reducer
