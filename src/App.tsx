import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import './App.css';
import AppRoutes from './routes/AppRoutes';
import{ Provider } from 'react-redux';
import { store } from './storeRedux/sliceInterface/Store'

function App() {
  return (
    //  create slice in authSlice
    <Provider store={store}>
      <BrowserRouter>
          <AppRoutes/>
     
     </BrowserRouter>
     </Provider>

   
    
  );
}

export default App;
