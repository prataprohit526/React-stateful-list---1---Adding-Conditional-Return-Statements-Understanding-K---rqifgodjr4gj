import React, { useState } from "react";

import "../styles/App.css";

const data = {
    2018: ["Avengers 1", "Now you see me", "Fast and Furious 7"],
    2019: ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
    2020: [
        "Final Avengers Movie(Iron man dies)",
        "Now you finally used Lenskart",
        "Covid Came",
    ],
    2021: ["Covid Returns"],
    2022: ["Adventures of Saiman", "Adventures of Shaktiman"],
};
const generateRandomNumber = () => {
    let random = "";
    for (let i = 0; i < 8; i++) {
        random += Math.floor(Math.random() * 9);
    }
    return random;
};
const App = () => {
    const [currentMovieSelected, setCurrentMovieSelected] =
        useState("No year selected");

    const handleChange = (e) => {
        if (e.target.value === "") {
            setCurrentMovieSelected("No year selected");
        } else {
            let ul = (
                <>
                    Selected year-{e.target.value}
                    <ul>
                        {data[e.target.value].map((value) => {
                            return (
                                <li key={generateRandomNumber()}>{value}</li>
                            );
                        })}
                    </ul>
                </>
            );
            setCurrentMovieSelected(ul);
        }
    };
    return (
        <div id="main">
            <select onChange={(e) => handleChange(e)}>
                <option value={null}></option>
                {/* [[2022, "value"], [2022, "value"],...] */}
                {Object.entries(data).map(([key, value]) => {
                    return (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    );
                })}
            </select>
            <div id="selected-year">{currentMovieSelected}</div>
        </div>
    );
};

export default App;