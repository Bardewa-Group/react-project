import first from './images/first.jpg';
import second from './images/second2.jpg';
const TeamMembersList = ({ current, employes, advance }) => {

  return (
    employes.map((data) => (

      <div key={data.id} id={data.id} className={(data.teamName === current) ? ('card m-2 standout') : ('card m-2')} style={{ cursor: "pointer" }} onClick={advance}>
        {(data.gender === 'female') ? <img src={second} className='card-img-top' /> :
          <img src={first} className='card-img-top' />}

        <div className='card-body' >
          <h5 className='card-title'>Full Name: {data.fullName}</h5>
          <p className='card-text'>Position: <b>{data.designation}</b></p>
        </div>

      </div>
    ))
  )
}
export default TeamMembersList;