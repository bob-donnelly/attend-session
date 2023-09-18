// Importing React hooks to be used in a custom hook
import { useEffect, useState } from 'react';

// Importing the useToken custom hook that gets the token from session storage
import useToken from '../components/auth';

// Custom hook declaration starts with use then the name of the hook
const useGetOneUser = () => {

    /* 
        Setting the default state of user to an empty array
        Naming the state variables user and setUser with array destructuring
    */
    const [user, setUser] = useState([]);

    // Using get token from the useToken custom hook.
    const { getToken } = useToken();

    // Setting the id to be the value of the users id token that is saved to storage when they log in
    const id = getToken()._id;

    // Creating a fetch asynchronous function that will return all users and set the state
    const fetchOneUser = async () => {
        
        // Await the user data from the passed id on the account route
        const response = await fetch(`http://127.0.0.1:6012/user/account/${id}`);

            // If the response is ok set the response json to be the data and set the state as the user
            if(response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                response.json({message: "User not found"});
            };
    };

        // This hook is used to synchronise the component with an external system i.e., the express app
        useEffect(() => {
            fetchOneUser();
        }, [id]);

        // Return the user state
        return user;
};

// Export default is used if there is only one function in the file
export default useGetOneUser;