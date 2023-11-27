import { useState } from "react";


export const useToggle = (initialVal = false) => {
    // We made the name generic so it can be used for lots of stuff. 
    const [state, setState] = useState(initialVal);

    // Having to rewrite the toggling over and over is annoying, so we
    // put it in here, the toggle state
    const toggle = () => {
        setState((prev) => !prev);
    }

    // Return is where we differ! We want everything
    // NOT RETURNING JSX, Hooks are for logic not relating to UI
    // We want access to the state and the function
    // We don't need the state, we're toggling in here.

    // If you want predefined variable names, you can return an object instead
    // You can rename it by doing state: isVisible in App.js
    // but if you want that control just do this.
    return [state, toggle];
}