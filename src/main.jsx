import { createRoot } from 'react-dom/client';
import App from './App';
import './css/styles.css';
import { Provider } from 'react-redux';
import store from './store/index.js';

const app = document.querySelector('#root');
const root = createRoot(app);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
