import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  catalogVisible: boolean 

}

const initialState: IInitialState = {
  catalogVisible: JSON.parse(localStorage.getItem("catalogVisible") as string) || false,
}


const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCatalogVisible: (state, action) => {
      state.catalogVisible = action.payload
    }
  }
})

export const { setCatalogVisible } = modalSlice.actions
export default modalSlice.reducer