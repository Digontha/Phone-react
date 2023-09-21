import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import mainLayout from './Route/Route.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={mainLayout}></RouterProvider>
  </React.StrictMode>,
)
