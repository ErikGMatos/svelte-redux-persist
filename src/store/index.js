import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { whitelist, STORAGE_NAME } from './persistReducer';

const sagaMonitor = null;
const SagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});
const enhancer = applyMiddleware(SagaMiddleware);
const reduxStore = createStore(rootReducer,  enhancer);
SagaMiddleware.run(rootSaga);

const svelteStore = {
  ...reduxStore,
  subscribe(fn) {
    const initialStore = reduxStore.getState()
    Object.keys(initialStore).forEach(key => {
      if(whitelist.includes(key) && 
      localStorage.getItem(STORAGE_NAME)
      ){
       const storage = JSON.parse(localStorage.getItem(STORAGE_NAME));
       if(storage[key]) {
         initialStore[key] = { ...storage[key] }
       }
      }
    });
    fn(initialStore);
    return reduxStore.subscribe(() => {
      const updatedStore = reduxStore.getState()
      const storeToSave = {}
      Object.keys(updatedStore).forEach(key => {
        if(whitelist.includes(key)) {
          storeToSave[key] = { ...updatedStore[key] }
          localStorage.setItem(STORAGE_NAME, JSON.stringify(storeToSave))
         }
      });
      fn(updatedStore);
    });
  }
} 

export default svelteStore;
