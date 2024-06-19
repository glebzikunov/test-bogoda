import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: 0,
  isOpen: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    },
    setUser: (state, { payload }) => {
      state.id = payload
    },
  },
})

export const { openModal, closeModal, setUser } = modalSlice.actions

export default modalSlice.reducer
