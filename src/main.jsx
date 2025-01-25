import { createRoot } from 'react-dom/client';
import App from './App';
import './css/styles.css';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { BrowserRouter as Router } from 'react-router-dom';

const app = document.querySelector('#root');
const root = createRoot(app);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
