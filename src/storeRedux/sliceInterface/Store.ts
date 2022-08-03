import { configureStore } from '@reduxjs/toolkit'
import authReducers from '../slice/AuthSlice'
import patientFormReducers from '../slice/PatientRecord'
// for to connected our application go to app.tsx 
export const store = configureStore({
  reducer: {
    isLoggedIn: authReducers,
    patientRecord: patientFormReducers,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

