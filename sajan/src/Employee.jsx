import Teams from './Teams.jsx';
import TeamMembersList from './TeamMembersList.jsx';
import React from 'react';



const Content = ({ current, employes, handleTeams, advance }) => {

  return (
    <section className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <Teams current={current}
            handleTeams={handleTeams}/>
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <div className='card-collection'>
            {
              <TeamMembersList current={current}
                employes={employes}
                advance={advance}/>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content