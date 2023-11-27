import { useDispatch, useSelector } from "react-redux";

export const Contact = () => {
    const username = useSelector((state) => state.user.value.username);

    return (
        <div>
            <h1>hey {username}</h1>
            <h1>Im here lets talk</h1>
        </div>
    )
}