import {createStore, combineReducers, applyMiddleware} from 'redux';
import HomeReducer from './reducers/HomeReducer';
import thunk from 'redux-thunk';



const store = createStore(combineReducers({HomeReducer}), {}, applyMiddleware(thunk));
store.subscribe(function(){
	console.log('subscribe');
});

export default store;

