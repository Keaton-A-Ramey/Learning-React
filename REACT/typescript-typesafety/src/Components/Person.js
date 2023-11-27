import propTypes from "prop-types";

export const Person = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person {props.isMarried ? "is" : "is not"} married</h1>
            <h1>Friends:</h1>
            {props.friends.map((friend) => (
                <h1>{friend}</h1>
            ))}
        </div>
    );
};


// This isn't realy too too useful -- it is a notifier, not much more
// WE NEED TYPESCRIPT
Person.propTypes = {
    name: propTypes.string,
    email: propTypes.string,
    age: propTypes.number,
    isMarried: propTypes.bool,
    friends: propTypes.arrayOf(propTypes.string),
}

