import React, {useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("http://127.0.0.1:6012/user/admin")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  
  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.userName}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
