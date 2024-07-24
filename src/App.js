import './App.css'
import Employee from "./components/employee";
import { useState } from 'react';


function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
        <>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}></input>
          <Employee name='Hyder' role='inser' />
          <Employee  name='Ahmed' role={role}/>
          <Employee name='Awad'/>
        </>
        :
        <p>You can not see the employee</p>
      }
    </div>
  );
}

export default App;
