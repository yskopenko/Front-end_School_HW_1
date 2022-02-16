import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import PersonalFeed from './pages/personalFeed/PersonalFeed';
import User from './pages/user/User';
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./styled/theme";

function App() {

  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };
  return (


    <div className="App">
      <Header />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-9">
            <div className="mb-9">
            <button onClick={switchTheme}>Switch Theme</button>
              <Routes>
                <Route path="/" element={<PersonalFeed />} />
                <Route path="user/:username" element={<User />} />
                <Route path="*" element={<div>Not found</div>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
