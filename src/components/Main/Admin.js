import React, { useEffect, useState } from "react";
import axios from 'axios';
 
function Admin() { 
    
    const [usersArray, setUsersArray ] = useState([]); 

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
 
    let resultArray = usersArray.map((item, index) => (
        <tr key={index}>
            <td>{item._id}</td>
            <td>{item.uname}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.loginTime}</td>
            <td>{item.logoutTime}</td>
            <td>{item.registrationDate}</td>                 
        </tr>
    ));

    return (
        <>
            <input type="button" value="Get Users" onClick={getUsersClick} />
            <hr/>
            <table align="center" border="2" width="600" cellSpacing="0" cellPadding="5">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>User Name</th>
                        <th>Email id</th>
                        <th>Phone Number</th>
                        <th>Login Time</th>
                        <th>Logout Time</th> 
                        <th>Registration Date</th>                  
                    </tr>
                </thead>
                <tbody>
                    {resultArray}
                </tbody>
            </table>
        </>
    );
}

export default Admin;
