import "regenerator-runtime/runtime";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Saga from "@redux/saga/Saga";
import CatalogReducer from "@redux/reducer/CatalogReducer";
import { configureStore } from "@reduxjs/toolkit";

function getStore(preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      catalog: CatalogReducer,
    },
    preloadedState,
    enhancers: [applyMiddleware(sagaMiddleware)],
  });

  sagaMiddleware.run(Saga);

  return store;
}

export default getStore;
