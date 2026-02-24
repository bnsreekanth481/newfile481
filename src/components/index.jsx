const UserDetails = (props) => {

const {UserProfile} = props;
const {ImageUrl,Name,Role} = UserProfile;

return (
   <div className="user-card-container">

    <img src= {ImageUrl} alt="avatar" className="avatar"/>

    <div className="user-details-container">
    <h1 className="user-name">{Name}</h1>
    <p className="user-designation">{Role}</p>
    </div>
   </div>
)
}

export default UserDetails;