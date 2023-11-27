import { useState } from "react";
import { login, logout } from "./store";
// This dispatch is for "dispatching" any actions we have in our store.
import { useDispatch, useSelector } from "react-redux";
// Put global states in the redux store.

export const Login = () => {
    const [newUsername, setNewUsername] = useState("");
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username);

    return (
        <div>
            <h1>My crazy login page, {username}</h1>
            <h1>Holy shit its a login</h1>
            <h1>I know how crazy is that on a page called login</h1>
            <input placeholder="This does noting"
            onChange={(e) => {
                setNewUsername(e.target.value);
            }}/>
            <button onClick={() => dispatch(login({ username: newUsername}))}>
                Burn 1.42 calories
            </button>
            <h6>Yes clicking does burn 1.42 calories. It will also log you in if you couldn't tell.</h6>

            <br></br>

            <button onClick={() => dispatch(logout())}>Burn another 1.42 calories?</button>
            <h6>It'll log you out this time.</h6>
        </div>
    )
}