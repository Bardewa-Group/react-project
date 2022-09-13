import { useState } from "react";

const TeamMembers = ({ employes, current, setCurrent }) => {

  const [employeGroup, setEmployeGroup] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = []

    var teamMember_A = employes.filter((employee) => employee.teamName == "TeamA");  // getting the list of member in team A
    var teamA = { team: 'TeamA', members: teamMember_A, collapse: current == 'TeamA' ? false : true };
    teams.push(teamA);

    var teamMember_B = employes.filter((employee) => employee.teamName == "TeamB");  // getting the list of member in team B
    var teamB = { team: 'TeamB', members: teamMember_B, collapse: current == 'TeamB' ? false : true };
    teams.push(teamB);

    var teamMember_C = employes.filter((employee) => employee.teamName == "TeamC");  // getting the list of member in team C
    var teamC = { team: 'TeamC', members: teamMember_C, collapse: current == 'TeamC' ? false : true };
    teams.push(teamC);

    var teamMember_D = employes.filter((employee) => employee.teamName == "TeamD");  // getting the list of member in team D
    var teamD = { team: 'TeamD', members: teamMember_D, collapse: current == 'TeamD' ? false : true };
    teams.push(teamD);

    return teams;

  }

  const handleGroupTeam = (event) => {
    var newGroupData = employeGroup.map((groupData) => groupData.team == event.currentTarget.id ? { ...groupData, collapse: !groupData.collapse } : groupData);
    setEmployeGroup(newGroupData);
    setCurrent(event.currentTarget.id)
  }

  return (
    <main className="container">
      {
        employeGroup.map((item) => {
          return (
            <div className="card mt-2" style={{cursor:'pointer'}}>
              <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleGroupTeam}>
                Team Name : {item.team}
              </h4>
              <div id={'collapse_' + item.team} className={item.collapse == true ? 'collapse' : ''}>
                {
                  item.members.map((member) => {
                    return (
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default TeamMembers