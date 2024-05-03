import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Admin.css'

function Admin() {
    const [usersArray, setUsersArray ] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getUsersClick();
    }, []);

    function getUsersClick() {
        let url = "http://localhost:8000/users"; //  server endpoint for fetching users at this URL
        axios.get(url)
            .then((res) => {
                setUsersArray(res.data);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }



    const filteredUsers = usersArray.filter((user) => {
        const username = user.uname ? user.uname.toLowerCase() : "";
        const email = user.email ? user.email.toLowerCase() : "";
        const userId = user._id ? user._id.toLowerCase() : "";
        return (
            username.includes(searchTerm.toLowerCase()) ||
            email.includes(searchTerm.toLowerCase()) ||
            userId.includes(searchTerm.toLowerCase())
        );
    });
    
    let serialNumber = 1;

    let resultArray = filteredUsers.map((item, index) => (
        <tr key={index}>
            <td>{serialNumber++}</td>
            <th>{item.provider}</th>
            <td>{item._id}</td>
            <td>{item.uname}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.registrationTime}</td>
            <td>{item.loginTime}</td>
            <td>{item.logoutTime}</td>
        </tr>
    ));


    return (
        <>
            <input
                type="text"
                placeholder="Search Users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <hr/>
            <div className="table-container">
                <table border="1"
                       align="center"
                       cellSpacing="10px"
                       cellPadding="10px"> 
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Provider</th>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>Email id</th>
                            <th>Phone Number</th>
                            <th>Registration Date</th>
                            <th>Login Time</th>
                            <th>Logout Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultArray}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Admin;
