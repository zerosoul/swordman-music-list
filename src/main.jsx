import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './Global.style';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Main = (
  <>
    <GlobalStyle />
    <App />
  </>
);
root.render(Main);
