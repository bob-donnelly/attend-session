// Import the fetch logic custom hook from the admin components
import useGetAllUsers from '../components/adminTableComponent';

// AdminPanel view component
const AdminPanel = () => {
    
    // Defining users as equal to the custom hook that fetches the users data
    const users = useGetAllUsers();

    // Shows the necessary values of the users in a table
    return (
        <div>
            <table>
                {/* 
                    Table headers for the table
                */}
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Group Name</th>
                </tr>
        
                {/* 
                    Loops or maps through the users array and displays the values of each user in a table row
                */}
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.groupName}</td>
                    </tr>
                    ))
                };

            </table>
        </div>
    );
}

// Export default is used if there is only one function in the file
export default AdminPanel;