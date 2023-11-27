
import {useState} from "react";

// We have to DEFINE THE TYPES for props

// Make this a string? See the ': string'
const name: string = "eoirwer";

// If you want it to just be anything you can do this, but don't
const mything: any = "eoirwer";

// How do we define props? INTERFACES, defines shape of obj

// Define how props ought to look...
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    // If there is no country, it won't run
    // UNLESS YOU ADD '?' LIKE THIS: country?: string;
    country: Country;
}

// What if we want to enforce that the string can ONLY be one of a couple things?
// You can be from either USA or nowhere
export enum Country {
    American = "U.S.A",
    Nowhere = "Nowhere",
}

// Enforce it in there
export const Person = (props: Props) => {
    // DEFINING TYPES W STATES?
    // This is very reminiscent of java
    const [name, setName] = useState<string>("");

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person {props.isMarried ? "is" : "is not"} married</h1>
            <h1>Friends:</h1>
            {props.friends.map((friend: string) => (
                <h1>{friend}</h1>
            ))}
            <h1>From: {props.country}</h1>
        </div>
    );
};