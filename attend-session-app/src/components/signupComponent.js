// Importing React hooks to be used in a custom hook
import { useState } from 'react';

// Custom hook for the signup logic
const useRegistration = () => {

    // Declaring the state for registration
    const [values, setValues] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        groupName: '',
        firstName: '',
        lastName: '',
    });

    // Function to handle the change in the input fields
    const handleChange = (event) => {

        // Making the name and value properties of event.target available
        const { name, value } = event.target;

        /* 
            Iterating through the values state to the name and value of the input fields 
            which allows us to get the new values back from the input fields 
        */
        setValues({
            ...values,
            [name]: value
        });
    };

    const [errors, setErrors] = useState('');

    // Creating a fetch asynchronous function that will register a new user
    const handleSubmit = async (event) => {

        // Stops the page from refreshing on button
        event.preventDefault();

        // If the password and confirm password do not match set the errors state
        if(values.password !== values.confirmPassword) {
            setErrors("Passwords do not match");
        } else {
                // Await the response from the signup route
                const response = await fetch("http://127.0.0.1:6012/user/signup", {

                    // Tells the user that it is a http post request
                    method: "POST",

                    // Tells the server what type of data is being sent
                    headers: {
                        "Content-Type": "application/json"
                    },

                    // The values in the body correspond to fields in the client
                    body: JSON.stringify({ 
                        userName: values.userName,
                        email: values.email,
                        password: values.password,
                        groupName: values.groupName,
                        firstName: values.firstName,
                        lastName: values.lastName
                    })
                });
                    
                    // If the fetch isn't sucessful the user is not created or the response is logged
                    if(!response.ok) {
                        response.json({message: "User not created"});
                    } else {
                        console.log(response.json());
                };
            };
        };

    // Returning all functions that are needed in the signup page from the custom hook
    return {
        values,
        errors,
        handleChange,
        handleSubmit
    };
};

// Export default is used if there is only one function in the file
export default useRegistration;