import "./Card.css";
import logo from "./img/NxtWave.png";
const Card = ({ data, resources }) => {
  return data.tag === "user" ? (
    <div className="card-detail">
      <div className="heading">
        <img src={data.icon_url ? data.icon_url : logo} alt="Card-Logo" />
        <div className="heading-details">
          <h2>{data.title ? data.title : "NxtWave"}</h2>
          <p>{data.category ? data.category : "Category"}</p>
        </div>
      </div>
      <a href={data.link ? data.link : "https://www.ccbp.in/"}>
        www.{data.link.substr(8)}
      </a>
      <p>
        {data.description
          ? data.description.substr(0, 97) +
            (data.description.substr(0, 97).length > 97 ? "...." : "")
          : "description"}
      </p>
    </div>
  ) : (
    <></>
  );
};
export default Card;
