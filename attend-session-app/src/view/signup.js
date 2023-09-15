// Importing the signup custom hook
import useRegistration from '../components/signupComponent';

// Registration view 
const Signup = () => {

    // Importing the functions needed from the custom hook
    const { values, errors, handleChange, handleSubmit } = useRegistration();

    // Returning the signup form with the ability to submit the form with values
    return (
        <div>
            <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                <p>Username</p>
                    <input 
                        name="userName" 
                        type="text" 
                        placeholder="Username" 
                        value={values.userName} 
                        onChange={handleChange}
                    />
                <p>Email</p>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Email" 
                        value={values.email} 
                        onChange={handleChange}
                    />
                <p>Password</p>
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        value={values.password} 
                        onChange={handleChange}
                    />
                <p>Confirm Password</p>
                    <input 
                        name="confirmPassword" 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={values.confirmPassword} 
                        onChange={handleChange}
                    />
                <p>{errors}</p>   
                <p>Group Name</p>
                    <input 
                        name="groupName" 
                        type="text" 
                        placeholder="Group Name" 
                        value={values.groupName} 
                        onChange={handleChange}
                    />
                <p>First Name</p>
                    <input 
                        name="firstName" 
                        type="text" 
                        placeholder="First Name" 
                        value={values.firstName} 
                        onChange={handleChange}
                    />
                <p>Last Name</p>
                    <input 
                        name="lastName" 
                        type="text" 
                        placeholder="Last Name" 
                        value={values.lastName} 
                        onChange={handleChange}
                    />
                <br></br>
                <br></br>
                <button type="submit">Signup</button>
                </form>
                <p>
                    Already have an account? 
                    <a href="/login"> Login</a>
                </p>
        </div>
    )
};

export default Signup;