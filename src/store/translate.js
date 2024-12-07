import { createSlice } from "@reduxjs/toolkit";
const windowUrl = window.location.host
const initalData = {}

if(windowUrl === 'flyinpectors.com'){
    initalData.language = 'en'
}

if(windowUrl === 'flyinpectors.ge'){
    initalData.language = 'ka'
}

if(windowUrl === 'flyinpectors.co.uk'){
    initalData.language = 'en'
}

if(windowUrl === 'localhost:3000' || windowUrl === 'http://127.0.0.1/'){
    initalData.language = 'en'
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