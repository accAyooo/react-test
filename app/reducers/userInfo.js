import * as actionTypes from '../constants/userInfo';

const initialState = {};

export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_INFO_UPDATE:
            return action.data;
        default:
            return state;
    }
}