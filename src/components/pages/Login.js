import { useState } from "react";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/LoginSlice";


function Login() {
    const [logData, setLogData] = useState({});
    const [err, setErr] = useState("");
    let navigate = useNavigate();

    const handleChange = (e) => {
        setLogData({ ...logData, [e.target.name]: e.target.value });
    };

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.login);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!logData.login || !logData.email || !logData.password) {
            setErr("All fields are required");
            return;
        }

        dispatch(loginUser({...logData,navigate}))
            .unwrap()
            .then(() => {
                setErr("");
            })
            .catch((errMsg) => {
                setErr(errMsg);
            });
    };


    return (
        <div className="text-center" id="login">
            <form onSubmit={handleLogin} autoComplete="off">
                <p className="text-dark display-6">Login</p><br />
                {(err || error) && <h1 className="display-6 text-danger">{err || error}</h1>}
                {loading && <p className="text-primary">Logging in...</p>}
                <input type="radio" name="login" value="user" id="userRadio" onChange={handleChange} />
                <label className="p-2" htmlFor="userRadio">User</label>
                <input type="radio" name="login" value="admin" id="adminRadio" onChange={handleChange} />
                <label className="p-2" htmlFor="adminRadio">Admin</label><br /><br />

                <label htmlFor="email">Enter Username</label>
                <input type="email" autoComplete="off" placeholder="Enter your username:" name="email" id="email" onChange={handleChange} /><br /><br />

                <label htmlFor="password">Enter Password</label>
                <input type="password" autoComplete="off" placeholder="Enter your password:" name="password" id="password" onChange={handleChange} /><br /><br />

                <input type="submit" value="Login" className="m-5 bg-primary" />
            </form>
        </div>
    );
}

export default Login;
