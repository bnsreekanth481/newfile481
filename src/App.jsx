import CardDetails from "./components";
import "./App.css";

const userDetails = [
  {
    UniqueId: 1,
    title: "The Seasons Latest",
    description:
      "Get the seasons all latest designs in a flick of your hand",
    className: "card-1",
  },
  {
    UniqueId: 2,
    title: "Our New Designs",
    description:
      "Get the designs developed by our in-house team all for yourself",
    className: "card-2",
  },
  {
    UniqueId: 3,
    title: "Insiders",
    description:
      "Get the top class products for yourself with an extra off",
    className: "card-3",
  },
];

const App = () => (
  <div className="app-container">
    <ul className="banner-cards-list">
      {userDetails.map((eachCard) => (
        <CardDetails
          UserDetails={eachCard}
          key={eachCard.UniqueId}
        />
      ))}
    </ul>
  </div>
);

export default App;