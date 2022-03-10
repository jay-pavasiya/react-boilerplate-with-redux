// import { REHYDRATE } from 'redux-persist';


var initState = {
    filter:[]
};

function CMSReducer(state = initState, action) {
    switch (action.type) {
        case 'CASE':
            debugger
            return {
                ...state,
                filters: action.payload,
            };
        // case REHYDRATE:
        //     return {
        //         ...state,
        //     };
        default:
            return {
                ...state,
            };
    }
}

export const reducer = CMSReducer;
