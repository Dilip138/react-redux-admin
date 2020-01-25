import loginReducer from './loginReducer';
import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import approvedQuesReducer from './approvedQuesReducer';

export default combineReducers({
    loginReducer,
    adminReducer,
    approvedQuesReducer
})
