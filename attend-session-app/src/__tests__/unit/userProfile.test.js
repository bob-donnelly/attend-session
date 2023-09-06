// Importing jest-dom for testing React
import '@testing-library/jest-dom';

// Importing render for testing React
import { render, screen } from '@testing-library/react';

// Importing the user orofile view
import UserProfile from '../../view/userProfile';

// User profile view test suite
describe('User Profile tests', () => {

    // Test for the user profile information fields loading data
    test('Should load user profile information fields', () => {
            
            // Render the user profile view
            render(<UserProfile />);
            
            // Asserting the expected results
            expect(screen.getByText('User Name:')).toBeInTheDocument();
            expect(screen.getByText('Email:')).toBeInTheDocument();
            expect(screen.getByText('Password')).toBeInTheDocument();
            expect(screen.getByText('Group Name:')).toBeInTheDocument();
            expect(screen.getByText('First Name:')).toBeInTheDocument();
            expect(screen.getByText('Last Name:')).toBeInTheDocument();
    });

    // Test for the user profile button field
    test('Should load user profile button field', () => {

        render(<UserProfile />);

        expect(screen.getByRole('button', 'Change Details')).toBeInTheDocument();
    });

        // Test for the user profile button field
        test('Should load user profile input text fields', () => {

            render(<UserProfile />);

            expect(screen.getByPlaceholderText('Change Username')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Change Email')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Change Password')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Change Group')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Change First Name')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Change Last Name')).toBeInTheDocument();
        });

        
});