"use client";
import { useState } from "react";
import "../../styles/user.css";

export default function User() {
  const [users, setUsers] = useState([]);

  const handleButtonClick = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleButtonClick} className="btn">Fetch Users</button>
      <ul>
        {users.map((user) => (
          <li className="list" key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
