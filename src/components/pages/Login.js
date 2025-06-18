import { useState } from "react";
import "./css/Login.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/LoginSlice";


function Login() {
    const [logData, setLogData] = useState({});
    const [err, setErr] = useState("");
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
      
        dispatch(loginUser(logData))
            .unwrap()
            .then((res) => {
                sessionStorage.setItem("logtype", res.userType);
                sessionStorage.setItem("name", res.userData.name);
                sessionStorage.setItem("log-email", res.userData.email);
                setErr("");
            })
            .catch((errMsg) => {
                setErr(errMsg);
            });
    };


    return (
        <div className="text-center" id="login">
            <form onSubmit={handleLogin}>
                <p className="text-dark display-6">Login</p><br />
                {(err || error) && <h1 className="display-6 text-danger">{err || error}</h1>}
                {loading && <p className="text-primary">Logging in...</p>}
                <input type="radio" name="login" value="user" id="userRadio" onChange={handleChange} />
                <label className="p-2" htmlFor="userRadio">User</label>
                <input type="radio" name="login" value="admin" id="adminRadio" onChange={handleChange} />
                <label className="p-2" htmlFor="adminRadio">Admin</label><br /><br />

                <label htmlFor="email">Enter Username</label>
                <input type="email" placeholder="Enter your username:" name="email" id="email" onChange={handleChange} /><br /><br />

                <label htmlFor="password">Enter Password</label>
                <input type="password" placeholder="Enter your password:" name="password" id="password" onChange={handleChange} /><br /><br />

                <input type="submit" value="Login" className="m-5 bg-primary" />
            </form>
        </div>
    );
}

export default Login;
