import { createSlice } from '@reduxjs/toolkit'

const contentslice = createSlice({
    name: 'contentslice',
    initialState: {
        loading: false,
        contents: [],
    },
    reducers: {
        HomecontentRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        Homecontentsuccess(state, action) {
            return {
                loading: false,
                contents:action.payload
            }
        },
        Homecontenterror(state, action) {
            return {
                loading: false,
                error:action.payload
            }
        },
        

    }
})

const { actions, reducer } = contentslice;

export const {HomecontentRequest , Homecontentsuccess, Homecontenterror} = actions;

export default reducer;