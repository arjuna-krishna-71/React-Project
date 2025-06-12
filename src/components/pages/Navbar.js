import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
                <ul className="navbar-nav ">
                    <li className="nav-item mx-2"><NavLink to='/'>Home</NavLink></li>
                    <li className="nav-item mx-2"><NavLink to='/registration'>Register</NavLink></li>
                    <li className="nav-item mx-2"><NavLink to='/adminhome'>Admin Home</NavLink></li>
                    <li className="nav-item mx-2"><NavLink to='/userhome'>User Home</NavLink></li>

                </ul>
            </nav>
        </>
    )
}
export default Navbar;