// Import the fetch logic custom hook from the user components
import useGetOneUser from '../components/userFetchByIdComponent';

import useUpdateProfile from '../components/updateProfileComponent';

// UserProfile view component
const UserProfile = () => {

    // Defining user as equal to the custom hook that fetches the user data from an id
    const user = useGetOneUser();
    
    const { values, errors, handleChange, handleSubmit } = useUpdateProfile();
    /* 
        Shows the values of the user next to a text explainer of what the value is
        Also has input fields for the user to change their details which is submitted by the change details button
    */
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>{errors}</p>  
                <p>User Name: {user.userName}</p>
                    <input 
                    name="userName"
                    type="text" 
                    placeholder="Change Username"
                    value={values.userName} 
                    onChange={handleChange}
                            />
                <p>Email: {user.email}</p>
                    <input 
                    name="email"
                    type="text" 
                    placeholder="Change Email"
                    value={values.email} 
                    onChange={handleChange}/>
                <p>Password</p>
                    <input 
                    name="password"
                    type="password" 
                    placeholder="Change Password"
                    value={values.password} 
                    onChange={handleChange}
                    />
                <br/> 
                <br/>
                    <input 
                    name="confirmPassword"
                    type="password" 
                    placeholder="Confirm Password"
                    value={values.confirmPassword} 
                    onChange={handleChange}
                    />
                <p>Group Name: {user.groupName}</p>
                    <input 
                    name="groupName"
                    type="text" 
                    placeholder="Change Group"
                    value={values.groupName} 
                    onChange={handleChange}
                        />
                <p>First Name: {user.firstName}</p>
                    <input 
                    name="firstName"
                    type="text" 
                    placeholder="Change First Name"
                    value={values.firstName} 
                    onChange={handleChange}
                    />
                <p>Last Name: {user.lastName}</p>
                    <input 
                    name="lastName"
                    type="text" 
                    placeholder="Change Last Name"
                    value={values.lastName} 
                    onChange={handleChange}
                    />
                <br/> 
                <br/>
                <button type="submit">Change details</button>
            </form>
        </div>
        );
};

// Export default is used if there is only one function in the file
export default UserProfile;