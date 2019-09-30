import { createStore } from 'redux'
import { LOGIN, Close_Modal, Open_Modal } from './action'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    user: {},
    isModalOpen: false
};


const App = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            }
        // default
        case Open_Modal:
            return {
                ...state,
                isModalOpen: true
            }

        // default:
        case Close_Modal:
            return {
                ...state,
                isModalOpen: false
            }

        default:
            return state;
    }
}


const store = createStore(App, composeWithDevTools());

export default store;
