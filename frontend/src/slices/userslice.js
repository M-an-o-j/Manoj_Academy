import { createSlice } from '@reduxjs/toolkit'

const userslice = createSlice({
    name: 'userslice',
    initialState: {
        loading: false,
        isAuthenticated : false,
        user: [],
    },
    reducers: {
        registeruserRequest(state, action) {
            return {
                loading: true
            }
        },
        registeruserSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated:true,
                user:action.payload
            }
        },
        registeruserError(state, action) {
            return {
                loading: false,
                isAuthenticated:false,
                error:action.payload
            }
        },
        loginuserRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        loginuserSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated:true,
                user:action.payload
            }
        },
        loginuserError(state, action) {
            return {
                loading: false,
                isAuthenticated:false,
                error:action.payload
            }
        },
        userdataRequest(state, action) {
            return {
                isAuthenticated:false,
                loading: true,
                user:null
            }
        },
        userdataSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated:true,
                user:action.payload
            }
        },
        userdataError(state, action) {
            return {
                loading: false,
                isAuthenticated:false,
                error:action.payload
            }
        },
        
        logoutuserRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        logoutuserSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated:false,
                user:null,
                message:action.payload
            }
        },
        logoutuserError(state, action) {
            return {
                loading: false,
                isAuthenticated:false,
                error:action.payload
            }
        },

    }
})

const { actions, reducer } = userslice;

export const {
    registeruserRequest, 
    registeruserSuccess, 
    registeruserError,
    loginuserRequest, 
    loginuserSuccess,
    loginuserError,
    userdataRequest,
    userdataSuccess,
    userdataError,
    logoutuserRequest,
    logoutuserSuccess,
    logoutuserError
} = actions;

export default reducer;