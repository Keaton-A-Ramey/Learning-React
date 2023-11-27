import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
    const username = useSelector((state) => state.user.value.username);

    return (
        <div>
            <h1>YO {username}</h1>
            <h1>YO {username}</h1>
            <h1>YO {username}</h1>
            <h1>MY NAME IS JOE</h1>
            <h1>AND I LOST MY TOE</h1>
            <h1>IN MEXICO</h1>
        </div>
    )
}