import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import ThemeReducer from './reducers/Theme';

const rootReducers = combineReducers({
    ThemeReducer
});

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;