// Importing jest-dom for testing React
import '@testing-library/jest-dom';

// Importing the renderHook wrapper for testing the custom hook
import { renderHook, waitFor } from '@testing-library/react';

// Importing components for testing
import useGetAllUsers from '../../components/adminTableComponent';

// Fetch request to check the custom hook is not changing the base data
const getAll = async () => {

    // Await the users data from the admin route
    const response = await fetch("http://127.0.0.1:6012/user/admin");

    // If the response is ok await the response as data then return the data
    if(response.ok) {
        const data = await response.json();
        return data;
    } else {
        response.json({message: "Users not found"});
    };
};

// Test suite for the admin components
describe('Tests for all user components', () => {
    
    // Test for the admin table component
    test('Should fetch all users', async () => {

            // Defining result as equal to the custom hook that fetches all users
            const { result } = renderHook(() => useGetAllUsers());

            const users = await getAll();

            // Asserting that the total number of users is equal to the number in the database
            await waitFor(() => 
            expect(result.current.length).toEqual(users.length));
    });
});