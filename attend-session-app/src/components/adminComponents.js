// Importing React hooks to be used in a custom hook
import {useEffect, useState} from 'react';

// Custom hook declaration starts with use then the name of the hook
const useGetAllUsers = () => {

    /* 
        Setting the default state of users to an empty array
        Naming the state variables users and setUsers with array destructuring
    */
    const [users, setUsers] = useState([]);
    
    // Creating a fetch asynchronous function that will return all users and set the state
    const fetchAllUsers = async () => {

        // Await the users data from the admin route
        const response = await fetch("http://127.0.0.1:6012/user/admin");

        // If the response is ok set the response json to be the data and set the state as the users
        if(response.ok) {
            const data = await response.json();
            setUsers(data);
        } else {
            response.json({message: "Users not found"});
        };
    };

    // This hook is used to synchronise the component with an external system i.e., the express app
    useEffect(() => {
        fetchAllUsers();
    }, []);

    // Return the users state
    return users;

};

// Export default is used if there is only one function in the file
export default useGetAllUsers;