// Importing jest-dom for testing React
import '@testing-library/jest-dom';

// Importing render for testing React
import { render, screen } from '@testing-library/react';

import Login from '../../view/login';

// Login view test suite
describe('Login tests', () => {

    test('Should load the login fields', async () => {
                
                // Render the login view
                render(<Login />);
        
                // Asserting the expected results
                expect(screen.getByText('Email')).toBeInTheDocument();
                expect(screen.getByText('Password')).toBeInTheDocument();
    });
});