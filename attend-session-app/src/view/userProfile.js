// Import the fetch logic custom hook from the user components
import useGetOneUser  from '../components/userComponents';

// UserProfile view component
const UserProfile = () => {

    // Defining user as equal to the custom hook that fetches the user data from an id
    const user = useGetOneUser();
    
    /* 
        Shows the values of the user next to a text explainer of what the value is
        Also has input fields for the user to change their details which is submitted by the change details button
    */
    return(
        <div>
            <p>User Name: {user.userName}</p>
                <input type="text" placeholder="Change Username"/>
            <p>Email: {user.email}</p>
                <input type="text" placeholder="Change Email"/>
            <p>Password</p>
                <input type="text" placeholder="Change Password"/>
            <br/> 
            <br/>
                <input type="text" placeholder="Confirm Password"/>
            <p>Group Name: {user.groupName}</p>
                <input type="text" placeholder="Change Group"/>
            <p>First Name: {user.firstName}</p>
                <input type="text" placeholder="Change First Name"/>
            <p>Last Name: {user.lastName}</p>
            <input type="text" placeholder="Change Last Name"/>
            <br/> 
            <br/>
            <button>Change details</button>
        </div>
        );
};

// Export default is used if there is only one function in the file
export default UserProfile;