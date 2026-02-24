import "./index.css";

const CardDetails = (props) => {
  const { UserDetails } = props;
  const { title, description, className } = UserDetails;

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn">Show More</button>
      </div>
    </li>
  );
};

export default CardDetails;