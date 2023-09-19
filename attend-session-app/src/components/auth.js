// Declaring a custom hook
const useToken = () => {
    
    // Function to get the token set by the server when a user is logged in
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const token = JSON.parse(tokenString);

            // Checking if the token doesn't exist and setting it to null or return the token
            if(token === undefined) {
                return null;
            }
            else {
                return token
            };
        };

    // Returning the getToken function
    return {
        getToken
    };
};

// Exporting the custom hook as default
export default useToken;