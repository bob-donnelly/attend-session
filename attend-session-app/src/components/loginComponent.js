// Importing React hooks to be used in a custom hook
import { useState } from 'react';

const useLogin = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
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

        const handleSubmit = async (event) => {

            event.preventDefault();

            const response = await fetch("http://127.0.0.1:6012/user/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            });

            if(response.ok) {
                response.json({message: "User logged in successfully"});
            } else {
                response.json({message: "User not logged in"});
            }
        };


    return {
        values,
        handleChange,
        handleSubmit
    }
};

export default useLogin;