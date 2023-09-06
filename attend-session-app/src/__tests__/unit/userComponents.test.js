// Importing jest-dom for testing React
import '@testing-library/jest-dom';

// Importing the renderHook wrapper and waitFor functions for testing the custom hook
import { renderHook, waitFor } from '@testing-library/react';

// Importing components for testing
import useGetOneUser from '../../components/userComponents';

// Test suite for the user components
describe('Tests for all user components', () => {
    
    // Test for the user profile component
    test('Should fetch one user by id', async () => {

        // User document to be compared
        const expected = {
            "__v": 0, 
            "_id": "64d02b63cf47708753b33f62", 
            "admin": false, 
            "email": "hjanjusevic0@hp.com", 
            "firstName": "Hilario", 
            "groupName": "White, Wuckert and Swift", 
            "lastName": "Janjusevic", 
            "password": "$2b$10$M9oJUk31uD0ez57e9OsE0e8rYA2/RnlObBiFEHAuROqSLJfypjx6W", 
            "userName": "hjanjusevic0"
        };
            
            // Defining user as equal to the custom hook that fetches the user data from an id
            const { result } = renderHook(() => useGetOneUser());

            // Waiting for the state to be updated then comparing the result to the expected
            await waitFor(() => 
            expect(result.current).toEqual(expected));
    });
});