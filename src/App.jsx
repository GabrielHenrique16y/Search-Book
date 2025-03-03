import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import Rotas from './Routes/index';
import GlobalStyle from './styles/GlobalStyles';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import FooterBar from './components/Footer';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Header/>
                    <Rotas />
                    <GlobalStyle />
                    <ToastContainer
                        autoClose={5000}
                        hideProgressBar={true}
                        progressClassName="toastProgress"
                        bodyClassName="toastBody"
                    />
                    <FooterBar />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
