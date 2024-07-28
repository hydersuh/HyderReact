import '../index.css'
import Employee from "../components/employee";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmoloyee';
import Header from '../components/Header';


function Employees() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Ameera",
        role: "Developer",
        img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id: 2,
        name: "Amalen",
        role: "Secrat",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 3,
        name: "Hyder",
        Role: "CEO",
        img: "https://media.istockphoto.com/id/1366764046/photo/the-gumbaz-at-srirangapatna-is-a-muslim-mausoleum-at-the-centre-of-a-landscaped-garden.jpg?b=1&s=612x612&w=0&k=20&c=8o_f_NaQZgn-sn6Kw6VjjeTfCgYf6MZ5MqYy__HMTag=",
      },
      {
        id: 4,
        name: 'Emily Cody',
        role: "Acct",
        img: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 5,
        name: "Samaher",
        role: "Acccounts",
        img: "https://images.pexels.com/photos/19378027/pexels-photo-19378027/free-photo-of-portrait-of-brunette-woman-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      },
    ]
  );

  function updateEmployee(id, newName, newRole) {
    const updateEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole }
      }

      return employee;
    });
    setEmployees(updateEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">

      {showEmployees ?
        <>
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}    
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
        :
        <p>You can not see the employee</p>
      }
    </div>
  );
}

export default Employees;
