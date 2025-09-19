import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

// Combinaison des réducteurs
const rootReducer = combineReducers({
  auth: authReducer,
});

// Configuration du store avec les réducteurs
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactiver la vérification des valeurs non sérialisables
    }),
});

export default store;
