import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './GlobalStyles';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';


const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
