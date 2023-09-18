const useToken = () => {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const token = JSON.parse(tokenString);
        return token
    };

    return {
        getToken
    };
};

export default useToken;