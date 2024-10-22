import { configureStore } from '@reduxjs/toolkit';
// import counterSlice from './counter';
import counterReducer from './counter';
import authSlice from './auth';

// const store = createStore(counterSlice.reducer);
//const store = configureStore({ reducer: counterSlice.reducer });//When you have a single slice

// When you have many slices
const store = configureStore({
	reducer: { counter: counterReducer, auth: authSlice.reducer },
});

export const authActions = authSlice.actions;
export default store;
