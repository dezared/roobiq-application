// import chatScriptSlice from '../redux/rootReducer.js'
// import { createStore } from '@reduxjs/toolkit'
// import { applyMiddleware, compose, combineReducers } from 'redux'
import { createBrowserHistory } from 'history';
//
// import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
//
// const createRootReducer = (historyState) => combineReducers(
//     {
//         chatScript: chatScriptSlice
//     }
// )
//
export default createBrowserHistory();
//
// export default function completeStore(preloadedState) {
//     const store = createStore(
//         createRootReducer(history),
//         preloadedState,
//         compose(
//             applyMiddleware(
//                 createLogger(),
//             ),
//         ),
//     )
//
//     return store
// }
