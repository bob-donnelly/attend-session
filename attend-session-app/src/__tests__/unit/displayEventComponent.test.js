// Importing jest-dom for testing React
import '@testing-library/jest-dom';

// Importing the renderHook wrapper for testing the custom hook
import { renderHook, waitFor } from '@testing-library/react';

// Importing components for testing
import useGetAllActivities from '../../components/displayEventComponent';

// Fetch request to check the custom hook is not changing the base data
const getAll = async () => {

    // Await the activities data from the admin route
    const response = await fetch("http://127.0.0.1:6012/admin/activities");

    // If the response is ok await the response as data then return the data
    if(response.ok) {
        const data = await response.json();
        return data;
    } else {
        response.json({message: "Activities not found"});
    };
}

// Test suite for the displayEvent component
describe('Tests for the displayEvent component', () => {
        
        // Test for the displayEvent component
        test('Should fetch all activities', async () => {
    
                // Defining result as equal to the custom hook that fetches all activities
                const { result } = renderHook(() => useGetAllActivities());
    
                const activities = await getAll();
    
                // Asserting that the total number of activities is equal to the number in the database
                await waitFor(() => 
                expect(result.current.length).toEqual(activities.length));
        });
});