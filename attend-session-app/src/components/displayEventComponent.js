// Importing React hooks to be used in a custom hook
import { useEffect, useState } from 'react';

// Custom hook declaration starts with use then the name of the hook
const useGetAllActivities = () => {

    /* 
        Setting the default state of activities to an empty array
        Naming the state variables activities and setActivities with array destructuring
    */
    const [activities, setActivities] = useState([]);

    // Creating a fetch asynchronous function that will return all activities and set the state
    const fetchAllActivities = async () => {

        // Await the activities data from the admin route
        const response = await fetch("http://127.0.0.1:6012/admin/activities");

        // If the response is ok set the response json to be the data and set the state as the activities
        if(response.ok) {
            const data = await response.json();
            setActivities(data);
        } else {
            response.json({message: "Activities not found"});
        };
    };

    // This hook is used to synchronise the component with an external system i.e., the express app
    useEffect(() => {
        fetchAllActivities();
    }, []);

    // Return the activities state
    return activities;
};

// Export default is used if there is only one function in the file
export default useGetAllActivities;