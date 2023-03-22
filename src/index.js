import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./routes/App";
import { createRoot} from "react-dom/client";



ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)