import loginReducer from './loginReducer';
import { combineReducers } from 'redux';
import adminReducer from './adminReducer'

export default combineReducers({
    loginReducer,   
    adminReducer
    
})