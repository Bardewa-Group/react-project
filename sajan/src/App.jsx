import * as React from 'react';
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Employee from './Employee';
import TeamMembers from './TeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  const [current, setCurrent] = useState(JSON.parse(localStorage.getItem('current')) || "TeamB");

  const [employes, setEmployes] = useState(JSON.parse(localStorage.getItem('employesList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  const handleTeams = (event) => {
    setCurrent(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem('employesList', JSON.stringify(employes));
  }, [employes])


  useEffect(() => {
    localStorage.setItem('current', JSON.stringify(current));
    document.title = `Bardewa, ${current}`;
  }, [current])


  const advance = (event) => {
    const transformed_employees = employes.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? (employee.teamName === current) ? { ...employee, teamName: '' } : { ...employee, teamName: current }
      : employee);
    setEmployes(transformed_employees);
  }

  return (
    <Router>
      <Nav />
      <Header current={current}
        teamMemberCount={employes.filter((employee) => employee.teamName === current).length}
      />

      <Routes>

        <Route path='/'
          element={<Employee current={current}
            employes={employes}
            handleTeams={handleTeams}
            advance={advance}
          />}>
        </Route>

        <Route path='/teamMembers'
          element={<TeamMembers employes = { employes }
                     current = { current }
                     setCurrent = {setCurrent}
                     />}>
        </Route>

        <Route path='*'
          element={<NotFound />}>
        </Route>


      </Routes>

      <Footer />

    </Router>
  )
}
