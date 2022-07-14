import React from 'react';
import ReactDOM from 'react-dom'
import { App } from './pages';
import { GlobalStyle} from './components/GlobalStyle'


ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle /> 
        <App />
    </React.StrictMode>

, document.querySelector("#root"));