import { useState } from "react";

// Make sure you do that initial val!
export const useCounter = (initialVal = 0) => {
    const [state, setState] = useState(initialVal);

    const increment = () => {
        setState((prev) => (prev + 1));
    }

    const decrement = () => {
        setState((prev) => (prev - 1));
    }
     
    const setZero = () => {
        setState(0);
    }

    return [state, increment, decrement, setZero];
}