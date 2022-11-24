import React from "react";

const Dashboard = () => {
    function getUsers() {
        fetch(`/`)
        .then((response) => response.json())
        .then(users => console.log(users));
    }

    const users = getUsers();
    return (
        <>
            <h1>Dashboard</h1>
            <div>
                {getUsers()}
            </div>
        </>
    )
}

export default Dashboard;