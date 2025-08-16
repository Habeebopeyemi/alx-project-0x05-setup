import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserListAxios: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserListAxios;
