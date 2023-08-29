// Importing React hooks to be used in a custom hook
import {useEffect, useState} from 'react';

// Custom hook declaration starts with use then the name of the hook
const useGetOneUser = () => {

    /* 
        Setting the default state of user to an empty array
        Naming the state variables user and setUser with array destructuring
    */
    const [user, setUser] = useState([]);

    // Hardcoding the user id will refactor later to pass a logged in user id instead
    const id = '64d02b63cf47708753b33f62';

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