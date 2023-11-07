import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar">

            <div className="navbar-logo">

                <h2>Attend Session</h2>

            </div>

            <ul className="navbar-links">
                <li>
                    <Link to="/signup">
                        Signup
                    </Link>
                </li>
                
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>

                <li>
                    <Link to="/profile">
                        Profile
                    </Link>
                </li>

                <li>
                    <Link to="/admin">
                        Admin
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar