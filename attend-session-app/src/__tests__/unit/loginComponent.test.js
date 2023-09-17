// Importing the renderHook wrapper for testing the custom hook
import { renderHook, waitFor } from '@testing-library/react';

// Importing the custom hook
import useLogin from '../../components/loginComponent';

// Login component test suite
describe('Login tests', () => {

    // Test for the login component
    test('Default state of values should be empty strings', async () => {

        const expected = {
            email: '', 
            password: ''
        };

        // Defining result as equal to the custom hook that logs in users
        const { result } = renderHook(() => useLogin());

        // Asserting that the function exists
        await waitFor(() => 
        expect(result.current.values).toEqual(expected));
        console.log(result.current.values);
    });
});
