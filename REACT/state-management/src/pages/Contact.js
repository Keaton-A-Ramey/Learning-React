import {useContext} from "react";
import {AppContext} from "../App";
import { ChangeProfile } from "../components/ChangeProfile";

export const Contact = (props) => {
    const {username} = useContext(AppContext);
    return (
        <div>
            <h1>Just yell out your window, {username}, and we'll hear </h1> 
            <ChangeProfile />
        </div>
    );
}