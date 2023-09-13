// Importing the signup custom hook
import useRegistration from '../components/signupComponent';

// Registration view 
const Signup = () => {

    return (
        <div>
            <h1>Signup</h1>
            <div className="form">
                <p>Username</p>
                <input type="text" placeholder="Username"/>
                <p>Email</p>
                <input type="email" placeholder="Email"/>
                <p>Password</p>
                <input type="password" placeholder="Password"/>
                <p>Confirm Password</p>
                <input type="password" placeholder="Confirm Password"/>
                <p>Group Name</p>
                <input type="text" placeholder="Group Name"/>
                <p>First Name</p>
                <input type="text" placeholder="First Name"/>
                <p>Last Name</p>
                <input type="text" placeholder="Last Name"/>
                <br></br>
                <br></br>
                <button>Signup</button>

                <p>
                    Already have an account? 
                    <a href="/login"> Login</a>
                </p>
            </div>
        </div>
    )
};

export default Signup;