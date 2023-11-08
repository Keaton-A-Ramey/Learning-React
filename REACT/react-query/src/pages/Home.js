import {useContext} from "react";
import {AppContext} from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
    // useQuery takes in 2 perameters. Array with ID's, we just put cat bc that's all we're getting
    // for now. Can keep track of all different IDs in object
    // Second parameter is the function that will fetch the data. We'll use Axios again

    // useQuery looks different in v5, it takes in an object like THIS, be sure to keep this in mind
    // Your tutorial is outdated
    // The '() => {}' after queryFn was what made it start working. You can't just write the function there.

    // That ? I used on data also really helped. I think it runs into issues sometimes when first loading
    // --> Tutorial actually touched on this: it does help, but isLoading is better utility
    // since the actual data isn't there yet before the API is called so the comp is confused.

    // Something else you can use is the isLoading boolean from useQuery
    // If you put it in that variable, it'll keep track of if it's loading or not
    // When it stops loading, it'll return the other stuff.

    // Refetch is also really useful, you can use this to just make another request.
    // Whenever you call it, requests data again.

    // If you wanna rename the parameters for outside use like data, isLoading, etc
    // const { data : catFact, ...} {} you can use catFact instead of data
    // It also refreshes for you when you tab by default. You can change that if you want: 
    // (In App.js where you initialize)

    // const client = new QueryClient({
    //  defaultOptions: {
    //      queries : {
    //          refetchOnWindowFocus: false
    //      },
    //  },
    // });

    const { data, isLoading, isError, refetch } = useQuery({ 
        queryKey: "cat", 
        queryFn : () => {
            return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
        }
    });


    const {username} = useContext(AppContext);


    if (isLoading) {
        return <h1>LOADING...</h1>
    }

    if (isError) {
        return <h1>Data Fetching Error...</h1>
    }

    return ( 
    <div>
        <h1>This is the home page, {username}!</h1> 
        <h2>I like you, here's a cat fact for you: </h2>
        <p> {data.fact}</p>
        <button onClick={refetch}>Click me man idk</button>
    </div>
    ); 
    // No states, look how easy this is omg
}