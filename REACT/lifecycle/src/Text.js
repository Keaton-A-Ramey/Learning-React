import React from "react";
import { useState, useEffect } from "react"; 

export const Text = () => {
    const [text, setText] = useState("");

    // This one is going to trigger every time the component is changed in any way. Just like something
    // that happens every time something mounts, updates, or unmounts
    useEffect(() => {
        console.log("COMPONENT MOUNTED");

    return () => {
       console.log("COMPONENT UNMOUNTED");
    }
    })

    // Typing in that input div changes the value of the text appear in the h1 tag. 
    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value);
            }}
            />

            <h1>{text}</h1>
        </div>
    );
};