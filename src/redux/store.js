import {createStore} from 'redux';
import {rootReducer} from './rootReducer.js';

export const configureStore = () => {
    return createStore(rootReducer());
}
