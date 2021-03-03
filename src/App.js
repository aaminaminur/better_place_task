import React from "react";
import Items from "./Items";
import Header from "./Items/nav_bar";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <Items />
            </header>
        </div>
    );
}

export default App;
