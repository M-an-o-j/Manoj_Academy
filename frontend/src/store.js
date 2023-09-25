import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import homedatastate from './slices/contentslice'
import userdatastate from './slices/userslice'
import lessondata from './slices/lessonslice'

const reducer = combineReducers({
    Homecontentstate : homedatastate,
    Userdatastate : userdatastate,
    lessondatastate : lessondata
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;