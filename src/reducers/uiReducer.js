import {types} from '../types/types'


const initialState = {
    openModal: false,
    dataModal: {}
}

const uiReducer = (state = initialState, action)=> {
    const {payload} = action;

    switch (action.type) {
        case types.openModal:
            return {
                ...state,
                openModal: true,
                dataModal: payload
            };
        case types.closeModal:
            return {
                ...state,
                openModal: false,
                dataModal: {}
            }
    
        default:
            return state;
    }

}

export default uiReducer;
