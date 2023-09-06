// Importing jest-dom for testing React
import '@testing-library/jest-dom';

// Importing the renderHook wrapper for testing the custom hook
import {renderHook, waitFor} from '@testing-library/react';

// Importing components for testing
import useGetAllUsers from '../../components/adminComponents';

// Test suite for the admin components
describe('Tests for all user components', () => {
    
    // Test for the admin table component
    test('should fetch all users', async () => {

            // Defining result as equal to the custom hook that fetches all users
            const { result } = renderHook(() => useGetAllUsers());

            // Asserting that the total number of users is 461
            await waitFor(() => 
            expect(result.current.length).toEqual(461));
    });
});