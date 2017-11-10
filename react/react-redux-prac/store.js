import {combineReducers, applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import HomeReducer from './reducers/HomeReducer';
import HeaderReducer from './reducers/HeaderReducer';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({HomeReducer, HeaderReducer}), 
	{}, applyMiddleware(thunk, logger()));

store.subscribe(() => {
	console.log('subscribe method');
});

//before dispatching the actions to the reducer, the subscribe 
//method runs here.
export default store;