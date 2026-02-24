import UserDetails from "./components";
import "./App.css";

const UserProfile = [
  {
    uniqueId: 1,
    ImageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    Name: "Esther Howard",
    Role: "Software Engineer",
  },

  {
    uniqueId: 2,
    ImageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    Name: "Esther Howard",
    Role: "Software Engineer",
  },

  {
    uniqueId: 3,
    ImageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    Name: "Esther Howard",
    Role: "Software Engineer",
  },

  {
    uniqueId: 4,
    ImageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    Name: "Esther Howard",
    Role: "Software Engineer",
  },
];

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {UserProfile.map((eachItem) => (
        <UserDetails UserProfile={eachItem} key={eachItem.uniqueId} />
      ))}
    </ul>
  </div>
);

export default App;
