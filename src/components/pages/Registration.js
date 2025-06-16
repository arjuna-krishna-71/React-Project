import { useState } from "react";
import axios from "axios";
function Registration() {

    let [registrationData, setRegistratonData] = useState([]);
    function handleChange(e) {
        console.log(e.target.name);
        console.log(e.target.value);
        setRegistratonData({ ...registrationData, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        console.log(e);
        e.preventDefault();
        UpdatingDatabase();
        console.log(registrationData);
    }
    async function UpdatingDatabase() {
        console.log(registrationData.userType);
        const len = Object.keys(registrationData).length;
        console.log(len);
        if (len > 0) {
            if (registrationData.userType === "user") {
                let res = await axios.post("http://localhost:1025/users", registrationData);
                console.log(res.data);
            } else if (registrationData.userType === "admin") {
                let res = await axios.post("http://localhost:1025/admins", registrationData);
                console.log(res.data);
            }
        } else {
            console.log("The data in the Registration feild is Empty");
        }
    }
    return (
        <>
            <div className="text-center">
                <p className="text-warning display-6">Registration</p>
                <div className="m-5 card w-50 h-50 d-flex">
                    <form onSubmit={handleSubmit}>
                        <div className="text-center mt-2">
                            <input type="radio" onChange={handleChange} value="user" name="userType" id="user" className="p-1" /><label htmlFor="user" className="text-dark p-1">User</label>
                            <input type="radio" onChange={handleChange} value="admin" name="userType" id="admin" className="p-1" /><label htmlFor="admin" className="text-dark p-1">Admin</label><br />
                        </div>
                        <label htmlFor="name" className="mt-3">Enter name:</label>
                        <input type="text" name="name" id="name" required placeholder="Enter your name" onChange={handleChange} /> <br></br><br />
                        <label htmlFor="email">Enter email:</label>
                        <input type="email" name="email" id="email" required placeholder="Enter your email" onChange={handleChange} /><br></br><br />
                        <label htmlFor="pwd">Enter password:</label>
                        <input type="text" name="password" id="pwd" required placeholder="Create your password" onChange={handleChange} /><br></br><br />
                        <input type="submit" name="Submit" className="mb-3" /><br />
                    </form>

                </div>

            </div>
            <>



                {/* <p>The user logined is : {registrationData.name}</p> */}

            </>
        </>
    )
}
export default Registration;
