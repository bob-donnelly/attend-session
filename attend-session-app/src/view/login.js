import useLogin from '../components/loginComponent';

const Login = () => {

    const { values, handleChange, handleSubmit} = useLogin();

    // 
    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <p>Password</p>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;