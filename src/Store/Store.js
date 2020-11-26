import { createStore } from "redux";
import PersistReducer from "../Reducers/PersistReducer";
import { persistStore } from "redux-persist";

export const store = createStore(PersistReducer);
export const persistor = persistStore(store);
