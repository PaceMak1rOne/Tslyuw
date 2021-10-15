import { createStore } from 'redux'
import languageReducer from './language/languageReducer';
const store = createStore(languageReducer);

export type RooutState = ReturnType<typeof store.getState>

export default store