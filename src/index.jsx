import reactDOM from 'react-dom/client';
import './css/index.css';
import { App } from './App';
import { AppContext } from './context/Context';
const root = reactDOM.createRoot(document.querySelector("#root"));
root.render(
  <AppContext>
    <App />
  </AppContext>
);
