// Importing necessary functions from react-router-dom
import { Outlet, Navigate } from "react-router-dom";

// Importing the custom hook for authentication
import useToken from './auth';

// Function to protect the user routes
const ProtectUserRoutes = () => {

    // Defining the getToken function from the custom hook
    const { getToken } = useToken();

        // Checking if the token is null and redirecting to the signup page if it is
        if (getToken() === null) {
            return (
                    <Navigate to="/signup"></Navigate>
            )
        }
        // Checking if the token is not an admin or an admin because they both users and can access the profile page
        else if(getToken().admin === false || getToken().admin === true) {
            return <Outlet />;
        };
    };

// Exporting the function as default
export default ProtectUserRoutes;