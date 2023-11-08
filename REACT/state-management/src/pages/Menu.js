import {useContext} from "react";
import {AppContext} from "../App";

export const Menu = (props) => {
    const {username} = useContext(AppContext);
    return (
        <h1>We got pizza, {username}, big ones and small ones with basil.</h1>
    );
}