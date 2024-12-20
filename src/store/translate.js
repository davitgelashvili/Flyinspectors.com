import { createSlice } from "@reduxjs/toolkit";

let initalData = {
    language: 'en'
}



const siteTranslate = createSlice({
    name: 'language',
    initialState: initalData,
    reducers: {
        changeLanguage(state, action){
            state.language = action.payload
        }
    }
})

export const siteTranslateAction = siteTranslate.actions

export default siteTranslate.reducer