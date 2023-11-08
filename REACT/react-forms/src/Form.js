import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {


    // Specifcying shape of schema
    // Our data from the form is an object, this is where we specify how it ought to look
    // Error message generation is a string in the associated parentheses
    const schema = yup.object().shape({
        // Required means it can't be empty
        fullName: yup.string().required("Your full name is required."),
        // Enforces that it has to look like email
        email: yup.string().email("Invalid email entered.").required("Your email is required."),
        // Age is a number, has to be positive, integer, min 18, required
        age: yup.number().integer("Your age must be a whole number").min(18, "You must be at least 18.").required("Your age is required"),
        // Password is a string, min length 4, max length 18, required
        password: yup.string().min(4, "Your password is too short (under 4 characters)").max(18, "Your password is too long (over 18 characters).").required("You need a password."),
        // Confirm password is a string, same as oneOf other elements specifically password
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Does not match password.").required("Your password must be confirmed."),
    });

    // handleSubmit will give us all the data we register from the form (onsubmit encapsulates the form)
    const onSubmit = (data) => {
        console.log(data);
    };

    // Register is used in each input to see which inputs should be part of validation
    // Its like the way of generating objects from the user input. 
    // Resolver is how we enforce schema's structure. Have to import all kinds of stuff
    const {register, handleSubmit, formState : {errors}} = useForm({
        resolver : yupResolver(schema),
        // At this point, form will not submit unless schema structure satisfied
        // ADD THE FORM STATE {errors}, creates object w error messages for all the input fields
    });

    /*
    How to validate that inputs are ok??
    --> that's where yup comes in.
    */

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit"/>
        </form>
    )

    // Those p tags can show each error's message associated! It is a bit technical, so
    // if you want these to be more readable, you have to manage that yourself.
}