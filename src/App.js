import React, {useState} from "react";
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

  // Agregar usuarios
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = uuidv4()
    console.log(user)
    setUsers([
      ...users,
      user
    ])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true) 
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ?(
            <div>
              <h2>Add user</h2>
              <EditUserForm addUser={addUser}  />
            </div>
          
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser}  />
            </div>
          )}
          
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
          </div>
       </div>
      </div>
    </div>
  );
}

export default App;
