// Importing jest-dom for testing React
import '@testing-library/jest-dom';

// Importing render for testing React
import { render, screen } from '@testing-library/react';

// Importing User Table from admin components
import UserTable from '../../view/adminPanel';

// Test suite for admin panel view
describe('Admin Panel view tests', () => {

    // Test for the User Table
    test('User table header test', () => {

        // Render the User Table
        render(<UserTable />);

        // Asserting the expected results
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('First Name')).toBeInTheDocument();
        expect(screen.getByText('Last Name')).toBeInTheDocument();
        expect(screen.getByText('Group Name')).toBeInTheDocument();
    });

    // Test for the User Table render test
    test('Should be able to get table by role', () => {

        // TRendering the table
        render(<UserTable />);

        // Asserting the expected results
        expect(screen.getByRole('table')).toBeInTheDocument();
    });
});