import {combineReducers} from 'redux'
import dataTable from './dataTable'
import translate from './translate'
export default combineReducers({
    translate: translate
})