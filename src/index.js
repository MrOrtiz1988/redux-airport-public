import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const airlineNames = [
    {
        id: 1,
        name: 'United'
    },
    {
        id: 2,
        name: 'Spirit'
    }
]

/** TODO: Add REDUCERS */
const airlineArray = (state=airlineNames, action) => {
    if(action.type === 'ADD_AIRLINE') {
        const newAirline = action.payload
        const newId = state.length + 1
        const newInfo = {
            id: newId,
            name: newAirline
        }
       
        return [...state, newInfo]
    }
    return state;
}

/** TODO: Create store */
const ourFirstStore = createStore(
    combineReducers({
      airlineArray
    }),
    applyMiddleware(
      logger
    )
  );


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={ourFirstStore}>
        <App />
    </Provider>
    </React.StrictMode>
);