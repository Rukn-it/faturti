import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./redux-store/store"
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>

  <Provider store={store}>
  <Toaster position="top-right"/>

    <App />
    </Provider>
    </BrowserRouter>


  // </React.StrictMode>,
)
