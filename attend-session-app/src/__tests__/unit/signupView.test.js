// Importing jest-dom for testing React
import '@testing-library/jest-dom';

// Importing render for testing React
import { render, screen } from '@testing-library/react';

import Signup from '../../view/signup';

// Signup view test suite
describe('Signup tests', () => {

    test('Should load signup fields', () => {
            
            // Render the signup view
            render(<Signup />);
    
            // Asserting the expected results
            expect(screen.getByText('Username')).toBeInTheDocument();
            expect(screen.getByText('Email')).toBeInTheDocument();
            expect(screen.getByText('Password')).toBeInTheDocument();
            expect(screen.getByText('Confirm Password')).toBeInTheDocument();
            expect(screen.getByText('Group Name')).toBeInTheDocument();
            expect(screen.getByText('First Name')).toBeInTheDocument();
            expect(screen.getByText('Last Name')).toBeInTheDocument();
    });

    // Test for the Signup button field
    test('Should load Signup button field', () => {
        render(<Signup/>);
        expect(screen.getByRole('button', 'Signup')).toBeInTheDocument();
    });

    // Test for the login link
    test('Should have a link to login', () => {
        render(<Signup/>);
        expect(screen.getByRole('link')).toHaveAttribute('href', '/login');
    });
});