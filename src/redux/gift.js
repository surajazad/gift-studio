import { createSlice } from "@reduxjs/toolkit";
import categoriesData from "../data/categories.json";
import giftWraps from "../data/giftwrap.json";
import quizDetails from "../data/questions.json";
import giftCatalogProducts from "../data/gift-catalog.json";
import quizState from "../data/quizState.json";

export const counterSlice = createSlice({
  name: "gift",
  initialState: { 
    data: categoriesData.productCategory, 
    wraps: giftWraps.wraps,
    quizData: quizDetails.questions,
    quizState : quizState,
    giftCatalog: giftCatalogProducts.products },
  reducers: {
    updateSelectedDataObj: (state, action) => {
      state.data = action.payload;
    },
    updatePreSelectedGiftCatalog: (state, action) => {
      state.giftCatalog = action.payload;
    },
    updateSelectedGiftWrap: (state, action) => {
      state.wraps = action.payload;
    },
    updateQuizState :  (state, action)=>{
      state.quizState = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { 
  updateSelectedDataObj,
  updatePreSelectedGiftCatalog,
  updateSelectedGiftWrap,
  updateQuizState
 } = counterSlice.actions;

export default counterSlice.reducer;
