// Importing necessary functions from react-router-dom
import { Outlet, Navigate } from "react-router-dom";

// Importing the custom hook for authentication
import useToken from './auth';

// Function to protect the admin routes
const ProtectAdminRoutes = () => {

    // Defining the getToken function from the custom hook
    const { getToken } = useToken();

        // Checking if the token is null and redirecting to the signup page if it is
        if(getToken() === null) {
            return (
                <div>
                    <Navigate to="/signup"></Navigate>
                </div>
            )
        }
        // Checking if the token is an admin and redirecting to the admin panel if it is
        else if(getToken().admin === true) {
            return <Outlet />;
        }
        // Checking if the token is not an admin and redirecting to the profile page if it is not
        else if (getToken().admin === false) {
            return (
                    <Navigate to="/profile"></Navigate>
                );
        };
};

// Exporting the function as default
export default ProtectAdminRoutes;