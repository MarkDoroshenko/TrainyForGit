import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/zFooter/Footer';

const App = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
