import { createStore, Store } from "redux";
import PersistReducer from "../Reducers/PersistReducer";
import { Persistor, persistStore } from "redux-persist";

export const store: Store = createStore(PersistReducer);
export const persistor: Persistor = persistStore(store);
