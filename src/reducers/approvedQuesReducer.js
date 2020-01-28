import { userConstants } from '../constants/userConstant';

export default (state = { ques: [] }, action) => {
    console.log("action",action);
    
    switch (action.type) {
        case userConstants.GETALLQUESTION_SUCCESS:
            return {
                loading: true,
                ques: action.user
            }
        case userConstants.GETALLQUESTION_FAILURE:
            return {
                loading: false,
            }
        default:
            return {
                state
            }
    }
}