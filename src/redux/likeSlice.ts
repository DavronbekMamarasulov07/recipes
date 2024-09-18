import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../types";
 
interface IInitialState {
  likedRecipes: Recipe[];
}

const initialState: IInitialState = {
    likedRecipes: JSON.parse(<string>localStorage.getItem("recipes")) || [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToLiked: (state, action : PayloadAction<Recipe>) => {
      const existingProductIndex = state.likedRecipes.findIndex(
        (recipe) => recipe.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        state.likedRecipes.push(action.payload);
      } else {
        state.likedRecipes.splice(existingProductIndex, 1);
      }

      localStorage.setItem("recipes", JSON.stringify(state.likedRecipes));
    },
    removeFromLiked: (state, action : PayloadAction<number>) => {
      state.likedRecipes = state.likedRecipes.filter(
        (recipe) => recipe.id !== action.payload
      );
      localStorage.setItem("recipes", JSON.stringify(state.likedRecipes));
    },
  },
});

export const { addToLiked, removeFromLiked } = likeSlice.actions;
export default likeSlice.reducer;

