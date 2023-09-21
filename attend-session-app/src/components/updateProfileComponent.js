// Importing React hooks to be used in a custom hook
import { useState } from 'react';
// Importing the useToken custom hook that gets the token from session storage
import useToken from '../components/auth';

// Custom hook for the signup logic
const useUpdateProfile = () => {

    // Using get token from the useToken custom hook.
    const { getToken } = useToken();

    const [errors, setErrors] = useState('');

    // Declaring state for updating profile
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
    const handleChange = async (event) => {

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const id = getToken()._id;

        // If the passwords do not match prevent updating to a password the user is unable to login with
        if(values.password !== values.confirmPassword) {
            setErrors("Passwords do not match");
        } else {

            // Deletes the default values to not send empty strings to the database
            Object.keys(values).forEach(key => {
                if(values[key] === ''){
                    delete values[key];
                };
            });

            const response = await fetch(`http://127.0.0.1:6012/user/update/${id}`, {

                    // Tells the server that it is a http patch request
                    method: "PATCH",

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
                    if(response.ok) {
                        response.json({message: "User details changed"});
                    } else {
                        console.log(response.json());
                };
        };
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    };
};

export default useUpdateProfile;