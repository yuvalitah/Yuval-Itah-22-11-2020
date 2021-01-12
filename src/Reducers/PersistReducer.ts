import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./RootReducer";

const persistConfig = {
  key: "rootReducer",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
