import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./NavigationBar";
import Content from "./Content";

const App = () => {
    return (
        <>
            <NavigationBar />
            <div className="text-center mt-5">
                <h2>Popular Tour Places</h2>
            </div>
            <Content />
        </>
    );
};

export default App;
