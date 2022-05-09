import "regenerator-runtime/runtime";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Saga from "@redux/saga/Saga";
import MainReducer from "@redux/reducer/MainReducer";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    main: MainReducer,
  },
  preloadedState: {},
  enhancers: [applyMiddleware(sagaMiddleware)],
});

sagaMiddleware.run(Saga);

export default store;

// export const getServerStore = function (serverPreloadedState: any) {
//     return configureStore(
//         reducers,
//         serverPreloadedState,
//         composeWithDevTools(applyMiddleware(sagaMiddleware))
//     );
// };
