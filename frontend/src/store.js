import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import homedatastate from './slices/contentslice'
import userdatastate from './slices/userslice'

const reducer = combineReducers({
    Homecontentstate : homedatastate,
    Userdatastate : userdatastate
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;