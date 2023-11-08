import {useContext} from "react";
import {AppContext} from "../App";
import {useState} from "react";

export const ChangeProfile = (props) => {
    const [newUsername, setNewUsername] = useState("");
    const {setUsername} = useContext(AppContext);

    return (
        <div>
            <input 
                onChange={(event) => {
                    setNewUsername(event.target.value);
                }}
            />
            <button onClick={() => {setUsername(newUsername)}}>Update Name!</button>
        </div>
    )
}