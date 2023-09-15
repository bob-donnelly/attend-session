// Importing the renderHook wrapper for testing the custom hook
import { renderHook, waitFor } from '@testing-library/react';

// Importing the custom hook
import useRegistration from '../../components/signupComponent';

const expected = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    groupName: '',
    firstName: '',
    lastName: ''
}


// Test suite for the signup component
describe('Tests for the signup component', () => {

    // Test for the signup component
    test('Default state of values should be empty strings', async () => {

        // Defining result as equal to the custom hook that signs up users
        const { result } = renderHook(() => useRegistration());

        // Asserting that the function exists
        await waitFor(() => 
        expect(result.current.values).toEqual(expected));
        console.log(result.current.values);
        });
});