import { createSlice } from '@reduxjs/toolkit'

const lessonslice = createSlice({
    name: 'lessonslice',
    initialState: {
        loading: false,
        lessons: null,
    },
    reducers: {
        lessonRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        lessonsuccess(state, action) {
            return {
                loading: false,
                lessons:action.payload
            }
        },
        lessonerror(state, action) {
            return {
                loading: false,
                error:action.payload
            }
        },
        

    }
})

const { actions, reducer } = lessonslice;

export const {lessonRequest , lessonsuccess, lessonerror} = actions;

export default reducer;