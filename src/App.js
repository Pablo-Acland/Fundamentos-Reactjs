import React, {useState} from "react";
import UserTable from './components/UserTable';



function App() {

  // Agregar usuarios
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)
  return (
    <div>
      <h2>View users</h2>
        <UserTable users={users}></UserTable>
    </div>
  );
}

export default App;
