import './index.css'
import Employee from "./components/employee";
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        name: "Ameera",
        role: "Developer",
        img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Amalen",
        role: "Secrat",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Hyder",
        Role: "CEO",
        img: "https://media.istockphoto.com/id/1366764046/photo/the-gumbaz-at-srirangapatna-is-a-muslim-mausoleum-at-the-centre-of-a-landscaped-garden.jpg?b=1&s=612x612&w=0&k=20&c=8o_f_NaQZgn-sn6Kw6VjjeTfCgYf6MZ5MqYy__HMTag=",
      },
      {
        name: 'Emily Cody',
        role: "Acct",
        img: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Samaher",
        role: "Acccounts",
        img: "https://images.pexels.com/photos/19378027/pexels-photo-19378027/free-photo-of-portrait-of-brunette-woman-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      },
    ]
  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
        <>
          <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}></input>
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              console.log(uuidv4());
              return(
              <Employee 
              key={uuidv4()}
              name={employee.name} 
              role={employee.role} 
              img={employee.img}
              />
              );
            })}
          </div>
        </>
        :
        <p>You can not see the employee</p>
      }
    </div>
  );
}

export default App;
