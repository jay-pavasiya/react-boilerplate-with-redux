import { REHYDRATE } from 'redux-persist';


var initState = {
    YourState:[]
};

function Reducer(state = initState, action) {
    switch (action.type) {
        case 'CASE':
            return {
                ...state,
                YourState: action.payload,
            };
        case REHYDRATE:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
}

export const reducer = Reducer;
