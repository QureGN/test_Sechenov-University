import React from 'react';
import './global.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {MainPage} from "./pages/MainPage/MainPage"
import {store} from "./store/store"; 

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
      
        <div>

          <Routes>
            
            <Route path="/" element={<MainPage/>}/>
            

          </Routes>
        </div>
            
          
      </BrowserRouter>

    </Provider>
    
  );
}

export default App;
